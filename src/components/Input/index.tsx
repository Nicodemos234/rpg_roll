interface InputProps {
  title: string;
  type: string;
  name: string;
}
export function Input({ name, title, type, ...rest }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} className="focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 focus:outline-none transition-all my-2 bg-zinc-600 p-2 rounded-md" />
    </div>
  );
}
