"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EnterPassword() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch("/api/check-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    });

    if (res.ok) {
      router.push("/"); // Redirect to home
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center w-80">
        <h2 className="text-xl font-semibold mb-4">Enter Password</h2>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          className="border p-2 w-full rounded mb-4"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">Incorrect password</p>}
      </div>
    </div>
  );
}
