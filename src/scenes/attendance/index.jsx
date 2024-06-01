import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    useEffect(() => {
        axios.get("/attendace/details")
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    }, []);

    return <Box m='20px'>
        <Header title={"ATTENDANCE"} subtitle={"Mangage the attendace"} />

        <Box m="40px">
            
        </Box>
    </Box>
}

export default Dashboard;