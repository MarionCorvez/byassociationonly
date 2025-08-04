import { promises as fs } from "fs";
import Card from "@/components/ui/Card";

export default async function GalleryArea() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/posts-hp.json",
    "utf8"
  );
  const datas = JSON.parse(file);
  return (
    <>
      <section className="gallery-area">
        <div className="panel">
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
                  cta="Read article"
                  url={`/articles/${data.id}`}
                />
              )
            )}
        </div>
      </section>
    </>
  );
}
