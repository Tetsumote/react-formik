import React from 'react';
import './App.css';
import { Formik } from "formik";
import * as Yup from 'yup';

function App() {
  return (
    <div className="App">
      <Formik
      initialValues={this.state.InitialFormValues}
      onSubmit={(values, {setSubmitting}) => {/* handle submit */ }}
      validationSchema={loginValidation}
      >{
        props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return <form onSubmit={handleSubmit}></form>
        }
      }
      </Formik>
    </div>
  );
}

export default App;
