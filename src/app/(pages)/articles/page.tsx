import Link from "next/link";

export default async function Articles() {
  const response = await fetch(
    "https://688f1a90f21ab1769f8839d2.mockapi.io/cases"
  );
  const datas = await response.json();

  return (
    <>
      <section>
        <h2>Articles</h2>
        {datas &&
          datas.map((data: { id: string; title: string; content: string }) => (
            <article key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.content}</p>
              <Link href={`/articles/${data.id}`}>Link</Link>
            </article>
          ))}
      </section>
    </>
  );
}
