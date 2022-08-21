import { gql } from '@apollo/client';
import Head from 'next/head';
import { GetServerSideProps } from 'next/types';

import { Header } from '../components/Header';
import { Players } from '../components/Players';
import { Rolls } from '../components/Rolls';
import { client } from '../lib/apollo';

interface getPlayersQuery {
  data: {
    players: {
      name: string;
      dexterity: number;
    }[];
  };
}

export default function Home({ data }: getPlayersQuery) {
  return (
    <div className="flex flex-col items-center gap-16">
      <Head>
        <title>Rolling System</title>
      </Head>
      <Header title="Inicio" />
      <main className="flex w-[65%] justify-evenly gap-4">
        <Players players={data.players} />
        <Rolls />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await client.query({
    query: gql`
      query GetPlayersQuery {
        players {
          name
          dexterity
          id
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};
