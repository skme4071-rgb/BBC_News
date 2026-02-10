export function Images({ className = "", alt = "Image", ...rest }) {
  return (
    <img
      {...rest}
      alt={alt}
      className={`w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover ${className}`}
    />
  );
}
