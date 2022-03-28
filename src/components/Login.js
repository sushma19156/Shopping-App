import { Box, Button, TextField, Typography } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik,  } from 'formik'
import React from 'react'

import * as yup from 'yup'

function Login(props) {
 
    const loginValues = {
        email: '',
        password: ''
    }
    const Schema = yup.object({
        email: yup.string().email('invalid email').required('Required!'),
        password: yup.string().required('Required!')
    })



    const logindata = (value) => {
        console.log('loginData', value);
        const takenData = JSON.parse(localStorage.getItem('abc'))
        console.log('takenData',takenData);

        const index = takenData.findIndex((val,ind)=>{
            return val.email === value.email
           
        })
        // console.log(val,'val');
        if(index===-1){
            alert('you need to register')
            props.history.push('/register')
        }else{
            props.history.push('/home')
        }
    }
    return (
        <div className='materialForm'>
            <Formik initialValues={loginValues}
                validationSchema={Schema}
                onSubmit={(value) => {
                    logindata(value)
                }}
            >
                <Form>
                <Typography variant='h4' color='primary'>Login</Typography>
                    <Field type='email'
                        name='email'
                        variant='outlined'
                        label='Enter Email'
                        as={TextField}
                        color='primary'
                        fullWidth
                    />
                    <Typography variant='p' color='error'>{<ErrorMessage name='email' />}
                    </Typography>
                    <Box height={14} />

                    <Field type='text'
                        name='password'
                        variant='outlined'
                        label='Enter password'
                        as={TextField}
                        color='primary'
                        fullWidth
                    />
                    <Typography  variant='p' color='error'>{<ErrorMessage name='email' />}</Typography>
                    <Box height={14} />
                    <Button type="submit" variant='contained' color='primary' size='large'>Login</Button>

                </Form>
            </Formik>
        </div>
    )
}

export default Login