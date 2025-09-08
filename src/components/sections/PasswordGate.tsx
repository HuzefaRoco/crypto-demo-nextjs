"use client";
import { useState } from "react";

interface PasswordGateProps {
  correctPassword: string;
  children: React.ReactNode;
}

export default function PasswordGate({ correctPassword, children }: PasswordGateProps) {
  const [input, setInput] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === correctPassword) {
      setAccessGranted(true);
      localStorage.setItem("accessGranted", "true"); // optional persistence
    } else {
      setError(true);
      setInput("");
    }
  };

  // Check localStorage on initial render
  if (!accessGranted && typeof window !== "undefined") {
    const storedAccess = localStorage.getItem("accessGranted");
    if (storedAccess === "true") setAccessGranted(true);
  }

  if (accessGranted) return <>{children}</>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-xl font-semibold mb-4">Enter Password</h2>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">Incorrect password</p>}
      </div>
    </div>
  );
}
