import { css } from "@emotion/css";

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
        className={css`
          background-color: #cf0276;
          border-radius: 15px;
          padding: 5px;
          transition: background 0.15s;

          &:hover {
            background-color: #970256;
          }
        `}
        alt={alt}
      ></img>
    </a>
  );
};
