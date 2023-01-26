import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
          Next 13 demo by&nbsp;
          <code className={styles.code}>Pederzh</code>
        </p>
        <div className={styles.center}>
          <p className={"text-9xl"}>
            Go to notes
          </p>
        </div>
      </div>
    </main>
  )
}
