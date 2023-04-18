import { Dialog, Transition } from '@headlessui/react';
import Button from '../ui/Button';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import Envelope from '../ui/Envelope';

function Modal() {
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
								<Dialog.Panel className='w-full max-w-screen-sm grid mx-auto transform overflow-hidden rounded-md bg-white p-4 text-center shadow-xl transition-all'>
								<div className='rounded-full w-fit mt-5 mb-10 mx-auto'>
										<Envelope className='m-0'/>
									</div>
									<Dialog.Title className='text-lg font-medium text-darkgray'>
										Thank you for Registration
									</Dialog.Title>

									<Dialog.Description className='text-sm text-gray mt-1 mb-10'>
										To start your search please fill your profile
									</Dialog.Description>

									<Button
										type='button'
										className='rounded-md w-full text-white bg-darkblue hover:bg-blue px-4 py-3 my-10 font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-darkblue focus-visible:ring-offset-2'
										onClick={modalCtx.closeModal}
									>
										Profile
									</Button>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default Modal;
