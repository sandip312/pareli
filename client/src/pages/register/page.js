"use client"
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 import '../styles/register.css'

const RegisterUser = () => {

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            role: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required('Fullname is required'),
            email: Yup.string()
            .required('email number is required'),
            phoneNumber: Yup.string()
            .matches(/^\d{10}$/, "Phone number must be 10 digits")
            .required('Phone number is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
            confirmPassword: Yup.string()
                .required('Confirm password is required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (values, { resetForm }) => {
            values.role = "user"
            try {
                const response = await fetch('http://localhost:8848/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Form submitted successfully, handle the response
                    console.log('Form submitted successfully');
                    // Reset the form fields
                    resetForm();
                    // Display success message from the server response
                    const data = await response.json();
                    alert(data.message);
                } else if (response.status === 409) {
                    // User already exists, handle the response
                    const data = await response.json();
                    alert(data.error);
                } else {
                    // Handle other error responses
                    console.error('Form submission failed');
                }
            } catch (error) {
                // Handle network or server errors
                console.error('An error occurred:', error);
            }
        },
    });

    return (
        <>
        <div className='body'>
            <h1 className='tittle'>User Registration</h1>
            <form  onSubmit={formik.handleSubmit}>
            <br />
                <input
                    type="text"
                    placeholder="Fullname"
                    name="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br />
                {formik.touched.fullname && formik.errors.fullname && (
                    <div>{formik.errors.fullname}</div>
                )}
                <br />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br />
                {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                )}
                <br />
                <input
                    type="text"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br />
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
                /><br />
                {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                )}
                <br />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div>{formik.errors.confirmPassword}</div>
                )}
                <br />
                <button className='btn' type="submit">Submit</button>
                <br />
                <span className="Register-login-text">
                 Already have an account yet? <Link href="/login">Sign in</Link> instead
              </span>
                <br />
                
            </form>
        </div>
        </>
    );
};

export default RegisterUser;







// import Link from 'next/link';
// import '../styles/reg.css';
// import * as Yup from 'yup';
// import {useState} from 'react';


// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
   
//   },
//   validationSchema: Yup.object({
//     fullname: Yup.string().required('Fullname is required'),
//     email: Yup.string().required('email number is required'),
//     phoneNumber: Yup.string().required('Phone number is required'),
//     password: Yup.string()
//         .required('Password is required')
//         .min(6, 'Password must be at least 6 characters'),
//     confirmPassword: Yup.string()
//         .required('Confirm password is required')
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
// }),
  
  
  
//   );
  
//   const { fullName, email, password, confirmPassword, phoneNumber } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Registration successful
//         alert('Registration successful');


//     setFormData({
//       fullName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       phoneNumber: '',
//     });

//   } else {
//     // Registration failed
//     const errorData = await response.json();
//     alert(errorData.message);
//   }
// } catch (error) {
//   console.log(error);
//   alert('An error occurred during registration');
// }

//   };




//   return (
//    <div className="body">
//     <form onSubmit={handleSubmit} >
//     <div className="Register">
//       <input name="fullName" type="text"  value={fullName} onChange={handleChange} placeholder="Full Name" required/><br/>
//       <input name="email" type="email"  value={email}
//           onChange={handleChange} placeholder="Email" required/><br/>
//       <input name="password"  type="password" value={password}
//           onChange={handleChange} placeholder="Password"  required/><br/>
//       <input name="confirmPassword" placeholder="Confirm Password" value={confirmPassword}
//           onChange={handleChange} type="password" required/><br/>
//       <input name="phoneNumber" type="phoneNumber"  value={phoneNumber}
//           onChange={handleChange} placeholder="Phone Number" required/><br/>   

//       <button className="Register-button" type="submit">Register</button><br/>
//       <span className="Register-login-text">
//         Already have an account yet? <Link href="/login">Sign in</Link> instead
//       </span>
//     </div>
//     </form>
//     </div>
//   ); 
// };

// export default Register;
