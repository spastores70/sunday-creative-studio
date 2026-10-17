"""Convert author manuscripts into escaped, chapter-addressable web editions."""
import json,re,html,hashlib
from pathlib import Path
from docx import Document
from docx.oxml.ns import qn
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
SOURCES=ROOT.parent/'book-sources'; COVERS=ROOT.parent/'cover-sources'
# source prefix, public title, category, description, optional cover prefix
specs=[
('When_Home','When Home Is No Longer Home','OFW & Relationships','An OFW woman’s journey through heartbreak, healing, and a new beginning.','When_Home'),
('The_Women','The Women Who Carry Home','OFW & Relationships','The hidden strength of OFW women keeping families together across the miles.','The_Women'),
('Far_From','Far From Home, Close to Hope','OFW & Relationships','Thirty days of emotional strength, self-worth, and encouragement for OFW women.',None),
('The_Road','The Road Not Taken','Fiction','A story of the life we choose—and the life still waiting for us.',None),
('Last_Seen','Last Seen Online','Fiction','A Facebook love story inspired by an OFW in Hong Kong.',None),
('Its_Not','It’s Not Too Late','Personal Growth','Why some people do their best work later in life.','Its_Not'),
('The_Ones','The Ones Who Keep Going','Personal Growth','What persistence really requires—and how to know when to change direction.','Cover_Option_2'),
('The_Second','The Second Half','Personal Growth','Why your most important years may still be ahead of you.',None),
('The_Making','The Making of Extraordinary','Personal Growth','Developing the abilities and habits that help people become exceptional.','The_Making'),
('Understanding','Understanding Depression','Wellbeing','A compassionate guide for individuals, families, and caregivers.','Understanding'),
('French_Baking','French Baking in 28 Days','Baking','A step-by-step home baking program, with no-scale measurements.',None),
('The_Filipino','The Filipino Bakery Book','Baking','Bring Filipino bakery favorites into your home kitchen.',None),
('Flexographic','Flexographic Printing: Principles, Process, and Practice','Professional Learning','A pressroom reference for new operators and experienced pressmen.','Flexographic'),
('Calculus','Calculus Made Clear','Professional Learning','A step-by-step path to understanding calculus.',None),
('Mastering','Mastering General Lines Property and Casualty','Insurance','A post-licensing guide and practice curriculum for Texas insurance professionals.',None),
('Texas_Property','Texas Property and Casualty Insurance Exam Made Simple','Insurance','Study lessons, Texas law review, and practice questions.','Texas_P'),
('Sunday_Pastores','Texas P&C Exam Success Guide 2026','Insurance','A structured study system with original practice questions.',None),
('The_New_DON','The New DON’s First 90 Days','Nursing Leadership','A practical first-reader edition for directors of nursing.','The_New_DON'),
('The_Survey','The Survey-Ready DON','Nursing Leadership','Tracer rounds, deficiency prevention, and year-round compliance.',None),
('QAPI','QAPI That Actually Works','Nursing Leadership','A practical approach to quality assurance and performance improvement.',None),
('How_to_Be','How to Be an Amazon Affiliate and Earn Money','Digital Skills','A practical playbook for publishing helpful affiliate content.',None),
('100_Copy','100 Copy-Paste AI Prompts for VS Code','Digital Skills','Build websites, apps, dashboards, and full-stack projects with AI.',None),
('Website_Design','Website Design Prompt eBook','Digital Skills','Fifty copy-and-paste prompts for building websites in VS Code.',None),
('Sunday_Website','Sunday Website Boilerplate','Digital Skills','A beginner-friendly guide to rebuilding a complete website starter.',None),
('Sunday_Creative','Sunday Creative Studio Pro','Digital Skills','A step-by-step website project guide from static pages to ecommerce.',None),
]
catalog_path=ROOT/'src/data/books.json'
existing_catalog=json.loads(catalog_path.read_text()) if catalog_path.exists() else []
existing_covers={b['slug']:b.get('cover') for b in existing_catalog}
books=[]
# These titles were intentionally removed from the public library.
specs = [spec for spec in specs if spec[2] not in ('Insurance', 'Nursing Leadership') and spec[1] != 'Calculus Made Clear']
for n,(prefix,title,category,description,coverprefix) in enumerate(specs):
 src=next(SOURCES.glob(prefix+'*.docx')); d=Document(src)
 slug=re.sub(r'[^a-z0-9]+','-',title.lower().replace('’','')).strip('-')
 out=ROOT/'public/books'/slug;out.mkdir(exist_ok=True)
 author='Averose Pastores' if category=='Nursing Leadership' else ('Sunday Creative Studio' if prefix in ['Last_Seen','100_Copy','Website_Design','Sunday_Website','Sunday_Creative'] else 'Sunday Pastores')
 sections=[{'title':'Opening pages','html':''}];toc=[];words=0;imgs=[]
 def paragraph(el):
  nonlocal_dummy=None
  chunks=[]
  for child in el.iter():
   if child.tag==qn('w:t'): chunks.append(html.escape(child.text or ''))
   elif child.tag==qn('w:tab'):chunks.append('    ')
   elif child.tag==qn('w:br'):chunks.append('<br>')
   elif child.tag==qn('a:blip'):
    rid=child.get(qn('r:embed'))
    if rid and rid in d.part.related_parts:
     part=d.part.related_parts[rid]; ext=part.partname.rsplit('.',1)[-1]; name=hashlib.sha256(part.blob).hexdigest()[:16]+'.'+ext
     (out/name).write_bytes(part.blob); url='/books/'+slug+'/'+name
     if url not in imgs:imgs.append(url)
     chunks.append('<img loading="lazy" src="'+url+'" alt="Book illustration">')
  return ''.join(chunks)
 for el in d.element.body:
  if el.tag==qn('w:p'):
   text=''.join(el.itertext()) if False else ''.join(t.text or '' for t in el.iter(qn('w:t')))
   words+=len(text.split()); content=paragraph(el)
   style=el.find('w:pPr/w:pStyle',el.nsmap); style=style.get(qn('w:val')) if style is not None else ''
   heading=style.lower().startswith(('heading','title')) or (len(text)<160 and bool(re.match(r'^(Chapter\s+\d+|Day\s+\d+|Part\s+[IVX\d]+)\b',text,re.I)))
   if heading and text.strip():
    if len(sections[-1]['html'])>300 and (style.lower() in ['heading1','title'] or re.match(r'^(Chapter\s+\d+|Day\s+\d+|Part\s+)',text,re.I)):
     sections.append({'title':text.strip(),'html':''})
    sections[-1]['html']+='<h2>'+content+'</h2>'
   elif content.strip():sections[-1]['html']+='<p>'+content+'</p>'
  elif el.tag==qn('w:tbl'):
   rows=[]
   for row in el.findall('w:tr',el.nsmap):
    cells=[]
    for cell in row.findall('w:tc',row.nsmap):
     cells.append('<td>'+''.join('<p>'+paragraph(p)+'</p>' for p in cell.findall('w:p',cell.nsmap))+'</td>')
    rows.append('<tr>'+''.join(cells)+'</tr>')
   sections[-1]['html']+='<div class="table-scroll"><table>'+''.join(rows)+'</table></div>'
 # Cover assets are resized for the web; manuscript illustrations remain untouched.
 cover=None
 if coverprefix:
  cp=next(COVERS.glob(coverprefix+'*.jpg')); target=ROOT/'public/covers'/(slug+'.jpg')
  im=Image.open(cp).convert('RGB');im.thumbnail((640,1024));im.save(target,quality=87);cover='/covers/'+target.name
 elif imgs:
  # Use a portrait front-cover image only when it is embedded in the opening pages.
  imagepath=ROOT/'public'/imgs[0].lstrip('/')
  try:
   im=Image.open(imagepath)
   if .55<im.width/im.height<.75 and '<img' in sections[0]['html'][:1500]:
    target=ROOT/'public/covers'/(slug+'.jpg');im.convert('RGB').save(target,quality=87);cover='/covers/'+target.name
  except Exception:pass
 if cover is None:cover=existing_covers.get(slug)
 (ROOT/'public/books'/(slug+'.json')).write_text(json.dumps({'sections':sections},ensure_ascii=False))
 books.append({'slug':slug,'title':title,'category':category,'description':description,'author':author,'cover':cover,'words':words,'minutes':max(1,round(words/200)),'sections':[x['title'] for x in sections],'color':n%6})
 print(title,words,len(sections),len(imgs),'images')
# Preserve individually imported books that are not in the original source batch.
imported_slugs={b['slug'] for b in books}
books.extend(b for b in existing_catalog if b['slug'] not in imported_slugs)
(ROOT/'src/data/books.json').write_text(json.dumps(books,ensure_ascii=False,indent=2))
