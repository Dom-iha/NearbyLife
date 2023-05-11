import { useContext } from 'react';
import Form from '../../components/ui/Form';
import Logo from '../../components/ui/Logo';
import Button from '../../components/ui/Button';
import AuthContext from '../../context/AuthContext';
import InputGroup from '../../components/ui/InputGroup';
import ResetPass from '../../components/modals/ResetPass';
import ForgotPass from '../../components/modals/PasswordModal';

const Login = (props) => {
	const loginHandler = (e) => {
		e.preventDefault();
		console.log('logging in...');
	};

	const passCtx = useContext(AuthContext);

	return (
		<>
			{/* <ResetPass /> */}
			<ForgotPass />
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
						className='grid rounded-xl gap-2 bg-white p-2 text-fade relative'
					>
						<InputGroup
							id='email'
							for='email'
							type='email'
							label='Email'
							placeholder='Enter Email'
							className='mb-4'
						/>
						<InputGroup
							id='password'
							for='password'
							type={passCtx.type}
							show={passCtx.type}
							label='Password'
							placeholder='Enter Password'
						/>
						<a
							className='text-sm text- mb-6 text-lightgray'
							onClick={passCtx.openModal}
						>
							Forgot password?
						</a>
						<Button className='bg-darkblue text-white p-2.5 outline-offset-2 outline-blue'>
							Log in
						</Button>
						<div className='text-sm flex justify-center gap-[2px]'>
							<p className=' text-gray'>New User?</p>
							<a
								className='text-darkblue font-medium'
								onClick={() => props.onSwitch()}
							>
								Create Account
							</a>
						</div>
					</Form>
				</div>
			</section>
		</>
	);
};

export default Login;
