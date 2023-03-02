'use client'; //tells the compiler that this file is a client file
import {useRouter} from "next/navigation";
import Link from 'next/link';

const Note = ({note}: any) => {
    const {id, title, content, created} = note || {};

    const router = useRouter();

    const handleDelete = async (id: string) => {
        await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`, {
            method: 'DELETE',
        });
        router.refresh();
    }

    return (
        <div className="bg-yellow-200 p-1 shadow-amber-400 shadow-md h-40 w-40">
                <span className="flex justify-between">
                    <h2 className={"text-xl font-semibold"}>{title}</h2>
                    <button onClick={() => handleDelete(id)}>
                        <svg width="16" height="16" fill="red" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>

                </span>
            <Link href={`/notes/${id}`}>
                <div>
                    <h5 className={"text-lg font-m mb-4"}>{content}</h5>
                    <p className={"text-xs"}>{
                        new Date(created).toLocaleDateString('it')
                    }</p>
                </div>
            </Link>
        </div>

    );
}

export default Note;