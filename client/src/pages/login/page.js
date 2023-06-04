"use client"
import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import '../styles/login.css'
import { setUserDetails } from '../redux/reducerSlice/userSlice'

const Login = () => {

      const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            password: '',
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string()
            .typeError('must be a number')
            .test('checkLength', 'the number should exactly be 10 digits', val => val.toString().length == 10)
            .required('Phone number is required'), 
            password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch('http://localhost:8848/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Include the token in the request headers
                    },
                    body: JSON.stringify(values),
                });

                const data = await response.json();

                if (data.success) {
                    dispatch(setUserDetails(data));
                    router.push('/');
                } else {
                    alert('Login failed');
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        },
    });

    return (
        <>
            <h1 className='tittle'>Login page</h1>
                <br />
            <br /> 
            <form className='form' onSubmit={formik.handleSubmit}>
            <br />
                <input
                    type="text"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /> 
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div>{formik.errors.phoneNumber}</div>
                )}
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                )}
                <br />

                <button className='btn-1' type="submit">Login</button>
                <br />
                <span className="Login-register-text">
                    Don't have an account yet? <Link href="/register">Register</Link> instead
                </span>
                <br />
<br />
            </form>
        </>
    );
};

export default Login;



















// import Link from 'next/link';
// import '../styles/login.css';
// import {useState} from 'react'; 


// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//      });
  
//   const {email, password} = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Login successful
//         alert('Login successful');


//     setFormData({
//       email: '',
//       password: '',
     
//     });

//   } else {
//     //Login failed
//     const errorData = await response.json();
//     alert(errorData.message);
//   }
// } catch (error) {
//   console.log(error);
//   alert('An error occurred during Login');
// }

//   };



//   return (
//     <form onSubmit={handleSubmit}>
//     <div className="Login">
//        <input name="email" type="email"  value={email}
//           onChange={handleChange} placeholder="Email" required/><br/>
//       <input name="password"  type="password" value={password}
//           onChange={handleChange} placeholder="Password"  required/><br/>

//       <button type="submit" className="Login-button">Login</button>
//       <span className="Login-register-text">
//         Don't have an account yet? <Link href="/register">Register</Link> instead
//       </span>
//     </div>
//     </form>
//   );
// };

// export default Login;
