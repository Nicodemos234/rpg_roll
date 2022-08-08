import { ReactNode } from 'react';

interface ContainerProps {
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <div className="rounded-md flex-1 flex flex-col border-2 border-zinc-700 p-4">
      <h2 className="flex items-center gap-2 text-xl mb-4">
        {props.icon}
        <span>{props.title}</span>
      </h2>
      {props.children}
    </div>
  );
}
