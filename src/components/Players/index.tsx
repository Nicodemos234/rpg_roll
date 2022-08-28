import { gql, useMutation } from '@apollo/client';
import { Plus, User } from 'phosphor-react';
import { useState } from 'react';

import { Container } from '../Container';
import { Loading } from '../Loading';
import { Modal } from '../Modal';
import { Player } from './Player';

interface PlayersProps {
  players: PlayerProps[];
}

interface PlayerProps {
  name: string;
  dexterity: number;
  id: string;
}

const DELETE_PLAYER = gql`
  mutation deletePlayer($id: ID) {
    deletePlayer(where: { id: $id }) {
      id
    }
  }
`;

export function Players({ players }: PlayersProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playersAvailable, setPlayersAvailable] = useState(players);

  const [deletePlayer, { loading }] = useMutation(DELETE_PLAYER);

  const handleAddNewPlayer = (player: PlayerProps) => {
    setPlayersAvailable([...playersAvailable, player]);
  };

  async function handleRemovePlayer(id: string) {
    let placeholderPlayers = playersAvailable;
    placeholderPlayers = placeholderPlayers.filter(playerInRoom => playerInRoom.id !== id);
    await deletePlayer({ variables: { id } });
    setPlayersAvailable(placeholderPlayers);
  }

  return (
    <Container title="Jogadores" icon={<User size={28} />}>
      {loading ? (
        <div className="flex items-center justify-center my-4">
          <Loading />
        </div>
      ) : (
        <section className="flex flex-col gap-2 mb-3">
          {playersAvailable?.map(player => {
            return <Player name={player.name} dexterity={player.dexterity} key={player.id} id={player.id} onRemove={handleRemovePlayer} />;
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
