import Head from 'next/head';
import { Header } from '../components/Header/index';
import { Players } from '../components/Players/index';
import { Rolls } from '../components/Rolls';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <Head>
        <title>Rolling System</title>
      </Head>

      <Header title="Home" />

      <main className="flex w-[70%] justify-evenly bg-blue-500">
        <Players />
        <Rolls />
      </main>
    </div>
  );
}
