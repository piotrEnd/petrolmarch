export const XMarkerLine = ({ value, cx, cy, yScale }) => {
  // x1: first line end measured from the left of the screen
  const markerLineX1 = cx
  // y1: first line end measured from the top of the screen
  const markerLineY1 = yScale(value)
  // x2: second line end measured from the left of the screen
  const markerLineX2 = cx
  // y2: second line end measured from the top of the screen
  const markerLineY2 = cy

  return (
    <>
      <line className="marker-line" x1={markerLineX1} y1={markerLineY1} x2={markerLineX2} y2={markerLineY2} />
      <h1>{value}</h1>
    </>
  )
}
