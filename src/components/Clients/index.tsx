import { promises as fs } from "fs";
import Image from "next/image";

export default async function Clients() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/clients.json",
    "utf8"
  );
  const datas = JSON.parse(file);
  return (
    <>
      <section className="clients-container">
        {datas.map((data: { title: string; image: string }) => (
          <Image
            key={data.title}
            src={data.image}
            alt={data.title}
            width={250}
            height={150}
          />
        ))}
      </section>
    </>
  );
}
