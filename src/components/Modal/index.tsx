import { ApolloError, gql, useMutation } from '@apollo/client';
import { Check, X } from 'phosphor-react';
import { FormEvent, useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const ADD_PLAYER = gql`
  mutation addPlayer($name: String!, $dexterity: Int!) {
    createPlayer(data: { name: $name, dexterity: $dexterity }) {
      id
    }
  }
`;

export function Modal({ onClose }: ModalProps) {
  const [addPlayer, { data, loading, error }] = useMutation(ADD_PLAYER);

  const [name, setName] = useState('');
  const [dexterity, setDexterity] = useState('');

  async function handleAddPlayer(e: FormEvent) {
    e.preventDefault();
    await addPlayer({ variables: { name, dexterity: parseInt(dexterity, 10) } });
    onClose();
  }

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-lg shadow-md transition-all">
      <form onSubmit={handleAddPlayer} className="bg-zinc-700 p-4 gap-2 rounded-md flex flex-col">
        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-zinc-600">
          <h2 className="text-xl font-semibold">Criar novo jogador</h2>
          <button onClick={onClose}>
            <X size={32} color="white" />
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="nickname">Nome</label>
            <input type="text" name="nickname" onChange={event => setName(event.target.value)} className="focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 focus:outline-none transition-all my-2 bg-zinc-600 p-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dexterity">Destreza</label>
            <input type="text" name="dexterity" onChange={event => setDexterity(event.target.value)} className="focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 focus:outline-none transition-all my-2 bg-zinc-600 p-2 rounded-md" />
          </div>
        </div>

        <button className="font-semibold transition-colors flex items-center justify-center gap-2 bg-yellow-500 text-zinc-800 p-2 rounded-md hover:bg-yellow-600">
          <Check size={32} />
          Concluir
        </button>
      </form>
    </div>
  );
}
