import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';

import axios from 'axios'

import {useNavigate } from 'react-router-dom'


const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [address,setAddress] = useState('')
  const [answer,setAnswer ] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`/api/v1/auth/register`,{name,email,password,phone,address,answer});
        if(res && res.data.success){
            navigate('/login')
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
    

    <Layout title={'Register - Ecommerce App'}>
        <div className='form-container'>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                   
                    <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Your Name' value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} required/>
                    
                </div>
                <div className="mb-3">

                    <input type="email" className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} required/>
                    
                </div>
                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter Your Phone' value={phone} onChange={(e)=>{
                        setPhone(e.target.value)
                    }} required/>
                    
                </div>
                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputAddress" placeholder='Enter Your Address' value={address} onChange={(e)=>{
                        setAddress(e.target.value)
                    }} required/>
                    
                </div>
                
                <div className="mb-3">
                
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required/>
                </div>

                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputAnswer" placeholder='What is Your Favourite Sport?' value={answer} onChange={(e)=>{
                        setAnswer(e.target.value)
                    }} required/>
                    
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </Layout>
    
  )
}

export default Register
