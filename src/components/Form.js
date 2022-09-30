import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import './Form.css'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        navigate('/two');
    };
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='head'>Registration Form</h1>
                <div className='form'>
                    <div className="form-input">
                        <label className='lbl1'>UserName&nbsp;&nbsp;&nbsp;&nbsp;</label><br />
                        <input type="text" className="form-control-material" name="username" placeholder="Username" {...register("username", { required: "Please Enter Name" })} />
                    </div>
                    <p className='err'>{errors.username?.message}</p>
                    <div className="form-input">
                        <label className='lbl'>Phone Number</label><br />
                        <input type="tel" name="phonenumber" placeholder="phonenumber" {...register("phonenumber", { required: "Please Enter PhoneNumber.", maxLength: { value: 10, message: "Number can't be more than 10 digits." }, minLength: { value: 10, message: "Number should be of 10 digits." } })} />
                    </div>
                    <p className='err'>{errors.phonenumber?.message}</p>
                    <div className="form-input">
                        <label className='lbl3'>Email&nbsp;&nbsp;&nbsp;&nbsp;</label><br />
                        <input type="email" name="email" placeholder="Email" {...register("email", { required: "Please enter email" })} />
                    </div>
                    <p className='err'>{errors.email?.message}</p>
                    <button type="submit" className='btn btn-primary btn-ghost' >Next</button >
                </div>
            </form>

        </div>
    )
}

export default Form
