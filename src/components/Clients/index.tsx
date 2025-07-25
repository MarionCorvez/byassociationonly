import { clients } from "../../lib/placeholder-data";

import Image from "next/image";

export default function Clients() {
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
