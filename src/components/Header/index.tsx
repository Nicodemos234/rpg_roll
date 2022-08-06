import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-around py-4 border-b-2 border-zinc-700">
      <Link href="/">
        <a>
          <ArrowLeft size={32} color="white" />
        </a>
      </Link>
      <h1 className="text-2xl">{props.title}</h1>
      <div />
    </header>
  );
}
