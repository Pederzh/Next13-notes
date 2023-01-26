import Link from 'next/link';
import * as console from "console";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=10');
    const data = await res.json();
    return data?.items as any[];
}

export default async function PageNotes() {
    const notes = await getNotes();
    return (
        <main>
            <h1 className="text-2xl font-bold">Notes</h1>
            <div className={"flex space-x-4"}>
                {notes?.map((note) => (
                    <Note key={note.id} note={note}/>
                ))}
            </div>
        </main>
    )
}

const Note = ({note}: any) => {
    const {id, title, content, created} = note || {};
    return (
        <Link href={`/notes/${id}`}>
            <div className="bg-yellow-200 p-1 shadow-amber-400 shadow-md">
                <h2 className={"text-xl font-semibold"}>{title}</h2>
                <h5 className={"text-lg font-m mb-4"}>{content}</h5>
                <p className={"text-xs"}>{created}</p>
            </div>
        </Link>
    );
}