import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/admin/users" className="block hover:text-blue-400">
          Users
        </Link>
        <Link to="/admin/borrows" className="block hover:text-blue-400">
          Borrows
        </Link>
        <Link to="/admin/books" className="block hover:text-blue-400">
          Books
        </Link>
        <Link to="/admin/profile" className="block hover:text-blue-400">
          Order
        </Link>
      </nav>
    </div>
  );
}