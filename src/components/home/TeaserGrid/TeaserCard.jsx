import Media from '../../common/Media';

export default function TeaserCard({ item }) {
  return (
    <article className="teaser">
      <Media src={item.src} alt={item.alt} ratio="4/3" />
      <div className="teaser__meta">
        <span className="teaser__index text-preset-3">{item.index}</span>
      </div>
      <a href="#" className="teaser__title text-preset-5">
        {item.title}
      </a>
      <p className="teaser__excerpt text-preset-6">{item.excerpt}</p>
    </article>
  );
}
