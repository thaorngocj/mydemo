import Seat from "./Seat";

export default function WallHorizontal({
  prefix,
  count,
  getSeatStatus,
  onSeatClick
}) {
  return (
    <div className="flex gap-4">
      {Array.from({ length: count }).map((_, i) => {
        const label = `${prefix}${i + 1}`;

        return (
          <Seat
            key={label}
            label={label}
            status={getSeatStatus(label)}
            onClick={() => onSeatClick(label)}
          />
        );
      })}
    </div>
  );
}