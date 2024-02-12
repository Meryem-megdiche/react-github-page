import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    try {
      const response =  axios.post('http://localhost:3001/equip.routes/add', values);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

    
  

  return (
    <Box m="20px">
      <Header title="Ajouter un èquipement" subtitle="Voir la liste des équipements" />

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
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Entrer le nom "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="Entrer le nom"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Entrer le type d'èquipement"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="Entrer le type d'èquipement"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Entrer l'addresse IP "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="Entrer l'addresse IP"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Entrer le departement"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="Entrer le departement"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Emplacement"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="Emplacement"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Etat"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="Etat"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Ajouter
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
  EntrerLeNom: yup.string().required("required"),
  EntrerLeTypeEquipement: yup.string().required("required"),
  EntrerAddresseIP: yup.string().required("required"),
  EntrerLeDepartement: yup.string().required("required"),
  Emplacement: yup.string().required("required"),
  Etat: yup.string().required("required"),
});
const initialValues = {
  EntrerLeNom: "",
  EntrerLeTypeEquipement: "",
  EntrerAddresseIP: "",
  EntrerLeDepartement: "",
  Emplacement: "",
  Etat: "",
};

export default Form;
