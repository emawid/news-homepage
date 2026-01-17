export default function NewItem({ item, hasDivider }) {
  return (
    <div className={`new-item${hasDivider ? ' new-item--divided' : ''}`}>
      <a href="#" className="new-item__title text-preset-4">
        {item.title}
      </a>
      <p className="new-item__excerpt text-preset-6">{item.excerpt}</p>
    </div>
  );
}
