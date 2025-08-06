import Card from "@/components/ui/Card";

export default async function GalleryList() {
  const response = await fetch(
    "https://688f1a90f21ab1769f8839d2.mockapi.io/cases"
  );
  const datas = await response.json();

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
        cta="Read article"
        arrow="icon--sm"
        url={`/articles/${data.id}`}
      />
    )
  );

  function Gallery({ children, type }: { children: any; type: string }) {
    return <section className={type}>{children}</section>;
  }

  return (
    <>
      <Gallery type="gallery gallery-list">
        <div className="panel">{dataList}</div>
      </Gallery>
    </>
  );
}
