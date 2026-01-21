import Seat from './Seat'

export default function WallHorizontal({ prefix, count }) {
  return (
    <div className="wall-horizontal">
      {Array.from({ length: count }).map((_, i) => (
        <Seat key={i} label={`${prefix}${i + 1}`} />
      ))}
    </div>
  )
}
