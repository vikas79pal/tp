import React from 'react'
import "./SignUp.css"
import Fb from "./facebook-770688_1920.png"
import Google from "./logo-google-1991840_1920.png"
import Li from "./linked-in-2668700_1280.png"
import Ms from "./microsoftlogo.png"
const Login = (props) => {
    const changePageHandler=()=>{
        props.onClick()
    }
    return (
        <div className={" s_col items-center md:w-4/12    h-full  rounded-xl"}>
            <h1 className={"font-bold text-xl lg:mt-4 md:mt-2"}>Login</h1>
            <form action="" className={"flex-col md:w-3/4 sm:w-full mt-12"}>
               <label className={"block  w-11/12 text-base lg:mt-1 md:mt-0"} htmlFor="email">Email</label>
               <input className={"block outline-none rounded-sm h-7 lg:mt-1 md:mt-0 bg-blue-100 w-full "} type="email" name="email" id="email" />
               <label className={"block  w-11/12 text-base lg:mt-1 md:mt-0 "} htmlFor="pass">Password</label>
               <input className={"block outline-none rounded-sm h-7 lg:mt-1 md:mt-0 bg-blue-100 w-full "} type="password" name="pass" id="pass" />
            <div className={"flex justify-center "}>

            <button type="submit" className={"w-4/6 h-7 md:w-5/6 lg:w-1/3 md:h-6 lg:h-7 bg-blue-600 lg:mt-5 md:mt-2 mt-5 rounded-md text-gray-50 "}>Login</button>
            </div>
            </form>

<div className={"flex lg:mt-8 md:mt-3 w-full items-center mt-8  "}>

            <hr className={" dash md:w-3/12 lg:w-1/3 w-3/12"} /> <p className={"lg:ml-2 md:ml-1 md:text-xs lg:text-xs  flex-grow md:mr-1 lg:mr-9 text-gray-400 text-xs"}>or connect with </p> <hr className={"w-3/12 md:w-3/12 lg:w-1/3 dash "} />
</div>

<div className={"flex lg:mt-8 md:mt-6 justify-around w-3/4 mt-7"}>
<img src={Ms} className={" h-5 w-4/12 object-contain "} alt="sa" srcset="" />
<img src={Fb} className={" h-5 w-4/12 object-contain "} alt="sa" srcset="" />
<img src={Google} className={" h-5 w-4/12 object-contain "} alt="sa" srcset="" />
<img src={Li} className={" h-5 w-4/12 object-contain "} alt="sa" srcset="" />
</div>

<div className={"lg:mt-12 md:mt-6 md:text-xs lg:text-sm flex justify-between w-full mt-9 text-xs"}>
    <p className>Dont't have an Account?</p>
    <p onClick={changePageHandler} className={"md:text-xs lg:text-sm text-xs md:text-black text-blue-500"}>Signup </p>
</div>

        </div>
    )
}

export default Login
