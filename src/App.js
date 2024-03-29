
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Topbar from './scenes/global/Topbar';
import  Dashboard  from './scenes/dashbord';
import Sidebar from './scenes/global/Sidebar';
import {  Routes, Route } from "react-router-dom";
import Team from "./scenes/team";
import Contacts from "./scenes/ping";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Equip from "./scenes/equip";


function App() {
  const [theme, colorMode] = useMode();
 
 return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
       
          

            <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
                <Route path ="/" element ={<Dashboard/>}/>
                <Route path ="/team" element ={<Team/>}/>
                
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/equip" element={<Equip />} />
                
                
            </Routes>
      
           
           
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
