export default function Media({
  src,
  alt,
  width,
  height,
  ratio = '16/9',
  sources,
}) {
  return (
    <div className="media" style={{ aspectRatio: ratio }}>
      {Array.isArray(sources) && sources.length > 0 ? (
        <picture>
          {sources.map(({ srcSet, media, type }, index) => (
            <source
              key={`${media ?? 'source'}-${index}`}
              srcSet={srcSet}
              media={media}
              type={type}
            />
          ))}
          <img
            className="media__img"
            src={src}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
          />
        </picture>
      ) : (
        <img
          className="media__img"
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
        />
      )}
    </div>
  );
}
