"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Itinerary {
  id: number;
  user_id: number;
  title: string;
  start_date: string;
  end_date: string;
}

export default function Detalle() {
  const params = useParams();
  const id = params?.id as string; // ← ahora sí es válido

  const [data, setData] = useState<Itinerary | null>(null);

  useEffect(() => {
    async function load() {
      if (!id) return;

      const res = await fetch("http://localhost:4000/api/itineraries/1");
      const list: Itinerary[] = await res.json();
      const selected = list.find((x) => x.id.toString() === id);

      setData(selected || null);
    }
    load();
  }, [id]);

  if (!data)
    return <p className="p-6 text-gray-600">Cargando...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow border border-gray-200 fade-in show">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{data.title}</h1>

      <div className="space-y-2 text-gray-700">
        <p><strong>Inicio:</strong> {data.start_date}</p>
        <p><strong>Fin:</strong> {data.end_date}</p>
        <p><strong>ID interno:</strong> {data.id}</p>
      </div>

      <a
        href="/itinerarios"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        ← Volver
      </a>
    </div>
  );
}
