import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"

export default function Intro() {
  return (
    <Grid container justifyContent="center" alignItems="center" mt={2}>
      <Box maxWidth="md">
        <Typography variant="h4" align="center">
          Petrol Prices Increase
        </Typography>
        <Typography variant="subtitle1" align="center">
          Retail gasoline and diesel prices soared to record highs in March 2022.
        </Typography>
        <Typography variant="body1" mt={3} align="center">
          Scatterplot shows the dynamics of fuel price changes over the month. The data relates to an exemplary petrol station located in my area. It has been fetched and manually extracted from{" "}
          <a target="_blank" rel="noreferrer" href={"https://creativecommons.tankerkoenig.de/"}>
            Tankerkönig API
          </a>
          .
        </Typography>
        <Typography variant="body1" mt={1} align="center">
          Adjust fuel type using radio buttons. Hover over any dot to get specific info.
        </Typography>
      </Box>
    </Grid>
  )
}
