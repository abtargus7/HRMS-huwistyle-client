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

const Departments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/departments/")
    .then((response) =>  {
        console.log(response.data)
        setDepartments(response.data.data)
        console.log(departments);
      
      })
    .catch(error => console.log(error))
  }, [])
  

  return (
    <Box m={"20px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Header title="DEPARTMENTS" subtitle={"Manage the Departments"} />
        <Link to={"/api/v1/department/add"}>
          <Button variant="soft" size="sm">
            {" "}
            Add department{" "}
          </Button>
        </Link>
      </Box>

      <Box m="40px 0 0 0" height="75vh">
        {departments.map((department, index) => {
          return (
            <Card
              key={index}
              variant="solid"
              color="primary"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <CardContent orientation="horizontal">
                <SvgIcon>
                  <AccountCircleIcon />
                </SvgIcon>
                </CardContent>
                <CardContent>
                <Typography level="body-md">{department.departmentId}</Typography>
              </CardContent>
              <CardContent level="body-md">{department.departmentName}</CardContent>
              <CardContent level="body-md">{department.managerName}</CardContent>
              {/* <CardContent level="body-md">Employee Count: {department.employees.length}</CardContent> */}
              <CardActions>
                <Button variant="soft" size="sm">
                  Show Data
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Departments;
