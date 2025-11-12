export default function Grid({ area, children }) {
  const cls =
    area === 'hero+sidebar' ? 'grid grid--hero' : 'grid grid--teasers';

  return <section className={cls}>{children}</section>;
}
