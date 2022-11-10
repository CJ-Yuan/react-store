import React,{useState} from 'react'
import './style.less'
import api from '../../../api'
//验证规则
import validator from '../../../utils/validator'
import classnames from 'classnames'

export default function LoginView(props) {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
//储存错误信息
const [errors,setErrors] = useState({});


function onSubmitHandle(e){
  //取消form 跳转
  e.preventDefault();

  var { isValid,errors} = validator({
    username,
    password
  })
  if(!isValid){
    api.login({
      username,
      password
    }).then(res=>{
      if(res.data.status === 200){
        //登录成功
        //回传
        props.onloginEvent(res.data)
        setErrors({})
      }else{
        //登录失败
        console.log('登录失败')
      }
    })
  }else{
    setErrors(errors);
  }

}

//这是监听输入框的回调
function changeHandle(e){
  if(e.target.name === "username"){
    setUsername(e.target.value)
  }
  if(e.target.name === "password"){
    setPassword(e.target.value)
  }
}

  return (
    <div id="login-container">
        <form onSubmit={ onSubmitHandle }>
        <div className={ classnames('input-container phone-container',{'input-container-error ':errors.username})}>
            <i className="icon-tablet"></i>
            <input type="text" placeholder='用户名/手机号' value={username} onChange={changeHandle} name="username"/>
        </div>
        <div className={ classnames('input-container password-container',{'input-container-error ':errors.password})}>
            <i className="icon-key"></i>
            <button>发送验证码</button>
            <input
                type="password" placeholder="输入验证码" value={password} onChange={changeHandle} name="password"/>
        </div>
        <button className="btn-login">登录</button>
        </form>
    </div>
  )
}
