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
      <Accordion   expanded={collapse} sx={{width:"40%", backgroundColor: mode === false ? "#F2F2F2" : "#6F77FF" , color: mode === false ? "#6F77FF" : "#F2F2F2" }}>
        <AccordionSummary expandIcon={<RemoveIcon onClick={() => setCollapse(!collapse)} />} aria-controls="panel1a-content" id="panel1a-header">
            <Stack direction={"row"} gap={"0.125rem"}>
            <AccessTimeIcon/>
          <Typography>Time</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
        <Accordion  sx={{width:"100%", backgroundColor: mode === false ? "#F2F2F2" : "#6F77FF" , color: mode === false ? "#6F77FF" : "#F2F2F2", boxShadow:"none" }}>
        <AccordionSummary expandIcon={<RemoveIcon  />} aria-controls="panel1a-content" id="panel1a-header">
            <Stack direction={"row"} gap={"0.125rem"}>
            <LayersIcon />
          <Typography>202215</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{display:"flex", flexDirection:"column"}}>
        <Stack direction={"column"}>
        <FormControlLabel control={<Checkbox  onChange={handleSelectAll} />} label="Select All" />
        {data.map((element: any, index: any) => {
  return (
    <React.Fragment key={index}>
      <FormControlLabel
        control={
          <Checkbox
            checked={!selected}
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


