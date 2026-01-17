import Button from '../common/Button';
import Media from '../common/Media';

export default function HeroFeatured({ article }) {
  return (
    <article className="hero">
      <Media src={article.hero.src} alt={article.hero.alt} />
      <div className="hero__content">
        <h1 className="hero__title text-preset-2">{article.title}</h1>
        <p className="hero__dek text-preset-6">{article.dek}</p>
        <Button
          as="a"
          href="#"
          aria-label={`${article.ctaLabel}: ${article.title}`}
        >
          {article.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
