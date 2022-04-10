import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

export default function Info({ percentage, price, date, fuel }) {
  return (
    <Grid container justifyContent="center" my={2}>
      <Card sx={{ minWidth: 275, minHeight: 90 }} align="center">
        <CardContent justifyContent="center" alignItems="flex-end">
          {!percentage ? (
            <div>
              <br />
              <Typography color="#bf360c">Hover over Dot to get the Info</Typography>
            </div>
          ) : null}

          {percentage ? (
            <Typography>
              The {fuel} cost <b>{price}</b> &euro; on {date}th of March.
              <br />
              It's a <b>{percentage}%</b> increase compared to the beginning of the month.
            </Typography>
          ) : null}
        </CardContent>
      </Card>
    </Grid>
  )
}
