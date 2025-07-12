import { notFound } from "next/navigation";

async function fetchPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) return undefined;
  return response.json();
}

export default async function PostPage({
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
  const post = await fetchPost(articleId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    </>
  );
}
