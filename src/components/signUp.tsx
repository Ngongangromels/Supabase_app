import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

 function SignUp() {
  const [formData, setFormData] =  useState({
    firstName: '', lastName: '', email: '', password: ''
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
  
  const  handleSubmit  = async (event : any) => {
        event.preventDefault()
        try {
          const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                firstName: formData.firstName,
                lastName: formData.lastName,
              }
            }
          })
          if(error) throw error
          console.log(data)
          alert('check your email verification link')
        } catch (error) {
           alert(error)
        }
  }

  return (
    <div  className=" flex items-center justify-center h-screen ">
        
          <form onSubmit={handleSubmit} className="flex max-w-96 flex-col gap-4  w-full">
            <div>
            <h1 className="text-center font-black text-lg">Sign in</h1> 
            </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="firstName" value="first name" />
        </div>
        <TextInput onChange={handleChange} name="firstName" id="firstName" type="text" placeholder="" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="lastName" value="last name" />
        </div>
        <TextInput onChange={handleChange} name="lastName" id="lastName" type="text" placeholder="" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput onChange={handleChange} name="email"  id="email1" type="email" placeholder="name@gmail.com" required />
      </div>
      <div> 
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput onChange={handleChange} name="password" id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button className="ml-40 mt-8 w-28" type="submit">Sign Up</Button>
      <p>Already have an account ? <Link to={'/LoginPage'}> Login</Link></p>
    </form>
    </div>
   
  );
}
export default SignUp

