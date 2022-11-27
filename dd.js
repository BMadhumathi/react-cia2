// 
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './dd.css'

export default function BasicSelect() {
  const [clr, setClr] = React.useState("");

  const handleChange = (event) => {
    setClr(event.target.value);
  };
  const Blue=()=>{
    document.getElementById('box').style.background="blue";
  }
  const Red=()=>{
    document.getElementById('box').style.background="red";
  }
  const Green=()=>{
    document.getElementById('box').style.background="green";
  }
  const Pink=()=>{
    document.getElementById('box').style.background="pink";
  }
  const Crimson=()=>{
    document.getElementById('box').style.background="crimson";
  }
  const Yellow=()=>{
    document.getElementById('box').style.background="yellow";
  }
  const Lavender=()=>{
    document.getElementById('box').style.background="lavender";
  }

  return (
    <div className="Drop_down">
    <Box sx={{ minWidth: 120 }} >
    <h1 className="ttle">Dropdown</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose a color</InputLabel>
        <Select
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "3px solid black"
              }
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  backgroundColor: "grey"
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "yellow"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "white"
                }
              }
            }
          }}
          value={clr}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={Blue}>Blue</MenuItem>
          <MenuItem value={20} onClick={Green}>Green</MenuItem>
          <MenuItem value={30} onClick={Red}>Red</MenuItem>
          <MenuItem value={40} onClick={Pink}>Pink</MenuItem>
          <MenuItem value={50} onClick={Crimson}>Crimson</MenuItem>
          <MenuItem value={60} onClick={Yellow}>Yellow</MenuItem>
          <MenuItem value={70} onClick={Lavender}>Lavender</MenuItem>
        </Select>
      </FormControl>
    </Box><br></br>
    <div className="box" id="box">
 
    </div>
    </div>
  );
}