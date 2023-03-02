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
        <header>
            <nav className="bg-gray-600 align-middle">
                <div className={"flex space-x-1 py-1 px-1"}>
                    <Link href="/" className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Home
                    </Link>
                    <Link href="/notes"
                          className="bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        Notes
                    </Link>
                </div>
            </nav>
        </header>
        <main className="bg-gray-100 p-4 h-screen">
            <div className="flex items-center justify-center w-800">
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}
