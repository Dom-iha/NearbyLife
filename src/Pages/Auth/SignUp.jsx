import { useState } from 'react';
import Form from '../../components/ui/Form';
import Logo from '../../components/ui/Logo';
import Button from '../../components/ui/Button';
import InputGroup from '../../components/ui/InputGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

function SignUp(props) {
	const loginHandler = (e) => {
		e.preventDefault();
		console.log('logging in...');
	};

	const [showPassword, setShowPassword] = useState(false);

	const toggle = () => {
		setShowPassword((prevState) => !prevState);
	};

	const inputType = showPassword ? 'text' : 'password';

	return (
		<section
			id='signup'
			className='grid min-h-screen place-items-center bg-white p-3.5'
		>
			<div className='grid place-items-center mt-8'>
				<div className='rounded-md p-2 bg-splash w-fit'>
					<Logo className='mx-auto w-[26.46px] h-[24.28px]' />
				</div>
				<h1 className='text-darkblue h-fit text-center text-2xl font-bold'>
					NearByLife
				</h1>
			</div>
			<div className='grid place-content-center text-center mt-8 mb-5'>
				<h2 className='text-darkgray font-semibold text-xl'>Sign up</h2>
				<p className='text-lightgray'>Create a new account</p>
			</div>
			<Form className='grid rounded-xl gap-6 bg-white p-2 text-fade relative'>
				<InputGroup
					id='name'
					for='name'
					type='text'
					label='Fullname'
					placeholder='Fullname'
				/>
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
					placeholder='Password'
				/>
				<InputGroup
					id='confirm'
					for='confirm'
					type={inputType}
					show={inputType}
					label='Confirm Password'
					onToggle={toggle}
					isVisible={showPassword}
					placeholder='Confirm Password'
				/>
				<div className='text-center'>
					<p className='text-sm text-gray'>
						By signing you agree to our{' '}
						<a className='text-darkblue font-medium'>Terms of use</a> and
						<a className='text-darkblue font-medium'> privacy notice</a>
					</p>
				</div>
				<Button className='bg-darkblue hover:bg-blue transition text-white p-2.5 outline-offset-2 outline-blue'>
					Sign up
				</Button>
				<p className='text-center text-lightgray text-sm'>
					Or continue with
				</p>
				<div className='flex gap-2 justify-self-center'>
					<Button></Button>
					<Button>
						<FcGoogle />
					</Button>
					<Button>
						<BsApple />
					</Button>
				</div>
			</Form>
			<div className='flex gap-2 text-sm mb-5'>
				<p className='text-lightgray '>Already have an account?</p>
				<a
					onClick={() => props.onSwitch()}
					className='text-darkblue font-medium'
				>
					login
				</a>
			</div>
		</section>
	);
}

export default SignUp;
