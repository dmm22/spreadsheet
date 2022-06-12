import { useCallback, useState, useEffect } from "react"
import { Row, SheetContainer } from "../styles/Spreadsheet.styled"
import Cell from "./Cell"

const blankSpreadsheet = [...Array(5)].map(_ =>
  Array(5).fill({ value: "", selected: false })
)

const Spreadsheet = () => {
  const [data, setData] = useState(blankSpreadsheet)
  const [selectionStart, setSelectionStart] = useState<number[] | null>()
  const [selectionStop, setSelectionStop] = useState<number[] | null>()

  useEffect(() => {
    selectCells()
  }, [selectionStop])

  useEffect(() => {
    document.addEventListener("pointerdown", ({ target }) => {
      if (target instanceof HTMLElement) {
        const customAttributes = target?.attributes
        if (customAttributes.length === 0) {
          deselectAllCells()
        }
      }
    })
  }, [])

  const getCoordinates = (e: React.PointerEvent) => {
    const { target } = e
    if (target instanceof HTMLElement) {
      const coordinates = target.dataset.cell
      if (typeof coordinates === "string") {
        return JSON.parse(coordinates)
      } else return null
    } else return null
  }

  const deselectAllCells = () => {
    const dataWithNoSelectedCells = data.map(row =>
      row.map(cell => {
        let copiedCell = { ...cell }
        copiedCell.selected = false
        return copiedCell
      })
    )

    setData(dataWithNoSelectedCells)
  }

  const selectCells = () => {
    if (Array.isArray(selectionStart) && Array.isArray(selectionStop)) {
      const selectedRowBoundaries = [selectionStart[0], selectionStop[0]].sort()
      const selectedColumnBoundaries = [
        selectionStart[1],
        selectionStop[1],
      ].sort()

      const dataWithNewCellsSelected = data.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          let copiedCell = { ...cell }
          if (
            rowIndex >= selectedRowBoundaries[0] &&
            rowIndex <= selectedRowBoundaries[1] &&
            columnIndex >= selectedColumnBoundaries[0] &&
            columnIndex <= selectedColumnBoundaries[1]
          ) {
            copiedCell.selected = true
            return copiedCell
          } else {
            copiedCell.selected = false
            return copiedCell
          }
        })
      )

      setData(dataWithNewCellsSelected)
    }
  }

  const startSelection = useCallback((e: React.PointerEvent) => {
    const coordinates = getCoordinates(e)
    if (coordinates) {
      setSelectionStart(coordinates)
      setSelectionStop(coordinates)
    }
  }, [])

  const stopSelection = useCallback((e: React.PointerEvent) => {
    const mouseDownCheck = e.buttons

    if (mouseDownCheck >= 1) {
      const coordinates = getCoordinates(e)
      setSelectionStop(coordinates)
    }
  }, [])

  return (
    <>
      <SheetContainer>
        {data.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <Cell
                rowIndex={rowIndex}
                columnIndex={columnIndex}
                value={cell.value}
                selected={cell.selected}
                startSelection={startSelection}
                stopSelection={stopSelection}
                key={columnIndex}
              />
            ))}
          </Row>
        ))}
      </SheetContainer>
      <pre>
        {JSON.stringify({ selectionStart, selectionStop, data }, null, 2)}
      </pre>
    </>
  )
}

export default Spreadsheet
