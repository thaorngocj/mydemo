import Seat from './Seat'

export default function TableGroup({ rows, cols, startRowChar }) {
  return (
    <div
      className="table-group"
      style={{
        gridTemplateColumns: `repeat(${cols}, 50px)`
      }}
    >
      {Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: cols }).map((_, colIndex) => {
          const rowChar = String.fromCharCode(
            startRowChar.charCodeAt(0) + rowIndex
          )
          const label = `${rowChar}${colIndex + 1}`

          return <Seat key={label} label={label} />
        })
      )}
    </div>
  )
}
