import { useContext, useEffect } from "react";
import {DataContext} from "./ContextAPI/DataContext"
import LandingPage from "./Pages/LandingPage";
import "./App.css"

const App = () => {
  const { data } = useContext(DataContext);

useEffect(() => {
  console.log(data)
},[])
  return (
    <>
      <LandingPage data={data}/>
    </>
  )
}

export default App
