// src/components/layout/Navbar.jsx
export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden px-2 py-1 rounded bg-gray-100">Menu</button>
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="hidden sm:block px-3 py-2 border rounded-md"
          placeholder="Search..."
        />
        <div className="px-3 py-2 rounded-full bg-gray-100">OK</div>
      </div>
    </header>
  );
}
