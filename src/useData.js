import { useState, useEffect } from "react"
import { csv } from "d3"

const csvUrl = "https://gist.githubusercontent.com/piotrEnd/ae0785a303bcd7c9d0b75a8b132caeea/raw/9a6f1db0a8e13f13bba2caab3e288a2641eae60d/jet2022.csv"

export const useData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = (d) => {
      d.e5 = +d.e5 //string to number
      d.e10 = +d.e10
      d.diesel = +d.diesel
      d.date = new Date(d.date)
      return d
    }

    csv(csvUrl, row).then(setData)
  }, [])

  return data

  // const sameDays = {}
  // data.map((el) => {
  //   // const day = parseInt(el.date.substring(8, 10))
  //   // convert date object into shortened date
  //   const shortDate = new Date(Date.parse(el.date)).toDateString()

  //   if (!sameDays[shortDate]) {
  //     return (sameDays[shortDate] = [el.e5])
  //   } else {
  //     return sameDays[shortDate].push(el.e5)
  //   }
  // })

  // // calculate average E5-petrol price for each day
  // for (const key in sameDays) {
  //   if (sameDays.hasOwnProperty(key)) {
  //     // console.log(`${key}: ${sameDays[key]}`)
  //     sameDays[key] = Number((sameDays[key].reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / sameDays[key].length).toFixed(3))
  //   }
  // }

  // console.log(sameDays)
}
