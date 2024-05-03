import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik, Field } from "formik";
// import { Dropdown } from "formik"
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { tokens } from "../../../theme";
import { useEffect } from "react";
// import axios from "axios";

const AddDepartment = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFormSubmit = (values) => {
        console.log(values);
      };

    // useEffect(() => {
    //   axios.get("/api/v1")
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error))
    // }, [])
    
    return <Box m="20px">
      <Header title={"NEW DEPARTMENT"} subtitle={"Add new Department"} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          setFieldValue,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap={"30px"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
            >
              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{ m: "15px 0 5px 20px", gridColumn: "span 4" }}
              >
                Personal Data
              </Typography>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Department ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.departmentId}
                name="departmentId"
                error={!!touched.departmentId && !!errors.departmentId}
                helperText={touched.departmentId && errors.departmentId}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Department Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.departmentName}
                name="departmentName"
                error={!!touched.departmentName && !!errors.departmentName}
                helperText={touched.departmentName && errors.departmentName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Manager Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.managerName}
                name="managerName"
                error={!!touched.managerName && !!errors.managerName}
                helperText={touched.managerName && errors.managerName}
                sx={{ gridColumn: "span 2" }}
              />

            </Box>
            <Box display={"flex"} justifyContent={"end"} m={"20px 0 0 20px"}>
            <Button type="submit" color="secondary" variant="contained">Add new Department</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
}
const checkoutSchema = yup.object().shape({
    departmentId : yup.string().required("required"),
    departmentName: yup.string().required("required"),
    managerName: yup.string().required("required"),
});

const initialValues = {
    departmentId: "",
    departmentName: "",
    managerName: "",
};

export default AddDepartment;
