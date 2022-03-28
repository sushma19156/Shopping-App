import React from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

function Register(props) {
    // const [details, setdetails] = useState(data())
    


    const [formValues,setformValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    const formSubmit=(values)=>{
        console.log('>>>>>>',values);
    //     const dataCopy = [...formValues]
    //    dataCopy.push(values)
    //    setformValues(dataCopy)
      props.history.push('/login')
    }

    const Schema=yup.object({
        firstName:yup.string().required('required!'),
        lastName:yup.string().required('Required!'),
        email:yup.string().email('invalid email').required('Required!'),
        password:yup.string().required('Required!')
        
    })
  return (
    <div className='materialForm'>
        <Formik initialValues={formValues}
            validationSchema={Schema}
            onSubmit={((values)=>{
                formSubmit(values)
            })}
            >

                <Form>
                    <Typography variant='h4' color='primary'>Signup</Typography>
                    <Field name='firstName'
                        type='text'
                        label='Enter firstName'
                        as={TextField}
                        variant='outlined'
                        color='primary'
                        fullWidth
                    />
                    <Typography variant='p' color='error'>
                        {<ErrorMessage name='firstName'/>}
                        </Typography>
                    <Box height={14}/>

                    <Field name='lastName'
                        type='text'
                        label='Enter lastName'
                        as={TextField}
                        variant='outlined'
                        color='primary' 
                        fullWidth/>
                         <Typography variant='p' color='error'>
                             {<ErrorMessage name='lastName'/>}</Typography>
                         <Box height={14}/>
                        

                    <Field name='email'
                        type='email'
                        label='Enter Email'
                        as={TextField}
                        variant='outlined'
                        color='primary' 
                        fullWidth/>
                           <Typography variant='p' color='error'>
                               {<ErrorMessage name='email'/>}</Typography>
                         <Box height={14}/>

                    <Field name='password'
                        type='text'
                        label='password'
                        as={TextField}
                        variant='outlined'
                        color='primary' 
                        fullWidth/>
                           <Typography variant='p' color='error'>
                               {<ErrorMessage name='password'/>}</Typography>
                         <Box height={14}/>


                    <Button type='submit' variant='contained' color='primary' size='large'>SignUp</Button>
                </Form>
            </Formik>
    </div>
  )
}

export default Register