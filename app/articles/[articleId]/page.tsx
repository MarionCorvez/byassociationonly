async function getPosts(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{
    articleId: string;
    id: number;
    title: string;
    body: string;
  }>;
}) {
  const { articleId } = await params;
  const post = await getPosts(articleId);

  return (
    <>
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    </>
  );
}
