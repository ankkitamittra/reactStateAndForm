import React from "react";
import { useFormik } from 'formik';

const TextInput = React.forwardRef((props, ref) => <input ref={ref} {...props}/>)

export default function App({ageValidator}) {
  const formik = useFormik({
    initialValues: { name: "ankita", age: "20"},
    onSubmit: values => {
      console.log(values);
    },
    validate:(values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (values.name && values.name.length < 5) {
        errors.name = 'error name';
      }

      if (values.age && values.age.length < ageValidator) {
        errors.age = 'age error';
      }

      return errors;
    },
    validateOnChange: true
  });
 

  console.log(`formik.dirty`, formik.dirty)
  console.log(`formik.touched`, formik.touched)
  console.log(`formik.isValid`, formik.isValid)
  console.log(`formik.values`, formik.values)
  console.log(`formik.values`, formik.errors)
  console.log(`formik.resetForm`, formik.resetForm)
  console.log(`formik.isValidating`, formik.isValidating)


  return (

    <div>
    
      <TextInput 
         name="name" validate={(val) => val.length > 5} onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name && <span>name error</span>}

      <input name="age" validation={(val) => val.length > ageValidator}  onChange={formik.handleChange} value={formik.values.age}/>
      {formik.errors.age && <span>Age error</span>}
      
     
      
      <button type="submit" onClick={formik.handleSubmit} value={"Submit"}>Submit</button>
    </div>
  );
}