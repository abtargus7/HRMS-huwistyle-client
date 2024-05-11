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

const Employee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Header title="EMPLOYEES" subtitle="Manage the Team Members" />
        <Button variant="soft" size="sm">
          <Link to={"/api/v1/employee/add"}>Add Employees</Link>
        </Button>
      </Box>

      <Box m="40px 0 0 0" height="75vh">
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
      </Box>
    </Box>
  );
};

export default Employee;
