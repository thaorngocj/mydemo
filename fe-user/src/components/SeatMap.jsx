import { useEffect, useState } from "react";

export default function SeatMap({ selectedSeat, setSelectedSeat }) {
  // Giả lập dữ liệu từ API
  const [seatStatus, setSeatStatus] = useState({
  L3: "booked",
  A2: "booked",
  B6: "booked",
  R5: "booked",
});

  const layout = [
    ["T1","T2","T3","T4","T5","T6","T7","T8","T9"],
    [null, null, null, null, null, null, null, null, null],
    ["L1",null,"A1","A2", null, "A5","A6",null,"R1"],
    ["L2",null,"A3","A4", null, "A7","A8",null,"R2"],
    ["L3",null,"B1","B2", null, "B5","B6",null,"R3"],
    ["L4",null,"B3","B4", null, "B7","B8",null,"R4"],
    ["L5",null,"C1","C2", null, "C5","C6",null,"R5"],
    ["L6",null,"C3","C4", null, "C7","C8",null,"R6"],
  ];

  const getClass = (seat) => {
    if (!seat) return "invisible";
    if (seatStatus[seat] === "booked")
      return "bg-gray-400 cursor-not-allowed";
    if (selectedSeat === seat)
      return "bg-blue-600 text-white";
    return "bg-emerald-300 hover:bg-emerald-400";
  };

  const handleClick = (seat) => {
    if (!seat || seatStatus[seat] === "booked") return;
    setSelectedSeat(seat);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-8 text-center">
        Chọn chỗ ngồi
      </h2>

      <div className="grid gap-4">
        {layout.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-9 gap-1 justify-center">
            {row.map((seat, colIndex) => (
              <button
                key={colIndex}
                onClick={() => handleClick(seat)}
                className={` h-12 rounded-md transition ${getClass(seat)}`}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-10 text-sm">
        <Legend color="bg-emerald-300" text="Còn trống" />
        <Legend color="bg-blue-600" text="Đang chọn" />
        <Legend color="bg-gray-400" text="Đã đặt" />
      </div>
    </div>
  );
}

function Legend({ color, text }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 ${color} rounded`} />
      {text}
    </div>
  );
}