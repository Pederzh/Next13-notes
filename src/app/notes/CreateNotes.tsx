'use client'; //tells the compiler that this file is a client file

import {ChangeEvent, useState} from 'react';
import {useRouter} from "next/navigation";

export default function CreateNotes() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            }),
        });

        setTitle('');
        setContent('');
        router.refresh();
    }
    return (
        <div className="bg-yellow-200 p-1 shadow-amber-400 shadow-md rounded-md">
            <h2 className={"text-xl font-semibold"}>Create Notes</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />
                    <textarea
                        name="content"
                        id="content"
                        placeholder="Content"
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                    />
                    <button
                        className="rounded-md py-2 text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600"
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

