import { useState } from "react"
import { Row, SheetContainer } from "../styles/Spreadsheet.styled"
import Cell from "./Cell"

const Spreadsheet = () => {
  const [data, setData] = useState(
    [...Array(5)].map(_ => Array(5).fill({ value: "" }))
  )

  return (
    <SheetContainer>
      {data.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <Cell value={cell.value} key={columnIndex} />
          ))}
        </Row>
      ))}
    </SheetContainer>
  )
}

export default Spreadsheet
