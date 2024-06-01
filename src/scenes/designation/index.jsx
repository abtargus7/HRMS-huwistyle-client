import { Button, Box, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import notification from "../../components/notification.js";


const AddDesignations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [departmentsList, setDepartmentsList] = useState([]);


  const handleFormSubmit = async (values) => {
    console.log(values);
    const addDesignationResponse = await axios.post("/api/v1/designation/add", {
      designationId: values.designationId,
      designationName: values.designationName,
      departments: values.departments,
    });

    console.log(addDesignationResponse);
    notification(addDesignationResponse);
  };

  const getDepartments = async () => {
    const response = await fetch("/api/v1/employee/add/getDepartments");
    const data = await response.json();
    console.log(data.data);
    setDepartmentsList(data.data);
    // handleChange
  };

  useEffect(() => {
    getDepartments();
  }, []);

  // const onStateChange = async (event) => {
  //   // console.log(event.target.value);
  //   Formik.departments = event.target.value;
  //   const result = await axios.get(
  //     `/api/v1/employee/add/getDesignations/${event.target.value}`
  //   );
  //   // console.log(result);
  //   setDesignationList(result.data);
  // };

  return (
    <Box m="20px">
      <Header title={"NEW DESIGNATION"} subtitle="Add new designation" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{ m: "15px 0 5px 20px", gridColumn: "span 4" }}
              >
                Designation Data
              </Typography>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Designation Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.designationId}
                name="designationId"
                error={!!touched.designationId && !!errors.designationId}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Designation Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.designationName}
                name="designationName"
                error={!!touched.designationName && !!errors.designationName}
                sx={{ gridColumn: "span 2" }}
              />

              <label>Department</label>
              <Field
                // formControl={{ sx: sxFormControl }}
                // component={Select}
                // labelId="age-simple"
                label="Department"
                as="select"
                name="departments"
                onChange={handleChange}
                // sx={{ backgroundColor: colors.gray[400] }}
                // value={values.departmentName}
              >
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                <option value="">Select</option>
                {departmentsList.map((dept, index) => (
                  <option key={index} value={dept._id}>
                    {dept.departmentName}
                  </option>
                ))}
              </Field>
            </Box>
            <Box display={"flex"} justifyContent={"end"} m={"20px 0 0 20px"}>
              <Button type="submit" color="secondary" variant="contained">
                Add Designation
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  designationId: yup.string().required("required"),
  designationName: yup.string().required("required"),
});

const initialValues = {
  designationId: "",
  designationName: "",
};

export default AddDesignations;
