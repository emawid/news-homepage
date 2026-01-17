import NewItem from './NewItem';

export default function NewList({ items = [] }) {
  return (
    <ul className="new__list">
      {items.map((it, i) => (
        <li key={it.id} className="new__list-item">
          <NewItem item={it} hasDivider={i < items.length - 1} />
        </li>
      ))}
    </ul>
  );
}
