import { Dialog, Transition } from '@headlessui/react';
import Button from '../ui/Button';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Form from '../ui/Form';
import Input from '../ui/Input';
import { MdLock } from 'react-icons/md';

function PasswordModal() {
	// let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const modalCtx = useContext(AuthContext);

	return (
		<>
			<Transition appear show={modalCtx.isOpen}>
				<Dialog className='relative z-10' onClose={modalCtx.closeModal}>
					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-darkblue bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='grid min-h-full items-center p-4 text-center'>
							<Transition.Child
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full mx-auto max-w-screen-sm transform overflow-hidden rounded-md bg-white p-4 text-center  shadow-xl transition-all'>
									<div className='rounded-full w-fit bg-logo my-6 p-3 mx-auto'>
										<MdLock className='h-10 w-10 fill-darkblue' />
									</div>
									<Dialog.Title className='text-lg font-medium text-darkgray'>
										Forgot Password
									</Dialog.Title>

									<Dialog.Description className='text-sm text-gray mt-1 mb-5 '>
										Enter your account Email. We’ll send a recovery
										Link.
									</Dialog.Description>

									<Form>
										<Input type='email' placeholder='Email' />
										<Button
											type='button'
											className='rounded-md w-full text-white bg-darkblue hover:bg-blue px-4 py-3 mb-14 mt-4 font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
											onClick={modalCtx.closeModal}
										>
											Send
										</Button>
									</Form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default PasswordModal;
