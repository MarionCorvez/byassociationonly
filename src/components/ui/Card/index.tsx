import Image from "next/image";
import Link from "next/link";
import SvgArrow from "@/components/ui/SvgArrow";

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
}: CardProps) {
  return (
    <>
      <article key={id} className="card">
        <Link href={url} prefetch={false} className="container">
          <div className="txt-wrapper">
            <h2 className="head heading-3">{title}</h2>
            {content && <p className="details">{content}</p>}
            <div className="link-wrapper">
              <p className="link">{cta}</p>
              <div className="icon-wrapper">
                <SvgArrow className="icon" />
              </div>
            </div>
          </div>
          <div className="media-wrapper">
            <Image
              className="media"
              src={image}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
        </Link>
      </article>
    </>
  );
}
