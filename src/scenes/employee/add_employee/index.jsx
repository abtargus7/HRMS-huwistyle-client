import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik, Field } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header";
import { tokens } from "../../../theme";
import axios from "axios";
import { useEffect, useState } from "react";

const AddEmployee = () => {
  const [departmentsList, setDepartmentsList] = useState([]);
  const [designationList, setDesignationList] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getDepartments = async () => {
    const response = await fetch("/api/v1/employee/add/getDepartments");
    const data = await response.json();
    // console.log(data);
    setDepartmentsList(data)
    // handleChange
  };

  const onStateChange = async (event) => {
    // console.log(event.target.value);
    const result = await axios.get(`/api/v1/employee/add/getDesignations/${event.target.value}`);
    // console.log(result);
    setDesignationList(result.data);
  };

  useEffect(() => {
    getDepartments();
  }, []);

  const handleFormSubmit = (values) => {
    console.log(values);
    axios
      .post("/api/v1/employee/add", {
        employeeId: values.employeeId,
        firstName: values.firstName,
        lastName: values.lastName,
        personalEmail: values.personalEmail,
        officeEmail: values.officeEmail,
        contactNumber: values.contactNumber,
        address1: values.address1,
        address2: values.address2,
        departments: values.departments,
        designations: values.designations,
        bankName: values.bankName,
        accountHolderName: values.accountHolderName,
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        basicSalary: values.basicSalary,
        accomodation: values.accomodation,
        allowances: values.allowances,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Box m="20px">
      <Header title={"NEW EMPLOYEE"} subtitle={"Add new team Member"} />

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
                label="Employee Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.employeeId}
                name="employeeId"
                error={!!touched.employeeId && !!errors.employeeId}
                helperText={touched.employeeId && errors.employeeId}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Personal Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.personalEmail}
                name="personalEmail"
                error={!!touched.personalEmail && !!errors.personalEmail}
                helperText={touched.personalEmail && errors.personalEmail}
                sx={{ gridColumn: "span 2 " }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Office Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.officeEmail}
                name="officeEmail"
                error={!!touched.officeEmail && !!errors.officeEmail}
                helperText={touched.officeEmail && errors.officeEmail}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactNumber}
                name="contactNumber"
                error={!!touched.contactNumber && !!errors.contactNumber}
                helperText={touched.contactNumber && errors.contactNumber}
                sx={{ gridColumn: "span 2" }}
              />
        
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address Line 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address Line 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />

              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{ m: "15px 0 5px 20px", gridColumn: "span 4" }}
              >
                Job Details
              </Typography>

              <Field
                // label="Departments"
                as="select"
                name="departments"
                onChange={(event) => {
                  onStateChange(event);
                }}
              >
                <option value="">Select</option>
                {departmentsList.map((dept, index) => (
                  <option key={index} value={dept.departmentName}>
                    {dept.departmentName}
                  </option>
                ))}
              </Field>

              <Field as="select" name="designations" onChange={handleChange}>
                <option value="">Select</option>
                {designationList.map((des, index) => (
                  <option key={index} value={des.desName}>
                    {des.desName}
                  </option>
                ))}
              </Field>

              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{ m: "15px 0 5px 20px", gridColumn: "span 4" }}
              >
                Banking Details
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bank Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bankName}
                name="bankName"
                error={!!touched.bankName && !!errors.bankName}
                helperText={touched.bankName && errors.bankName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Account Holder Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accountHolderName}
                name="accountHolderName"
                error={
                  !!touched.accountHolderName && !!errors.accountHolderName
                }
                helperText={
                  touched.accountHolderName && errors.accountHolderName
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Account Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accountNumber}
                name="accountNumber"
                error={!!touched.accountNumber && !!errors.accountNumber}
                helperText={touched.accountNumber && errors.accountNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="IFSC Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ifscCode}
                name="ifscCode"
                error={!!touched.ifscCode && !!errors.ifscCode}
                helperText={touched.ifscCode && errors.ifscCode}
                sx={{ gridColumn: "span 2" }}
              />
              <Typography
                variant="h6"
                color={colors.gray[300]}
                sx={{ m: "15px 0 5px 20px", gridColumn: "span 4" }}
              >
                Salary Details
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Basic Salary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.basicSalary}
                name="basicSalary"
                error={!!touched.basicSalary && !!errors.basicSalary}
                helperText={touched.basicSalary && errors.basicSalary}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Accomodation "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accomodation}
                name="accomodation"
                error={!!touched.accomodation && !!errors.accomodation}
                helperText={touched.accomodation && errors.accomodation}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Allowances"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.allowances}
                name="allowances"
                error={!!touched.allowances && !!errors.allowances}
                helperText={touched.allowances && errors.allowances}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display={"flex"} justifyContent={"end"} m={"20px 0 0 20px"}>
              <Button type="submit" color="secondary" variant="contained">
                Add new Employee
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  personalEmail: yup.string().email("invalid email").required("required"),
  officeEmail: yup.string().email("invalid email").required("required"),
  contactNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  bankName: yup.string().required("required"),
  accountHolderName: yup.string().required("required"),
  accountNumber: yup.string().required("required"),
  ifscCode: yup.string().required("required"),
  basicSalary: yup.string().required("required"),
  employeeId: yup.string().required("required"),
  // departments: yup.string().required("required")
});
const initialValues = {
  firstName: "",
  lastName: "",
  personalEmail: "",
  officeEmail: "",
  contactNumber: "",
  address1: "",
  address2: "",
  // departments: "",
  bankName: "",
  accountHolderName: "",
  ifscCode: "",
  accomodation: "",
  allowances: "",
  basicSalary: "",
  accountNumber: "",
  employeeId: "",
  // designations: "",
};

export default AddEmployee;
