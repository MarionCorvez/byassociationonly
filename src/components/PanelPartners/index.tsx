import { promises as fs } from "fs";

export default async function PanelPartners() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/partners.json",
    "utf8"
  );

  const datas = JSON.parse(file);

  const dataList = datas.map(
    (data: { id: number; title: string; content: string }) => (
      <div key={data.id} className="card-partner">
        <h3 className="head heading-3">{data.title}</h3>
        <p className="details">{data.content}</p>
      </div>
    )
  );

  return (
    <>
      <section className="panel-partners">
        <h2 className="title heading-2">In partners we trust</h2>
        <p className="intro heading-4">
          Sunspel runs a series of parallel international stores, powered by a
          number of key Shopify-connected technologies and partners.
        </p>
        {dataList}
      </section>
    </>
  );
}
