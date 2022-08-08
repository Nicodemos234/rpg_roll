import { DiceFive, Sword, Trash, UserFocus } from 'phosphor-react';

export function Player() {
  return (
    <div className="flex justify-between items-center bg-zinc-700 py-1 px-2 rounded-md">
      <span className="text-lg font-semibold" title="Nome">
        Aknorah
      </span>
      <section className="flex text-orange-500 font-bold" title="Destreza">
        <Sword size={26} weight="bold" />
        <span>12</span>
      </section>
      <section className="flex items-center gap-1">
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
