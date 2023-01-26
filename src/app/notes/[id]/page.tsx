async function getNoteById(id: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`,
        {
            next: {revalidate: 10}
        });
    const data = await res.json();
    return data as any;
}

export default async function PageNoteById({params}: any) {
    const note = await getNoteById(params.id);
    return (
        <div className={"bg-yellow-200"}>
            <h1 className="text-2xl font-bold">Note with id: {note.id}</h1>
            <p>
                <span className={"font-semibold"}>Title: </span>
                {note.title}
            </p>
            <p>
                <span className={"font-semibold"}>Content: </span>
                {note.content}
            </p>
            <p>
                <span className={"font-semibold"}>Created: </span>
                {note.created}
            </p>
        </div>
    );
}