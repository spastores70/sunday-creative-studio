"""Import one author-supplied Word manuscript into the web reader."""
import argparse,html,json,re
from pathlib import Path
from docx import Document
from docx.oxml.ns import qn
parser=argparse.ArgumentParser()
parser.add_argument('source',type=Path)
parser.add_argument('--slug',required=True)
parser.add_argument('--title',required=True)
parser.add_argument('--author',required=True)
parser.add_argument('--category',required=True)
parser.add_argument('--description',required=True)
parser.add_argument('--cover')
a=parser.parse_args()
assert re.fullmatch('[a-z0-9]+(?:-[a-z0-9]+)*',a.slug)
root=Path(__file__).resolve().parents[1]
d=Document(a.source)
sections=[{'title':'Opening pages','html':''}]
words=0
for p in d.paragraphs:
 text=p.text
 if not text.strip():continue
 words+=len(text.split())
 content=''
 for run in p.runs:
  rendered=html.escape(run.text).replace('\n','<br>')
  if run.italic:rendered='<em>'+rendered+'</em>'
  if run.bold:rendered='<strong>'+rendered+'</strong>'
  content+=rendered
 if not content:content=html.escape(text)
 style=p.style.name if p.style else ''
 if style.startswith('Heading'):
  if sections[-1]['html']:sections.append({'title':text,'html':''})
  else:sections[-1]['title']=text
  sections[-1]['html']+='<h2>'+content+'</h2>'
 elif style=='Title':sections[-1]['html']+='<h2>'+content+'</h2>'
 else:sections[-1]['html']+='<p>'+content+'</p>'
(root/'public/books'/f'{a.slug}.json').write_text(json.dumps({'sections':sections},ensure_ascii=False))
p=root/'src/data/books.json';books=json.loads(p.read_text())
entry={'slug':a.slug,'title':a.title,'category':a.category,'description':a.description,'author':a.author,'cover':a.cover,'words':words,'minutes':max(1,round(words/200)),'sections':[s['title'] for s in sections],'color':len(books)%6}
books=[b for b in books if b['slug']!=a.slug];books.append(entry);p.write_text(json.dumps(books,ensure_ascii=False,indent=2))
print(json.dumps({'title':a.title,'words':words,'sections':len(sections),'books':len(books)}))
