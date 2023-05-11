import { createContext } from 'react';

const AuthContext = createContext({
	isLoggedIn: false,
	showPassword: false,
	isValid: true,
	toggle: () => {},
	type: '',
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

export default AuthContext;
