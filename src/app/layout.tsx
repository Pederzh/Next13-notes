import './globals.css'
import Link from 'next/link';
//use TailwindCSS
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body className={"font-sans"}>
        <main>
            <nav className="bg-gray-600 align-middle">
                <div className={"flex space-x-1 py-1 px-1"}>
                    <Link href="/" className="
                        bg-gray-700 text-white font-bold py-2 px-4 rounded
                    ">
                        Home
                    </Link>
                    <Link href="/notes"
                          className="bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        Notes
                    </Link>
                </div>
            </nav>
        </main>
        <div className="container mx-auto mt-4">
            {children}
        </div>
        </body>
        </html>
    )
}
