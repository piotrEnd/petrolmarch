import React from "react"
import { line, curveNatural } from "d3"

export const Marks = ({ data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius, minPriceValue, setHoveredValue }) => {
  // compare reference value (minimum price) and calculate increase
  function getPercentageIncrease(numA, numB) {
    return Math.round(((numA - numB) / numB) * 100)
  }

  return data.map((d, i) => (
    <g className="marks" key={i}>
      <path
        // 'path' for line, 'd' for shape
        fill="none"
        stroke="#bf360c"
        d={line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))
          .curve(curveNatural)(data)}
        // curves examples: http://bl.ocks.org/d3indepth/b6d4845973089bc1012dec1674d3aff8
      />

      {
        //show the dots
        data.map((d, i) => {
          return (
            <circle
              cx={xScale(xValue(d))}
              cy={yScale(yValue(d))}
              r={circleRadius}
              key={i}
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("circleHovered")
                return setHoveredValue({
                  x: xScale(xValue(d)),
                  y: yScale(yValue(d)),
                  z: getPercentageIncrease(yValue(d), minPriceValue),
                  dotY: yValue(d),
                  dotX: tooltipFormat(xValue(d)),
                })
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove("circleHovered")
                return setHoveredValue({ x: 0, y: 0 })
              }}
            >
              <title>{yValue(d)} &euro;</title>
            </circle>
          )
        })
      }
    </g>
  ))
}
