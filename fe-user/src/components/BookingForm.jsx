export default function BookingForm({
  selectedSeat,
  selectedTime,
  userInfo,
  setUserInfo,
  handleSubmit,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-lg font-semibold">Thông tin đặt chỗ</h3>

      <input
        type="text"
        placeholder="Họ và tên"
        className="w-full border p-2 rounded"
        value={userInfo.name}
        onChange={(e) =>
          setUserInfo({ ...userInfo, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={userInfo.email}
        onChange={(e) =>
          setUserInfo({ ...userInfo, email: e.target.value })
        }
      />

      <div className="text-sm">
        Ghế: <b>{selectedSeat || "Chưa chọn"}</b>
      </div>

      <div className="text-sm">
        Khung giờ: <b>{selectedTime || "Chưa chọn"}</b>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        Xác nhận đặt chỗ
      </button>
    </div>
  );
}