import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto mt-10 prose">
        <h1>Testing out tailwind typography</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
          delectus.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi
          officia optio corrupti sit vitae reprehenderit, blanditiis, similique
          labore sed aliquam totam. Nostrum sint esse sequi accusamus natus
          consequatur amet quos dolorum vero expedita, tempore saepe labore
          totam, veniam animi odit dolorem officiis commodi aut perferendis
          repellendus obcaecati deleniti numquam doloribus! Nihil similique at
          laudantium hic a aperiam ut. Eligendi voluptas dolores recusandae vel
          amet optio temporibus ad qui! Voluptas provident impedit hic explicabo
          aliquid sequi nisi? Totam, nobis architecto expedita fugiat labore
          animi error accusamus, corporis vero et blanditiis sequi enim incidunt
          soluta dignissimos minus repellendus quibusdam aliquid culpa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          eligendi ut odit nostrum magnam mollitia quos. Explicabo quaerat
          dolore facere?
        </p>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
