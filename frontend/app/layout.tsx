import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800">
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-blue-700 hover:text-blue-900">
              TripTailor ✈️
            </a>

            <div className="flex gap-6">
              <a href="/itinerarios" className="hover:text-blue-600">Itinerarios</a>
              <a href="/itinerarios/nuevo" className="hover:text-blue-600">Nuevo</a>
            </div>
          </div>
        </nav>

        {/* CONTENT */}
        <main className="pt-24 fade-in show">{children}</main>
      </body>
    </html>
  );
}
