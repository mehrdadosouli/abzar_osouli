import {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../../config/toast.js"
import '../signup/signup.css'
import { validationLogin } from '../../utils/validationLogin';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate() 
    const [data, setData] = useState({
        inputEmail: '',
        inputPassword: '',   
      })
      const [focus, setFocus] = useState({
        inputEmail: false,
        inputPassword: false,
      })
      const [error, setError] = useState({})
      
    const focusHandler=(e)=>{
        setFocus({
            ...focus,[e.target.name]:true
        })
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if(!Object.keys(error).length){
            notify('با موفقیت لاگین شدید',"success")
            navigate("/")
        }else{
            notify('ایمیل یا پسورد را وارد فرمایید',"error")
        }
    }
    const changeInputHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        setError(validationLogin(data,'login'))
    },[data])

    return (
        <>
            <div className="container mx-auto my-40">
                <ToastContainer />
                <form className="singup">
                    <h1>ورود</h1>
                    
                    <label htmlFor="email">ایمیل</label>
                    <input
                        type="text"
                        placeholder="ایمیل خود را وارد کنید..."
                        className={(focus.inputEmail && error.email) ? "errorinput" : "successinput"}
                        onBlur={focusHandler}
                        onChange={changeInputHandler}
                        value={data.inputEmail}
                        name="inputEmail"
                    />
                    {focus.inputEmail && error.email ? <span className="span">{error.email}</span> : ""}
                    
                    <label htmlFor="password">رمز عبور</label>
                    <input
                        type="password"
                        placeholder="رمز عبور خود را وارد کنید..."
                        className={(focus.inputPassword && error.password) ? "errorinput" : "successinput"}
                        onBlur={focusHandler}
                        onChange={changeInputHandler}
                        value={data.inputPassword}
                        name="inputPassword"
                    />
                    {focus.inputPassword && error.password ? <span className="span">{error.password}</span> : ""}
                    
                    <div className="btns underline flex justify-end">
                        <Link to='/signup'>ثبت نام</Link>
                    </div>
                    
                    <input type="submit" value="ارسال" onClick={submitHandler} />
                </form>
            </div>
        </>
    );
};

export default Login;