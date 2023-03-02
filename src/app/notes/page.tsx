import Link from 'next/link';
import * as console from "console";
import CreateNotes from "@/app/notes/CreateNotes";
import Note from "@/app/notes/Note";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=10',
        {cache: 'no-cache'});
    const data = await res.json();
    return data?.items as any[];
}

export default async function PageNotes() {
    const notes = await getNotes();
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg space-y-4 p-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold">📋 Notes</h1>
            </div>
            <div className={"flex space-x-4"}>
                {notes?.map((note) => (
                    <Note key={note.id} note={note}/>
                ))}
                <CreateNotes/>
            </div>
        </div>
    )
}

