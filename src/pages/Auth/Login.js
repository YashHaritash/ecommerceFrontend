import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';

import axios from 'axios'

import {useNavigate ,useLocation} from 'react-router-dom'
import { useAuth } from '../../context/auth';


const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [auth,setAuth] = useAuth();
  const location = useLocation(); 

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`/api/v1/auth/login`,{email,password });
        if(res && res.data.success){
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token
            })
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate(location.state ||'/')
            setTimeout(()=>{
                toast.success(res.data && res.data.message)
            },300)
           
        }
        else{
            toast.error(res.data.message )
        }
        
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong')
    }
  }
  return (
    <Layout title={'Login - Ecommerce App'}>
        <div className='form-container'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
            
                <div className="mb-3">

                    <input type="email" className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required/>
                    
                </div>
                
                <div className="mb-3">
                
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required/>
                </div>
                <div className='mb-3'>
                <button type="submit" className="btn btn-primary" onClick={()=>{
                    navigate('/forgot-password ')
                }}>Fotgot Password</button>
                </div>
               
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </Layout>
  )
}

export default Login
