import React from 'react'
import LoginView from './LoginView'
import {useDispatch} from "react-redux"
import * as loginActions from '../../redux/actions/login'

export default function Login() {
  const dispatch = useDispatch();

  function loginHandle(user){
    //写入Redux
    dispatch(loginActions.setLogin(user))
    //登录成功后，写入本地
    localStorage.setItem("goodlive",JSON.stringify(user))
    //登录成功后，返回上一级页面
    window.history.back();
  }
  return (
    <div>
        <LoginView onloginEvent={loginHandle}/>
    </div>
  )
}
