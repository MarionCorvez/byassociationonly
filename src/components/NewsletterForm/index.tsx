"use client";
import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const SUBSCRIBE_URL = "https://dummyjson.com/users/add";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = JSON.stringify({
      email,
    });

    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Subscription successful:", data);
      setStatus("SUCCESS");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("ERROR");
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <div className="form-container">
      {status === "SUCCESS" && (
        <p className="message">
          Please check your inbox to confirm the subscription!
        </p>
      )}
      {status === "ERROR" && (
        <p className="message">
          Oops, something went wrong... Please, try again.
        </p>
      )}

      <form onSubmit={handleSubmit} className="newsletter-form">
        <label htmlFor="email" className="sr-only"></label>
        <input
          type="email"
          name="email"
          aria-label="Your email address"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          autoComplete="on"
          required
        />

        <button type="submit" className="theme--light" aria-label="Sign in">
          Sign me up
        </button>
      </form>
    </div>
  );
}
