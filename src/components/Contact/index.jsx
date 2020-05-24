import React, { useState } from "react";

import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { Formik, connect, Form } from "formik";
import * as Yup from "yup";

import MyTextField from "../ultils/TextField";
import { useStyles } from "./styles";

const templateId = "template_4YoLrC1N";

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

const defaultState = {
  isOpen: false,
  message: "",
  error: false,
  success: false,
};

const ContactForm = connect(
  ({ formik: { values, isValid, resetForm, setTouched } }) => {
    const classes = useStyles();

    const [eventState, setEventState] = useState(defaultState);

    const onSubmit = async (content = {}) => {
      const { firstName, lastName, email, message } = content;
      await onSendFeedback(templateId, {
        to_name: "Thu Nguyen",
        message_html: message,
        from_name: firstName.concat(" ", lastName),
        reply_to: email,
      });

      resetForm({});

      setTouched({ firstName: false });
    };

    const setSnackBar = (type, message) => {
      setEventState({
        ...eventState,
        isOpen: true,
        [type]: !eventState[type],
        message,
      });
    };

    const onSendFeedback = (templateId, content) => {
      window.emailjs
        .send("ngthu1995_gmail_com", templateId, content)
        .then(() => {
          setSnackBar("success", "Thank you for reaching out!");
        })
        .catch((err) => {
          setSnackBar("error", "Something went wrong. Please try again!");
        });
    };

    const onCloseSnackbar = () => {
      setEventState(defaultState);
    };
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
                  onClick={async () => {
                    await onSubmit(values);
                  }}
                  disabled={!isValid}
                  color="primary"
                  type="submit"
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
              </Typography>
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={eventState.isOpen}
            onClose={onCloseSnackbar}
            message={eventState.message}
            key={"bottom" + "right"}
          />
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
        validateOnMount={false}
        enableReinitialize
        initialValues={initialValues}
      >
        <ContactForm />
      </Formik>
    </div>
  );
};

export default Contact;
