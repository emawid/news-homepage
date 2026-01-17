export default function Button({ children, as = 'button', ...rest }) {
  const Tag = as;
  return (
    <Tag className="btn btn--primary text-preset-7" {...rest}>
      {children}
    </Tag>
  );
}
