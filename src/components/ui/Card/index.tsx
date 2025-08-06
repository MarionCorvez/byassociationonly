import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../ArrowIcon";

interface CardProps {
  id: number;
  content: string;
  height: number;
  width: number;
  alt: string;
  title: string;
  image: string;
  url: string;
  cta: string;
  arrow: string;
  cls: string;
  isFeatured: boolean;
  isHighlighted: boolean;
}

export default async function Card({
  id,
  content,
  height,
  width,
  alt,
  title,
  image,
  url,
  cta,
  arrow,
  cls,
  isFeatured,
  isHighlighted,
}: CardProps) {
  return (
    <>
      <article key={id} className={cls}>
        <Link href={url} prefetch={false} className="container">
          <div className="media-wrapper">
            <Image
              className="media"
              src={image}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
          <div className="txt-wrapper">
            <h2 className="head heading-3">{title}</h2>
            {content && <p className="details">{content}</p>}
            <div className="link-wrapper">
              <p className="link">{cta}</p>
              <ArrowIcon cls={arrow} />
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
