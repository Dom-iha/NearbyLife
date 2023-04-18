import { Dialog, Transition } from '@headlessui/react';
import { MdLock } from 'react-icons/md';
import { useContext } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Form from '../ui/Form';
import AuthContext from '../../context/auth-context';

function ResetPass() {
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
						<div className='grid min-h-full items-center  p-4 text-center'>
							<Transition.Child
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full grid mx-auto max-w-screen-sm transform overflow-hidden rounded-md bg-white p-4 text-center shadow-xl transition-all'>
									<div className='rounded-full w-fit bg-logo my-6 p-3 justify-self-center'>
										<MdLock className='h-10 w-10 fill-darkblue' />
									</div>
									<Dialog.Title className='text-lg font-medium text-darkgray'>
										Reset Password
									</Dialog.Title>

									<Dialog.Description className='text-sm text-gray mt-1 mb-5 '>
										Enter your new Password.
									</Dialog.Description>

									<Form className='w-full'>
										<Input
											placeholder='New Password'
											type={modalCtx.type}
											show={modalCtx.type}
										/>
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

export default ResetPass;
