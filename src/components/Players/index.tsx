import { Plus, User } from 'phosphor-react';
import { useState } from 'react';

import { Container } from '../Container';
import { Modal } from '../Modal';
import { Player } from './Player';

export function Players() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Container title="Jogadores" icon={<User size={28} />}>
      <section className="flex flex-col gap-2 mb-3">
        <Player name="Aknorah" mod={12} />
        <Player name="Demogorgon" mod={8} />
        <Player name="Ami" mod={2} />
      </section>
      <button className="font-semibold transition-colors flex items-center justify-center gap-2 bg-yellow-500 text-zinc-800 p-2 rounded-md hover:bg-yellow-600" onClick={() => setIsModalVisible(true)}>
        <Plus size={22} weight="bold" />
        Adicionar novo
      </button>
      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : ''}
    </Container>
  );
}
