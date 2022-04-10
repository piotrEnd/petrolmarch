import React, { useState } from "react"
import { useData } from "./useData"
import { scaleLinear, scaleTime, min, timeFormat, extent } from "d3"

import { AxisBottom } from "./components/AxisBottom"
import { AxisLeft } from "./components/AxisLeft"
import { Marks } from "./components/Marks"
import { YMarkerLine } from "./components/YMarkerLine"
import { XMarkerLine } from "./components/XMarkerLine"
import Menu from "./components/Menu"
import Info from "./components/Info"
import Intro from "./components/Intro"

// svg dimensions
const width = 960
const height = 480
const margin = { top: 20, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 60

const options = [
  { value: "e5", label: "E5" },
  { value: "e10", label: "E10" },
  { value: "diesel", label: "Diesel" },
]
const initialType = "e5"

function App() {
  const data = useData()

  const [selectedType, setSelectedType] = useState(initialType)
  const [hoveredValue, setHoveredValue] = useState({ x: 0, y: 0 })

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const getLabel = (value) => {
    // matching value returns corresponding label
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        return options[i].label
      }
    }
  }

  const xValue = (d) => d.date //time
  const xAxisLabel = "March 2022"
  const yValue = (d) => d[selectedType] //fuel price(s)
  const yAxisLabel = getLabel(selectedType)

  const xAxisTickFormat = timeFormat("%e") // day as: 1, 2.., 31
  const minPriceValue = min(data, (d) => d[selectedType]) //as optical reference value

  const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth]).nice()
  const yScale = scaleLinear().domain(extent(data, yValue)).range([innerHeight, 0]).nice()

  return (
    <div className="App">
      <Intro />
      <Info percentage={hoveredValue.z} price={hoveredValue.dotY} date={hoveredValue.dotX} fuel={getLabel(selectedType)} />

      <svg width={width} height={height} id="svgContainer">
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} tickOffset={7} />
          <text className="axis-label" textAnchor="middle" transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}>
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
          <text className="axis-label" x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor="middle">
            {xAxisLabel}
          </text>
          <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} tooltipFormat={xAxisTickFormat} circleRadius={7} minPriceValue={minPriceValue} setHoveredValue={setHoveredValue} />
          <YMarkerLine value={minPriceValue} yScale={yScale} innerWidth={innerWidth} />
          <XMarkerLine cx={hoveredValue.x} cy={hoveredValue.y} value={minPriceValue} yScale={yScale} />
        </g>
      </svg>

      <Menu
        selectedType={selectedType} //at initialization
        onSelectedTypeChange={setSelectedType}
      />
    </div>
  )
}

export default App
