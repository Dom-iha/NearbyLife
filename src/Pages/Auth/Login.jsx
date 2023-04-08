import Form from "../../components/ui/Form";

const Login = () => {
   return (
      <section className="grid min-h-screen place-content-center bg-white">
         <Form className='flex flex-col rounded-xl gap-1 bg-white shadow-lg p-4 text-main-txt'>
            <label htmlFor="email">Email</label>
            <input type='email' id='email' className='bg-white outline-none  ' placeholder="Enter Email"/>
            <label htmlFor="password">Password</label>
            <input type='password' id="password" className='bg-white outline-none ' placeholder="Enter Password"/>
         </Form>
      </section>
   );
};

export default Login;
