import books from '@/data/books.json';
import {notFound} from 'next/navigation';
import Reader from '@/components/Reader';
export function generateStaticParams(){return books.map(b=>({slug:b.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const b=books.find(b=>b.slug===slug);return {title:b?.title??'Book not found',description:b?.description}}
export default async function ReadPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const book=books.find(b=>b.slug===slug);if(!book)notFound();return <Reader book={book}/>}
