import { CellContainer } from "../styles/Cell.styled"

interface CellProps {
  rowIndex: number
  columnIndex: number
  value: string
  selected: boolean
  startSelection: (e: React.PointerEvent) => void
  stopSelection: (e: React.PointerEvent) => void
}

const Cell = ({
  rowIndex,
  columnIndex,
  value,
  selected,
  startSelection,
  stopSelection,
}: CellProps) => {
  return (
    <CellContainer
      selected={selected}
      coordinates={`[${rowIndex},${columnIndex}]`}
      onPointerDown={e => startSelection(e)}
      onPointerOver={e => stopSelection(e)}
    >
      {value}
    </CellContainer>
  )
}

export default Cell
