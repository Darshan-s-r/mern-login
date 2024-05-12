import React, { useState } from 'react'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Forgot() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        buttonText: "submit"
    });
    const { email, buttonText } = values;

    const handleChange = (name) => (event) => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value })
    }

    const handleSubmit = event =>  {
        event.preventDefault();
        setValues({ ...values, buttonText: "Submitting" })
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }

        })
            .then((response) => {
                // console.log('SIGNUP SUCCESS', response)
                //save the responce (user, token) in localstorage/cookie
                authenticate(response, ()=>{
                    setValues({ ...values, email: '', password: '', buttonText: 'submitted' })
                toast.success(`Hey ${response.data.user.name}, Welcome back`)
                })
                
                
            })
            .catch((error) => {
                console.log('SIGNIN ERROR', error.response.data.error)
                setValues({ ...values, buttonText: 'Submit' })
                toast.error(error.response.data.error);
            })
    };

    const passwordForgotForm = () => {
        return (
            <form >
                <div className="form-group">
                    <label id ='foremail' htmlFor="exampleInputEmail1">Email </label>
                    <input onChange={handleChange("email")} value={email} type="email" className="form-control" placeholder="Enter email" />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button id ='forbutton' onClick={handleSubmit} type="submit" className="btn btn-primary">{buttonText}</button>
            </form>
        )
    };
    return (
        
            <Layout>
                <div className='col-md-6 offset-md-3'>
                    <ToastContainer />
                    <h1 className='p-5 text-center'>Forgot password</h1>
                    {passwordForgotForm()}
                </div>
            </Layout>
       
    )
}

