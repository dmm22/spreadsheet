import styled from "styled-components"

interface CellContainerProps {
  coordinates: string
}

export const CellContainer = styled.div.attrs(
  ({ coordinates }: CellContainerProps) => ({
    "data-cell": coordinates,
  })
)<CellContainerProps>`
  aspect-ratio: 5/1;
  border: 1px solid black;
  flex-grow: 1;
  user-select: none;
  cursor: cell;
`
