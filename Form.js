import React,{useState} from 'react'
import FormImage from './FormImage'
import SignUp from './SignUp'
import Login from './Login'


const Form = () => {
    const [islogin, setIsLogin] = useState(false)
    const changePageHandler =()=>{
        setIsLogin(!islogin)
    }
    return (
        <div className={"flex justify-around items-center w-9/12 h-5/6 bg-gray-100 rounded-2xl"}>
            <FormImage/>
            {!islogin && <SignUp onClick={changePageHandler} />}
            {islogin && <Login onClick={changePageHandler}/>}
            
            
        </div>
    )
}

export default Form
