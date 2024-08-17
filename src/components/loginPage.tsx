import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import UserPage from './userPage';


function LoginPage() {
    let navigate = useNavigate()
    const [formData, setFormData] =  useState({
         email: '', password: ''
      })
      console.log(formData)
    
      const handleChange = (event : any) => {
           setFormData((prevFormData) => {
              return {
                 ...prevFormData,
                 [event.target.name]: event.target.value
              }
           } ) 
      }

      const handleSubmit = async (event : any) => {
             event.preventDefault()
             try {
                
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: formData.email,
                    password: formData.password,
                   
                  })
                  if(error) throw error
                  const { data: { user } } = await supabase.auth.getUser()
                navigate (`/UserPage/${user?.id}`)
                
             } catch (error) {
                alert(error)
             }
      }

    return (
        <div  className=" flex items-center justify-center h-screen ">
            <form onSubmit={handleSubmit} className="flex max-w-96 flex-col gap-4  w-full">
                <div>
                  <h1 className="text-center font-black text-lg">Login</h1> 
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput onChange={handleChange} id="email1" name='email' type="email" placeholder="name@gmail.com" required />
                </div>
                <div> 
                    <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput onChange={handleChange} id="password1" name='password' type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button className="ml-40 mt-8 w-28" type="submit">Login</Button>
                <p>Don't have an account <Link to={'/SignUp'}> Sign Up</Link></p>
        </form>
        
    </div>
    )
}

export default LoginPage
