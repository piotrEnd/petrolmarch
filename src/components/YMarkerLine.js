export const YMarkerLine = ({ value, yScale, innerWidth }) => {
  const markerLineX1 = 0
  const markerLineX2 = innerWidth
  const markerLineY = yScale(value)
  return (
    <>
      <line className="marker-line" x1={markerLineX1} y1={markerLineY} x2={markerLineX2} y2={markerLineY} />
    </>
  )
}
