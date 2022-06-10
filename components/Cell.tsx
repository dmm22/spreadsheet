import { CellContainer } from "../styles/Cell.styled"

interface CellProps {
  value: string
}

const Cell = ({ value }: CellProps) => {
  return <CellContainer>{value}</CellContainer>
}

export default Cell
