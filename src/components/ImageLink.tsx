export type ImageLinkProps = {
  alt: string;
  href: string;
  src: string;
};

export const ImageLink = ({ alt, href, src }: ImageLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        height={32}
        width={32}
        src={src}
        className="bg-[#cf0276] rounded-lg p-1.5 transition-colors hover:bg-[#970256]"
        alt={alt}
      ></img>
    </a>
  );
};
