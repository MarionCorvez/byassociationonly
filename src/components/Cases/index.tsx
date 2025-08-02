import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import SvgArrow from "@/components/ui/SvgArrow";

export default async function Cases() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/cases.json",
    "utf8"
  );
  const datas = JSON.parse(file);
  return (
    <>
      <section className="panel">
        <h2 className="heading-1 title">
          Shopify Plus <em>Case Studies</em>.
        </h2>
        {datas.map(
          (data: {
            id: number | null | undefined;
            content: string;
            height: number | `${number}` | undefined;
            width: number | `${number}` | undefined;
            alt: string;
            title: string;
            image: string;
          }) => (
            <article key={data.id} className="card">
              <Link href={"/#"} className="container">
                <div className="txt-wrapper">
                  <h2 className="head heading-3">{data.title}</h2>
                  <p className="details">{data.content}</p>
                  <div className="link-wrapper">
                    <p className="link">View case study</p>
                    <div className="icon-wrapper">
                      <SvgArrow className="icon" />
                    </div>
                  </div>
                </div>
                <div className="media-wrapper">
                  <Image
                    className="media"
                    src={data.image}
                    alt={data.alt}
                    width={data.width}
                    height={data.height}
                    priority
                  />
                </div>
              </Link>
            </article>
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
      </section>
    </>
  );
}
