interface inputProps {
  name: string;
  type: string;

  placeholder: string;
}

export default function Input({ name, type, placeholder }: inputProps) {
  return (
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className="bg-transparent py-2 px-3 w-full placeholder:text-primary/40 border-b border-primary/40 ring-primary/40 focus:rounded-lg focus:border-none focus:outline-none focus:ring-1 focus:ring-primary/40"
    />
  );
}
