// client component
"use client";
import { useState } from "react";

async function postRequest() {
  // complete URL needed in a server component
  const response = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Mary" }),
  });
  const data = await response.json();
  return { data };
}

export default function Careers() {
  const [message, setMessage] = useState("");
  const onClick = async () => {
    const { data } = await postRequest();
    setMessage(data.message);
  };
  return (
    <>
      <section>
        <h2>Careers for {message}</h2>
        <button onClick={onClick}>Click me</button>
      </section>
    </>
  );
}
