export default function NewSidebar({ children }) {
  return (
    <aside className="new" aria-label="latest news">
      <h2 className="new__titel text-preset-3">New</h2>
      {children}
    </aside>
  );
}
