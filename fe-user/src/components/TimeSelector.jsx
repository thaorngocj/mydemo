export default function TimeSelector({ selectedTime, setSelectedTime }) {
  const timeSlots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
  ];

  return (
    <div>
      <label className="block font-medium mb-2">Chọn khung giờ</label>
      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="w-full border rounded-lg p-2"
      >
        <option value="">-- Chọn giờ --</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}