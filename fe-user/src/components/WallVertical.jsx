import Seat from './Seat'

export default function WallVertical({ prefix, count }) {
  return (
    <div className="wall-vertical">
      {Array.from({ length: count }).map((_, i) => (
        <Seat key={i} label={`${prefix}${i + 1}`} />
      ))}
    </div>
  )
}
