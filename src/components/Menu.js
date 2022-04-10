import React from "react"

import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

import Tooltip from "@mui/material/Tooltip"
import Grid from "@mui/material/Grid"

const Menu = ({ selectedType, onSelectedTypeChange }) => {
  return (
    <Grid container justifyContent="space-around" align="center" mb={2}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Fuel type:</FormLabel>
        <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" defaultValue="e5" id="radio-group" checked={selectedType} onChange={(e) => onSelectedTypeChange(e.target.value)}>
          <Tooltip title="corresponds to DIN EN 228" placement="left">
            <FormControlLabel value="e5" control={<Radio color="default" size="medium" />} label="E5" />
          </Tooltip>
          <Tooltip title="corresponds to E DIN 51 626-1" placement="bottom">
            <FormControlLabel value="e10" control={<Radio color="default" size="medium" />} label="E10" />
          </Tooltip>
          <Tooltip title="corresponds to DIN EN590" placement="right">
            <FormControlLabel value="diesel" control={<Radio color="default" size="medium" />} label="Diesel" />
          </Tooltip>
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}

export default Menu
