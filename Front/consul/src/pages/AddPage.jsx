import React from 'react';
import { ErrorMessage, Field, Formik , Form} from 'formik';
import * as Yup from 'yup';
import '../sass/add.scss'
import {  useNavigate } from "react-router-dom";


const AddPage = () => {
    const navigate = useNavigate()

    function handleAdd(val) {
        fetch('http://localhost:4000/', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(val), 
      })
     .then((res)=>res.json())
     navigate('/')
        
    }

     
    

    
    return (
        <div className="add">
              <Formik
       initialValues={{ icon: '', name: '', desc: '' , price:'' }}
       validationSchema={Yup.object({
        icon: Yup.string().required("Plase, icon"),
         name: Yup.string().required("Plase, name"),
         desc: Yup.string().required("Plase, description"),
         price: Yup.number().required("Plase, price")
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          handleAdd(values);
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="icon">Icon</label>
         <Field name="icon" type="text" />
         <ErrorMessage name="icon" />
 
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="desc">Description</label>
         <Field name="desc" type="text" />
         <ErrorMessage name="desc" />

         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />

 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
        </div>
    )
}

export default AddPage