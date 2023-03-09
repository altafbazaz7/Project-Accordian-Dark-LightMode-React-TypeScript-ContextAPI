import { Stack } from "@mui/system"
import { useContext } from "react";
import { DataContext, IDataObject } from "../ContextAPI/DataContext"
import HomeIcon from '@mui/icons-material/Home';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import CustomizedSwitches from "../Utils/Switch";
import SimpleAccordion from "../Components/Accordian";

const LandingPage = ({data}: {data: IDataObject}) => {
  const { mode, setCollapse, collapse } = useContext(DataContext);
  
    return (
      <>
        <Stack direction={"row"} sx={{ backgroundColor: mode === false ? "#F2F2F2" : "#292E89" , color: mode === false ? "#292E89" : "#F2F2F2",minHeight:"100vh" ,maxHeight:"400vh"}}>
            <Stack width={"10%"} height={"100%"} direction={"column"} >
                <Stack direction={"column"} alignItems={"center"} gap={"2.5rem"} position={"absolute"} top={"15%"} left={"5%"}>
                    <HomeIcon sx={{cursor:"pointer", border:"0.5px solid silver", padding:"0.50rem", borderRadius:"7px", fontSize:"36px"}}/>
                    <ViewStreamIcon onClick={() => setCollapse(!collapse)} sx={{cursor:"pointer", border:"0.5px solid silver", padding:"0.50rem", borderRadius:"7px", fontSize:"36px"}} />
                </Stack>
                <Stack direction={"column"} position={"absolute"} top={"85%"} left={"5%"} >
                    <CustomizedSwitches/>
                </Stack>

            </Stack>
            <Stack  width={"90%"}   borderLeft={"3px solid silver"}  minHeight={"100vh"}  direction={"column"} padding={"5% 10%"} >
                {/* ACCORDIAN */}
                    <SimpleAccordion />  
            </Stack>
        </Stack>
      </>
    )
  }
  
  export default LandingPage
  