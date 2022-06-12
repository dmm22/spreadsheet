import styled from "styled-components"

interface CellContainerProps {
  coordinates: string
  selected: boolean
}

export const CellContainer = styled.div.attrs(
  ({ coordinates }: CellContainerProps) => ({
    "data-cell": coordinates,
  })
)<CellContainerProps>`
  aspect-ratio: 5/1;
  border: ${({ selected }) =>
    selected ? "1px solid royalblue" : "1px solid black"};
  outline: ${({ selected }) =>
    selected ? "2px solid royalblue" : "1px solid black"};
  flex-grow: 1;
  user-select: none;
  cursor: cell;
`
