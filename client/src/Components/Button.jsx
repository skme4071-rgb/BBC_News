export default function Button({ children, text, ...rest }) {
  return (
    <button type="button" {...rest}>
      {children ?? text}
    </button>
  );
}
