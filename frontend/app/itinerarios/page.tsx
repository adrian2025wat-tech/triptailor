"use client";

import { useEffect, useState } from "react";

interface Itinerary {
  id: number;
  user_id: number;
  title: string;
  start_date: string;
  end_date: string;
}

export default function Itinerarios() {
  const [itinerarios, setItinerarios] = useState<Itinerary[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/api/itineraries/1");
      const data: Itinerary[] = await res.json();
      setItinerarios(data);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 fade-in show">
      <h1 className="text-4xl font-bold mb-6">Mis itinerarios 📅</h1>

      {itinerarios.length === 0 ? (
        <p className="text-gray-600">No tienes itinerarios registrados</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {itinerarios.map((i) => (
            <a
              key={i.id}
              href={`/itinerarios/${i.id}`}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 transition transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-blue-700">{i.title}</h2>
              <p className="text-gray-600 mt-2">
                {i.start_date} → {i.end_date}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
