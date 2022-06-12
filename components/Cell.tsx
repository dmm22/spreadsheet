import { CellContainer } from "../styles/Cell.styled"

interface CellProps {
  rowIndex: number
  columnIndex: number
  value: string
}

const Cell = ({ rowIndex, columnIndex, value }: CellProps) => {
  return (
    <CellContainer
      coordinates={`(${rowIndex},${columnIndex})`}
      onPointerDown={e => console.log(e)}
    >
      {value}
    </CellContainer>
  )
}

export default Cell
