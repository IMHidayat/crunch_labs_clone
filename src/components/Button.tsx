export default function Button(p: { children: string; className?: string }) {
  return (
    <button
      type="button"
      className={`text-white p-4 mr-2 font-bold rounded-lg text-sm transition bg-c3 hover:bg-c4 hover:text-c1 ${p.className}`}>
      {p.children}
    </button>
  );
}
