import Head from 'next/head'
import Circle from "../components/Circle"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title></title>
        <link rel="icon" href="" />
      </Head>

      <main>
        <Circle></Circle>
        <div>
          this is a test, ok?
        </div>
      </main>

      <footer>

      </footer>

    </div>
  )
}
