// import SignIn from "@components/SignIn";

import { Key } from "react";
import ButtonComponent from "./button";

export default async function Articles() {
  console.log("Server or client");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <>
      <main>
        <section>
          <h2>Articles</h2>
          {posts &&
            posts.map((post: { id: Key; title: string; body: string }) => (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <ButtonComponent />
              </article>
            ))}
        </section>
      </main>
    </>
  );
}
