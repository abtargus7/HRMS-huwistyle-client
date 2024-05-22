import { useState } from 'react'
import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from 'react-router-dom';
import Employee from "./scenes/employee";
import Attendance from './scenes/attendance';
import AddEmployee from './scenes/employee/add_employee';
import Departments from './scenes/department';
import AddDepartment from './scenes/department/add_department';
import Calendar from './scenes/calendar';
import AddDesignations from './scenes/designation';


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
                    <Route path='/api/v1/employee' element={<Employee />} />
                    <Route path='/api/v1/employee/add' element={<AddEmployee />} />
                    <Route path="/api/v1/attendance" element={<Attendance />} />
                    <Route path='/api/v1/departments' element={<Departments />} />
                    <Route path='/api/v1/departments/add' element={<AddDepartment />} />
                    <Route path="/api/v1/calendar" element={<Calendar />} />
                    <Route path='/api/v1/departments/designations/add' element={<AddDesignations />} />
                  </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
