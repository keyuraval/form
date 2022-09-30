import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom';
import './Form.css'

const Formt = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const navigate = useNavigate();
    const { state } = useLocation();

    const navigateff = () => {

        navigate('/vald', { state: state });
    };
    const navigateh = () => {
        navigate('/');
    };
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='head'>Registration Form</h1>
                <div className='form'>
                    <div className="form-input">
                        <label className='lbl5'>Location</label><br />
                        <input type="text" className="form-control-material" name="location" placeholder="Location" {...register("location", { required: "Please Enter Location" })} />
                        <p className='err'>{errors.location?.message}</p>

                    </div>
                    <div className="field">
                        <label className='lbl4'>Age</label><br />
                        <input type="num" className="form-control-material" name="Age" placeholder="Age" {...register("Age", { required: "Please Enter Age", max: { value: 100, message: "Please Enter valid age." }, min: { value: 100, message: "Please Enter valid age." } })} />
                        <p className='err'>{errors.Age?.message}</p>
                    </div>
                    <div className="field">
                        <label className='lbl6'>University</label><br />
                        <input type="text" className="form-control-material" name="university" placeholder="University" {...register("university", { required: "Please Enter University Name" })} />
                        <p className='err'>{errors.university?.message}</p>
                    </div>
                    <button className='btn2 btn-primary' onClick={navigateh}>Prev</button>
                    <button className='btn1 btn-primary' onClick={navigateff}>Submit</button>


                    {/* <button className='btn btn-primary btn-ghost' onClick={navigateh}>Prev</button> */}
                </div>
            </form>

        </div>
    )
}

export default Formt