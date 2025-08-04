import { promises as fs } from "fs";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import SvgArrow from "@/components/ui/SvgArrow";

export default async function GalleryScroll() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/cases.json",
    "utf8"
  );
  const datas = JSON.parse(file);
  return (
    <>
      <section className="gallery-scroll">
        <div className="container-sticky">
          <div className="panel">
            <h2 className="heading-1 title">
              Shopify Plus <em>Case Studies</em>.
            </h2>
            {datas &&
              datas.map(
                (data: {
                  id: number;
                  content: string;
                  height: number;
                  width: number;
                  alt: string;
                  title: string;
                  image: string;
                  cta: string;
                }) => (
                  <Card
                    key={data.id}
                    id={data.id}
                    content={data.content}
                    height={data.height}
                    width={data.width}
                    alt={data.alt}
                    title={data.title}
                    image={data.image}
                    cta="View case study"
                    url={`/case-studies/${data.id}`}
                  />
                )
              )}
            <Link
              href={"/case-studies"}
              aria-label="Access to Case studies page"
              className="cta-wrapper"
            >
              <Image
                className="cta-media"
                src="/icons/link-works.png"
                alt="Link to Case studies page"
                width={321}
                height={321}
              />
              <div className="icon-wrapper icon-wrapper--self">
                <SvgArrow />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
