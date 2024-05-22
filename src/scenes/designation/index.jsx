import { Button, Box, TextField, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as yup from "yup";
// import { TextField } from "formik-mui";


const AddDesignations = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const handleFormSubmit = (values) => {
        console.log(values)
    }



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
                    handleSubmit
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
                                sx={{m : "15px 0 5px 20px", gridColumn: "span 4"}}
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
                                sx={{ gridColumn: "span 2"}}
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
                                sx={{ gridColumn: "span 2"}}
                            />

                            
                            
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
};

const checkoutSchema = yup.object().shape({

});

const initialValues = {

}

export default AddDesignations;