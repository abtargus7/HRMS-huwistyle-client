import { useState } from 'react'
import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from 'react-router-dom';
import Employee from "./scenes/employee";
import Attendance from './scenes/attendance';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <Sidebar />
                <main className="content">
                  <Topbar />
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/employee' element={<Employee />} />
                    <Route path="/attendance" element={<Attendance />} />
                  </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
