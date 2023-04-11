import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import { DataContext } from '../ContextAPI/DataContext';
import LayersIcon from '@mui/icons-material/Layers';

export default function SimpleAccordion() {
  const { mode, data, selected, setSelected,collapse, setCollapse } = React.useContext(DataContext);

  const handleSelectAll = () => {
        setSelected((prevSelected: any) => !prevSelected);
  }
  return (
    <div>
            <Stack width={"98.3%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

      <Typography variant="h6" sx={{ color: mode === false ? "#3D4149" : "#F2F2F2"}}>SPACE DATA</Typography>
      <RemoveIcon />
      </Stack>
      <Accordion   expanded={collapse} sx={{width:"100%", height:"65px", backgroundColor: mode === false ? "#F1F5FD" : "#676AD8" , color: mode === false ? "#3339CD" : "#F2F2F2" }}>
        <AccordionSummary  expandIcon={<RemoveIcon  sx={{color: mode === false ? "black" : "white", }} onClick={() => setCollapse(!collapse)} />} aria-controls="panel1a-content" id="panel1a-header">
            <Stack direction={"row"} gap={"0.125rem"}>
            <AccessTimeIcon/>
              <Typography>Time</Typography>
              </Stack>

        </AccordionSummary>
        <AccordionDetails>
        <Accordion  sx={{width:"102%", backgroundColor: mode === false ? "#F2F2F2" : "#3339CD" , color: mode === false ? "#3339CD" : "#F2F2F2", boxShadow:"none" }}>
        <AccordionSummary expandIcon={<RemoveIcon sx={{ color : mode === false ? "black" : "white"}} />} aria-controls="panel1a-content" id="panel1a-header">
            <Stack direction={"row"} gap={"0.125rem"}>
            <LayersIcon />
          <Typography>202215</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex", flexDirection:"column"}}>
        <Stack direction={"column"}>
        <FormControlLabel control={<Checkbox 
          sx={{color: mode === false ? "#4C51B9" : 'white'}}
        onChange={handleSelectAll} />} label="Select All" />
        {data.slice(1,8).map((element: any, index: any) => {
  return (
    <React.Fragment key={index}>
      <FormControlLabel
        control={
          <Checkbox
            checked={!selected}
          sx={{color: mode === false ? "#4C51B9" : 'white'}}

            onChange={() => setSelected(!selected)}
          />
        }
        label={`${element.url} ${element.size}`}
      />
    </React.Fragment>
  );
})}

        </Stack> 
        </AccordionDetails>
        </Accordion>



          
        </AccordionDetails>
      </Accordion>
   
    </div>
  );
}


