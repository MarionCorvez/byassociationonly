import { promises as fs } from "fs";
import Card from "@/components/ui/Card";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

export default async function GalleryScroll() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/cases.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  const dataList = datas.map(
    (data: {
      id: number;
      content: string;
      height: number;
      width: number;
      alt: string;
      title: string;
      image: string;
      cta: string;
      cls: string;
      arrow: string;
    }) => (
      <Card
        key={data.id}
        cls="card"
        id={data.id}
        content={data.content}
        height={data.height}
        width={data.width}
        alt={data.alt}
        title={data.title}
        image={data.image}
        cta="View case study"
        arrow="icon--sm"
        url={`/articles/${data.id}`}
      />
    )
  );

  return (
    <>
      <section className="gallery gallery-background gallery-scroll">
        <div className="container-sticky">
          <div className="panel">
            <h2 className="heading-1 title">
              Shopify Plus <em>Case Studies</em>.
            </h2>
            {dataList}
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
              <ArrowIcon cls="icon--lg" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
