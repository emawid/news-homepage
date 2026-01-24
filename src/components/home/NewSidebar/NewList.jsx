import NewItem from './NewItem';

export default function NewList({ items = [] }) {
  return (
    <ul className="new__list">
      {items.map((it, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={it.id} className="new__list-item">
            <NewItem item={it} />
            {!isLast && <div className="new__divider" aria-hidden="true"></div>}
          </li>
        );
      })}
    </ul>
  );
}
