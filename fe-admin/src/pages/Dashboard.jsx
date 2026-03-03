import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/admin/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <Card title="Total Borrows" value={data.stats.totalBorrows} />
        <Card title="Borrowed" value={data.stats.borrowed} />
        <Card title="Returned" value={data.stats.returned} />
        <Card title="Overdue" value={data.stats.overdue} />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Due Soon</h2>
      {data.dueSoon.map(item => (
        <div key={item._id} className="bg-white p-4 shadow mb-2">
          {item.user.name} - {item.book.title}
        </div>
      ))}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}