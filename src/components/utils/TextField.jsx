import React from "react";

import { TextField } from "@material-ui/core";
import { useField } from "formik";

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        label={label}
        {...field}
        {...props}
        inputProps={{}}
        fullWidth
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextField;
