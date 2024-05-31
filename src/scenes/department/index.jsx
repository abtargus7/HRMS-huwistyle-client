import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { mockDepartmentData } from "../../data/departmentData";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const Departments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [departments, setDepartments] = useState([]);

  const columns = [
    {
      field: "departmentId",
      headerName: "Department ID",
    },
    {
      field: "departmentName",
      headerName: "Department Name",
      flex: 1
    },
    {
      field: "managerName",
      headerName: "Manager Name",
      flex: 1
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1
    },
  ];

  useEffect(() => {
    axios
      .get("/api/v1/departments/")
      .then((response) => {
        // console.log(response.data);
        setDepartments(response.data.data);
        console.log(departments);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box m={"20px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Header title="DEPARTMENTS" subtitle={"Manage the Departments"} />
        <Link to={"/departments/add"}>
          <Button variant="soft" size="sm">
            Add department
          </Button>
        </Link>
        <Link to={"/departments/designations/add"}>
          <Button variant="soft" size="sm">
            Add Designation
          </Button>
        </Link>
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid getRowId={(row) => row.departmentId}rows={departments} columns={columns} />

        
      </Box>
    </Box>
  );
};

export default Departments;
