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

const Departments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        {mockDepartmentData.map((department, index) => {
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
                <Typography level="body-md">{department.id}</Typography>
              </CardContent>
              <CardContent level="body-md">{department.name}</CardContent>
              <CardContent level="body-md">{department.manager}</CardContent>
              <CardContent level="body-md">Employee Count: {department.employees.length}</CardContent>
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
