import { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const [showPassword, setShowPassword] = useState(false);
	const inputType = showPassword ? 'text' : 'password';
	const toggle = (id) => {
		setShowPassword((prevState) => !prevState);
	};
	const [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const authContext = {
		isValid: true,
		type: inputType,
		isLoggedIn: isLoggedIn,
		togglePassword: toggle,
		showPassword: showPassword,
		toggle: toggle,
		isOpen: isOpen,
		openModal: openModal,
		closeModal: closeModal,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
