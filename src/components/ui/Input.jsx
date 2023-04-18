import { CiMail } from 'react-icons/ci';
import { MdLock } from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import Button from './Button';

const Input = ({ label, type, placeholder, show }) => {
	const passCtx = useContext(AuthContext);
	return (
		<div className='relative'>
			<label>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				autoComplete='off'
				className='w-full bg-input text-gray pl-8 border-transparent focus-visible:border-none focus-visible:outline-none rounded-md placeholder:text-lightgray'
			/>
			{type === 'email' && (
				<CiMail className='fill-blue absolute left-2 top-1/3' />
			)}
			{type === passCtx.type  && (
				<MdLock className='fill-blue absolute left-2 top-1/3' />
			)}
			{type === show && (
				<Button
					onClick={() => passCtx.toggle()}
					type='button'
					className='flex max-w-fit absolute right-2 top-1/3 bg-white outline-blue outline-offset-2'
				>
					<span className='sr-only'>toggle password visibility</span>
					{passCtx.showPassword ? (
						<FaEye className='hover:fill-blue fill-lightgray ' />
					) : (
						<FaEyeSlash className='hover:fill-blue fill-lightgray' />
					)}
				</Button>
			)}
		</div>
	);
};

export default Input;
