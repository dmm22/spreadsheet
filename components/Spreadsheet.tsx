import { useState } from "react"
import { Row, SheetContainer } from "../styles/Spreadsheet.styled"
import Cell from "./Cell"

const blankSpreadsheet = [...Array(5)].map(_ => Array(5).fill({ value: "" }))

const Spreadsheet = () => {
  const [data, setData] = useState(blankSpreadsheet)
  const [selectionStart, setSelectionStart] = useState()

  const getCoordinates = (e: React.PointerEvent) => {
    const { target } = e
    if (target instanceof HTMLElement) {
      const coordinates = target.dataset.cell
      if (typeof coordinates === "string") {
        return JSON.parse(coordinates)
      } else return null
    } else return null
  }

  const startSelection = (e: React.PointerEvent) => {
    const coordinates = getCoordinates(e)
    console.log(coordinates)
  }

  return (
    <SheetContainer>
      {data.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <Cell
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              value={cell.value}
              startSelection={startSelection}
              key={columnIndex}
            />
          ))}
        </Row>
      ))}
    </SheetContainer>
  )
}

export default Spreadsheet
