import { CellContainer } from "../styles/Cell.styled"

interface CellProps {
  rowIndex: number
  columnIndex: number
  value: string
  selected: boolean
  startSelection: (e: React.PointerEvent) => void
  stopSelection: (e: React.PointerEvent) => void
  handlePaste: (
    pasteRowIndex: number,
    pasteColumnIndex: number,
    pasteEvent: ClipboardEvent
  ) => void
}

const Cell = ({
  rowIndex,
  columnIndex,
  value,
  selected,
  startSelection,
  stopSelection,
  handlePaste,
}: CellProps) => {
  return (
    <CellContainer
      selected={selected}
      coordinates={`[${rowIndex},${columnIndex}]`}
      onPointerDown={e => startSelection(e)}
      onPointerOver={e => stopSelection(e)}
      onPaste={e => handlePaste(rowIndex, columnIndex, e)}
    >
      {value}
    </CellContainer>
  )
}

export default Cell
