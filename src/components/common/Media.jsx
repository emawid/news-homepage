export default function Media({ src, alt, width, height, ratio = '16/9' }) {
  return (
    <div className="media" style={{ aspectRatio: ratio }}>
      <img
        className="media__img"
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
      />
    </div>
  );
}
