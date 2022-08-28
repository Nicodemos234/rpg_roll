import { gql, useMutation, useQuery } from '@apollo/client';
import { Plus, User } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { Container } from '../Container';
import { Loading } from '../Loading';
import { Modal } from '../Modal';
import { Player } from './Player';

interface GetPlayersQueryResponse {
  players: PlayerProps[];
}

interface PlayerProps {
  id: string;
  name: string;
  dexterity: number;
}

const GET_PLAYERS_QUERY = gql`
  query GetPlayersQuery {
    players {
      name
      dexterity
      id
    }
  }
`;

const DELETE_PLAYER = gql`
  mutation deletePlayer($id: ID) {
    deletePlayer(where: { id: $id }) {
      id
    }
  }
`;

export function Players() {
  const { data, loading } = useQuery<GetPlayersQueryResponse>(GET_PLAYERS_QUERY);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playersAvailable, setPlayersAvailable] = useState(data?.players!);

  const [deletePlayer] = useMutation(DELETE_PLAYER);

  useEffect(() => {
    if (loading === false && data?.players) {
      setPlayersAvailable(data.players);
    }
  }, [loading, data]);

  const handleAddNewPlayer = (player: PlayerProps) => {
    setPlayersAvailable([...playersAvailable, player]);
  };

  async function handleRemovePlayer(id: string) {
    setIsLoading(true);
    let placeholderPlayers: PlayerProps[] = playersAvailable.filter(player => player.id !== id);
    await deletePlayer({ variables: { id } });
    setIsLoading(false);
    if (!isLoading) setPlayersAvailable(placeholderPlayers);
  }

  function handlePlayerRoll(dexterity: number) {
    const roll = Math.floor(Math.random() * 10) + 1;
    const priority = roll + dexterity;
  }

  return (
    <Container title="Jogadores" icon={<User size={28} />}>
      {loading || isLoading ? (
        <div className="flex items-center justify-center my-4">
          <Loading />
        </div>
      ) : (
        <section className="flex flex-col gap-2 mb-3">
          {playersAvailable?.map(player => {
            return <Player name={player.name} dexterity={player.dexterity} key={player.id} id={player.id} onRemove={handleRemovePlayer} onRoll={handlePlayerRoll} />;
          })}
        </section>
      )}
      <button className="font-semibold transition-colors flex items-center justify-center gap-2 bg-yellow-500 text-zinc-800 p-2 rounded-md hover:bg-yellow-600" onClick={() => setIsModalVisible(true)}>
        <Plus size={22} weight="bold" />
        Adicionar novo
      </button>
      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} onAddNewPlayer={handleAddNewPlayer} /> : ''}
    </Container>
  );
}
