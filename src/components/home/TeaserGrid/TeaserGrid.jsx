import TeaserCard from './TeaserCard';

export default function TeaserGrid({ items = [] }) {
  return (
    <div className="teasers">
      {items.map((it) => (
        <TeaserCard key={it.id} item={it} />
      ))}
    </div>
  );
}
