import { useState } from "react"
import { Row, SheetContainer } from "../styles/Spreadsheet.styled"
import Cell from "./Cell"

const blankSpreadsheet = [...Array(5)].map(_ => Array(5).fill({ value: "" }))

const Spreadsheet = () => {
  const [data, setData] = useState(blankSpreadsheet)
  const [selectionStart, setSelectionStart] = useState()

  const startSelection = () => {}

  return (
    <SheetContainer>
      {data.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <Cell
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              value={cell.value}
              key={columnIndex}
            />
          ))}
        </Row>
      ))}
    </SheetContainer>
  )
}

export default Spreadsheet
