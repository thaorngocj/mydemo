import { useState } from "react";
import SeatMap from "../components/SeatMap";
import TimeSelector from "../components/TimeSelector";
import BookingForm from "../components/BookingForm";
// import axios from "axios";

export default function Booking() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async () => {
    if (!selectedSeat || !selectedTime) {
      alert("Vui lòng chọn ghế và khung giờ");
      return;
    }

    const payload = {
      seat: selectedSeat,
      time: selectedTime,
      ...userInfo,
    };

    console.log("DATA GỬI LÊN API:", payload);

    // Sau này mở:
    // await axios.post("/api/book", payload);
  };

  return (
    <div className="min-h-screen bg-rose-50 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <SeatMap
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />

        <TimeSelector
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <BookingForm
          selectedSeat={selectedSeat}
          selectedTime={selectedTime}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}