// import SignIn from "@components/SignIn";
"use client";
import { useState } from "react";

export default function Contact() {
  const [count, setCount] = useState(0);
  console.log("Server or client");
  return (
    <>
      <main>
        <section>
          <h2>Contact us</h2>
          <p>{count} likes</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </section>
      </main>
    </>
  );
}
