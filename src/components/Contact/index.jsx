import React, { useEffect } from "react";

import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Formik, connect, Form } from "formik";
import * as Yup from "yup";

import MyTextField from "../ultils/TextField";
import { useStyles } from "./styles";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("First name is required."),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Last name is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactForm = connect(
  ({ formik: { values, isValid, errors, resetForm } }) => {
    console.log("errors", errors);
    console.log("isValid", isValid);
    const classes = useStyles();

    // pass validation
    // prevent submit twice
    return (
      <Form id="contact">
        <Paper style={{ padding: "30px 0" }}>
          <Box
            fontWeight="fontWeightBold"
            fontSize="h4.fontSize"
            style={{ textAlign: "left" }}
            m={2}
          >
            Just say Hello!
          </Box>
          <Grid container spacing={2} className={classes.root}>
            <Grid container item xs={12} sm={8} md={8} spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <MyTextField
                  required
                  name="firstName"
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MyTextField
                  required
                  name="lastName"
                  type="text"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <MyTextField required name="email" type="text" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <MyTextField
                  name="message"
                  type="text"
                  label="How can I help you?"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    console.log(values);
                    resetForm();
                  }}
                  disabled={!isValid}
                  color="primary"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={4} md={4}>
              <Typography variant="body1">
                Please take a look at my {""}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="images/ThuNguyen_resume_frontEnd.pdf"
                >
                  resume
                </a>
                {""} if you are interested.
                <p> .</p>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Form>
    );
  }
);

const Contact = ({ refs }) => {
  return (
    <div ref={refs["Contact"]}>
      <Formik
        validationSchema={ContactSchema}
        validateOnMount={true}
        initialValues={initialValues}
      >
        <ContactForm />
      </Formik>
    </div>
  );
};

export default Contact;
