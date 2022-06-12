import { CellContainer } from "../styles/Cell.styled"

interface CellProps {
  rowIndex: number
  columnIndex: number
  value: string
  startSelection: (e: React.PointerEvent) => void
}

const Cell = ({ rowIndex, columnIndex, value, startSelection }: CellProps) => {
  return (
    <CellContainer
      coordinates={`[${rowIndex},${columnIndex}]`}
      onPointerDown={e => startSelection(e)}
    >
      {value}
    </CellContainer>
  )
}

export default Cell
