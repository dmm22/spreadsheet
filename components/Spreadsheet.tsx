import { useCallback, useState } from "react"
import { Row, SheetContainer } from "../styles/Spreadsheet.styled"
import Cell from "./Cell"

const blankSpreadsheet = [...Array(5)].map(_ =>
  Array(5).fill({ value: "", selected: false })
)

const Spreadsheet = () => {
  const [data, setData] = useState(blankSpreadsheet)
  const [selectionStart, setSelectionStart] = useState()
  const [selectionStop, setSelectionStop] = useState()

  const getCoordinates = (e: React.PointerEvent) => {
    const { target } = e
    if (target instanceof HTMLElement) {
      const coordinates = target.dataset.cell
      if (typeof coordinates === "string") {
        return JSON.parse(coordinates)
      } else return null
    } else return null
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
      <pre>{JSON.stringify({ selectionStart, selectionStop })}</pre>
      <SheetContainer>
        {data.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <Cell
                rowIndex={rowIndex}
                columnIndex={columnIndex}
                value={cell.value}
                startSelection={startSelection}
                stopSelection={stopSelection}
                key={columnIndex}
              />
            ))}
          </Row>
        ))}
      </SheetContainer>
    </>
  )
}

export default Spreadsheet
