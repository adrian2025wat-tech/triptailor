"use client";

import { useState } from "react";

export default function Nuevo() {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("http://localhost:4000/api/itineraries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        title,
        start_date: start,
        end_date: end,
      }),
    });

    window.location.href = "/itinerarios";
  }

  return (
    <div className="max-w-xl mx-auto p-4 fade-in show">
      <h1 className="text-4xl font-bold mb-6">Crear itinerario ✏️</h1>

      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-xl shadow border border-gray-200 space-y-4"
      >
        <input
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Título del itinerario"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label className="block text-sm font-medium mb-1">Fecha de inicio</label>
          <input
            type="date"
            className="w-full p-3 border rounded-lg"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Fecha de fin</label>
          <input
            type="date"
            className="w-full p-3 border rounded-lg"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
