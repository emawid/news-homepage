export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        © {new Date().getFullYear()} W.
      </div>
    </footer>
  );
}
