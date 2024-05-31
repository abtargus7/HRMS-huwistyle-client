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
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Employee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [employees, setEmployees] = useState([]);

  const columns = [
    {
      field: "employeeId",
      headerName: "ID",
    },
    {
    field: "firstName",
      headerName: "Employee Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contactNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "officeEmail",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "designaton",
      headerName: "Designation",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
    },
  ];

  useEffect(() => {
    axios
      .get("/api/v1/employee/")
      .then((response) => {
          console.log(response.data.data)
          setEmployees(response.data.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Header title="EMPLOYEES" subtitle="Manage the Team Members" />
        <Button variant="soft" size="sm">
          <Link to={"/employee/add"}>Add Employees</Link>
        </Button>
      </Box>

      <Box
        m="40px 0 0 0"
        height={"75vh"}
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
        <DataGrid
          getRowId={(row) => row.employeeId}
          rows={employees}
          columns={columns}
        />
      </Box>

      {/* <Box m="40px 0 0 0" height="75vh">
        {mockDataTeam.map((employee, index) => {
          return (
            <Card
              key={index}
              variant="solid"
              color="primary"
              // invertedColors
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <CardContent orientation="horizontal">
                <SvgIcon>
                  <AccountCircleIcon />
                </SvgIcon>
              </CardContent>
              <CardContent>
                <Typography level="body-md">{employee.id}</Typography>
              </CardContent>
              <CardContent>
                <Typography level="body-md">{employee.name}</Typography>
              </CardContent>
              <CardContent>
                <Typography level="h2"> {employee.email} </Typography>
              </CardContent>
              <CardContent>
                <Typography level="h2"> {employee.phone} </Typography>
              </CardContent>
              <CardContent>
                <Typography level="h2"> Salary : ₹{employee.salary}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="soft" size="sm">
                  Show Profile
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box> */}
    </Box>
  );
};

export default Employee;
