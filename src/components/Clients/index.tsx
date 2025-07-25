import { promises as fs } from "fs";
import Image from "next/image";

export default async function Clients() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/clients.json",
    "utf8"
  );
  const clients = JSON.parse(file);
  return (
    <section className="clients-container">
      {clients.map((client: { title: string; image: string }) => (
        <Image
          key={client.title}
          className=""
          src={client.image}
          alt={client.title}
          width={250}
          height={150}
          priority
        />
      ))}
    </section>
  );
}
