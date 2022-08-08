import { DiceFive, Sword, Trash } from 'phosphor-react';

interface PlayerProps {
  name: string;
  mod: number;
}

export function Player({ name, mod }: PlayerProps) {
  return (
    <div className="flex items-center bg-zinc-700 py-1 px-2 rounded-md">
      <span className="text-lg font-semibold flex-1" title="Nome">
        {name}
      </span>

      <section className="flex flex-1 justify-center items-center text-orange-500 gap-1 font-bold" title="Destreza">
        <span>{mod}</span>
        <Sword size={18} weight="bold" />
      </section>

      <section className="flex flex-1 justify-end items-center gap-1">
        <button className="text-red-500 hover:scale-110 transition-transform" title="Excluir">
          <Trash size={32} weight="bold" />
        </button>

        <button className="text-teal-500 hover:scale-110 transition-transform" title="Rolar">
          <DiceFive size={32} weight="bold" />
        </button>
      </section>
    </div>
  );
}
