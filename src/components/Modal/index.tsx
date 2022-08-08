import { X } from 'phosphor-react';

import { Input } from '../Input';

interface ModalProps {
  onClose: () => void;
}

export function Modal({ onClose }: ModalProps) {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm transition-all">
      <form action="" className="bg-zinc-700 p-4 gap-2 rounded-md flex flex-col">
        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-zinc-600">
          <h2 className="text-xl font-semibold">Criar novo jogador</h2>
          <button onClick={onClose}>
            <X size={32} color="white" />
          </button>
        </div>

        <div className="flex gap-4">
          <Input type="text" title="Nome" name="name" />
          <Input type="number" title="Mod" name="dex" />
        </div>
      </form>
    </div>
  );
}
