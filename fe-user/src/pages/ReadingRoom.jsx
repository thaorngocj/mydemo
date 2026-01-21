import WallVertical from '../components/WallVertical'
import WallHorizontal from '../components/WallHorizontal'
import TableGroup from '../components/TableGroup'
import '../styles/ReadingRoom.css'

export default function ReadingRoom() {
  return (    
    <div className="reading-room">
      {/* HÀNG GHẾ SÁT TƯỜNG TRÊN */}
      <WallHorizontal prefix="T" count={10} />

      {/* LỐI ĐI */}
      <div className="walkway"></div>

      {/* KHU CHÍNH */}
      <div className="room">
        <WallVertical prefix="L" count={6} />

        <TableGroup rows={3} cols={2} startRowChar="A" />
        <TableGroup rows={4} cols={2} startRowChar="D" />
        <TableGroup rows={4} cols={3} startRowChar="H" />

        <WallVertical prefix="R" count={6} />
      </div>
    </div>
  )
}
