import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Datamol - Molecular Manipulation Made Easy</title>
        <meta
          name="description"
          content="Datamol - Molecular Manipulation Made Easy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Datamol - Molecular Manipulation Made Easy
      </h1>
    </>
  );
}
