import React, { useEffect, useState } from 'react'
import { validationLogin } from '../../utils/validationLogin.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css"
import { notify } from "../../config/toast.js"
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate=useNavigate() 
  const [data, setData] = useState({
    inputName: '',
    inputEmail: '',
    inputPassword: '',
    inputConfirm: '',
    inputCheckbox: false,
  })
  const [focus, setFocus] = useState({
    inputName: false,
    inputEmail: false,
    inputPassword: false,
    inputConfirm: false,
    inputCheckbox: false,
  })
  const [error, setError] = useState({})

  const changeInputHandler = (e) => {
    if (e.target.name == 'inputCheckbox') {
      setData({
        ...data, [e.target.name]: e.target.checked
      })
    } else {
      setData({
        ...data, [e.target.name]: e.target.value
      })
    }
  }


  const focusHandler = (e) => {
    setFocus({
      ...focus, [e.target.name]: true
    })
  }



  const submitHandler = event => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      notify('با موفقیت ثبت نام کردید',"success")
      navigate("/")
    } else {
      setFocus({
        inputName: true, inputEmail: true, inputConfirm: true, inputPassword: true, inputCheckbox: true
      })
      notify("لطفا فیلد ها را بررسی کنید","error")
    }
  }

  useEffect(() => {
    setError(validationLogin(data, 'signup'))
  }, [data])

  return (
    <>
      <div className="container mx-auto my-40">
        <ToastContainer />
        <form className="singup">
          <h1>ثبت نام</h1>     
            <label htmlFor="name">نام</label>
            <input
              type="text"
              placeholder="نام خود را وارد کنید..."
              className={(focus.inputName && error.name) ? "errorinput" : "successinput"}
              onFocus={focusHandler}
              onChange={changeInputHandler}
              value={data.inputName}
              name="inputName"
            />
            {focus.inputName && error.name ? <span className="span">{error.name}</span> : ""}
            
            <label htmlFor="email">ایمیل</label>
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید..."
              className={(focus.inputEmail && error.email) ? "errorinput" : "successinput"}
              onFocus={focusHandler}
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
              onFocus={focusHandler}
              onChange={changeInputHandler}
              value={data.inputPassword}
              name="inputPassword"
            />
            {focus.inputPassword && error.password ? <span className="span">{error.password}</span> : ""}
            
            <label htmlFor="ConfirmPassword">تأیید رمز عبور</label>
            <input
              type="password"
              placeholder="تأیید رمز عبور خود را وارد کنید..."
              className={(focus.inputConfirm && error.comfirm) ? "errorinput" : "successinput"}
              onFocus={focusHandler}
              onChange={changeInputHandler}
              value={data.inputConfirm}
              name="inputConfirm"
            />
            {focus.inputConfirm && error.comfirm ? <span className="span">{error.comfirm}</span> : ""}
            
            <div className="checkbox">
              <label htmlFor="policy">قبول شرایط و قوانین حفظ حریم خصوصی</label>
              <input
                type="checkbox"
                id="policy"
                onFocus={focusHandler}
                onChange={changeInputHandler}
                checked={data.inputCheckbox}
                name="inputCheckbox"
              />
              {focus.inputCheckbox && error.checkbox ? <span className="span">{error.checkbox}</span> : ""}
            </div>
            
            <div className="btns underline flex justify-end">
              <Link to="/login">ورود</Link>
            </div>
            
            <input type="submit" value="ارسال" onClick={submitHandler} />
         </form>

      </div>
    </>
  )
}
