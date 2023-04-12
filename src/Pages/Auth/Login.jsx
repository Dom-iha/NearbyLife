import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import InputGroup from "../../components/ui/InputGroup";
import { useState } from "react";

const Login = (props) => {
   const loginHandler = (e) => {
      e.preventDefault();
      console.log("logging in...");
   };

   const [showPassword, setShowPassword] = useState(false);

   const toggle = () => {
      setShowPassword((prevState) => !prevState);
   };

   const inputType = showPassword ? "text" : "password";

   return (
      <section id='login' className='grid min-h-screen bg-white p-3.5'>
         <div className='grid place-content-center'>
            <Logo className='mx-auto w-[26.46px] h-[24.28px]' />
            <h1 className='text-darkblue h-fit text-center text-2xl font-bold'>
               NearByLife
            </h1>
         </div>
         
         <div>
            <Form
               onSubmit={loginHandler}
               className='grid rounded-xl gap-6 bg-white p-2 text-fade relative'
            >
               <InputGroup
                  id='email'
                  for='email'
                  type='email'
                  label='Email'
                  placeholder='Enter Email'
               />
               <InputGroup
                  id='password'
                  for='password'
                  type={inputType}
                  show={inputType}
                  label='Password'
                  onToggle={toggle}
                  isVisible={showPassword}
                  placeholder='Enter Password'
               />
               <a className='text-sm text-medium text-lightgray'>
                  Forgot password?
               </a>
               <Button className='bg-darkblue text-white p-2.5 outline-offset-2 outline-blue'>
                  Log in
               </Button>
               <div className='text-sm flex justify-center gap-[2px]'>
                  <p className=' text-gray'>New User?</p>
                  <a className='text-darkblue font-medium' onClick={() => props.onSwitch()}>Create Account</a>
               </div>
            </Form>
         </div>
      </section>
   );
};

export default Login;
