export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Oops! Page not found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for might have been removed,<br /> had its name changed, or is temporarily unavailable.</p>
        <a href="/" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Go Back Home
        </a>
      </div>
    </div>
  )
}
