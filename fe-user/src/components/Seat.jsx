export default function Seat({ label, status, onClick }) {
  const getColor = () => {
    if (status === "booked") return "bg-gray-400 cursor-not-allowed";
    if (status === "selected") return "bg-blue-600 text-white";
    return "bg-teal-300 hover:bg-teal-400 cursor-pointer";
  };

  return (
    <div
      onClick={status !== "booked" ? onClick : undefined}
      className={`w-12 h-12 flex items-center justify-center rounded-md text-sm font-semibold transition ${getColor()}`}
    >
      {label}
    </div>
  );
}