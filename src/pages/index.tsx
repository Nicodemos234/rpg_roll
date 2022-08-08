import Head from 'next/head';

import { Header } from '../components/Header';
import { Players } from '../components/Players';
import { Rolls } from '../components/Rolls';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <Head>
        <title>Rolling System</title>
      </Head>

      <Header title="Inicio" />

      <main className="flex w-[65%] justify-evenly gap-4">
        <Players />
        <Rolls />
      </main>
    </div>
  );
}
