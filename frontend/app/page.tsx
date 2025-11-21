export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center mt-10 fade-in show p-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
        Crea tu viaje perfecto con TripTailor 🌍
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
        Organiza vuelos, hoteles y actividades en un solo lugar.
        Recibe recomendaciones personalizadas y construye el itinerario perfecto.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/itinerarios"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          Ver itinerarios
        </a>

        <a
          href="/itinerarios/nuevo"
          className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-100 rounded-xl shadow-sm transition transform hover:-translate-y-1"
        >
          Crear nuevo
        </a>
      </div>
    </div>
  );
}
