import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import Role from '../../components/ui/Role';
import Logo from '../../components/ui/Logo';
import client from '../../assets/client.png';
import nurse from '../../assets/nurse.png';
import doc from '../../assets/doctor.png';
import pharmacy from '../../assets/pharmacy.png';
import lab from '../../assets/lab.png';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import CheckIcon from '../../components/ui/CheckIcon';

function ChooseRole(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const roles = [
		{
			img: client,
			name: 'Individual Client',
			desc: 'Find the nearest medicals or medical facility.',
			alt: 'client image',
			id: 'role_1',
		},
		{
			img: nurse,
			name: 'Nurse',
			desc: 'Search for a Nursing job.',
			alt: 'a nurse',
			id: 'role_2',
		},
		{
			img: doc,
			name: 'Doctor',
			desc: 'Find your closes patients.',
			alt: 'a doctor',
			id: 'role_3',
		},
		{
			img: pharmacy,
			name: 'Pharmacy',
			desc: 'Find your closest drugstore.',
			alt: 'meds',
			id: 'role_4',
		},
		{
			img: lab,
			name: 'Lab test',
			desc: 'Find your closest lab test.',
			alt: 'a lab',
			id: 'role_5',
		},
	];

	// const choice = roles.map((role) => (
	// 	<Role
	// 		img={role.img}
	// 		name={role.name}
	// 		desc={role.desc}
	// 		alt={role.alt}
	// 		key={role.id}
	// 		id={role.id}
	// 	/>
	// ));

	const [selected, setSelected] = useState(roles[0]);
   const handleChange = () => {
      setSelected(roles[1])
   }
	return (
		<section
			id='choose-role'
			className='grid min-h-screen place-items-center p-3.5 bg-choose'
		>
			<div className='grid place-items-center mt-10'>
				<div className='rounded-sm p-1 bg-splash w-fit'>
					<Logo className='mx-auto w-[15.2px] h-[13.94px]' />
				</div>
				<h1 className='text-darkblue h-fit text-center text-[1.076rem] font-bold'>
					NearByLife
				</h1>
			</div>
			<div className='grid place-content-center text-center mt-5 mb-5'>
				<h2 className='text-deepblue font-bold text-xl'>
					Choose your Role
				</h2>
				<p className='text-lightgray text-[0.875rem] mb-2'>
					To be registered, select the roles that best suit your individual
					requirements
				</p>
			</div>

			<Form
				className='grid gap-1.5 w-full text-lightgray'
				onSubmit={handleSubmit}
			>
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className='sr-only'>
						Server size
					</RadioGroup.Label>
					<div className='space-y-2'>
						{roles.map((role) => (
							<RadioGroup.Option
                        id={role.id}
								key={role.name}
								value={role}
								className={({ active, checked }) =>
									`${
										active
											? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
											: ''
									}
                           ${
										checked
											? 'bg-paleblue bg-opacity-90 text-white'
											: 'bg-white'
									}
                                    relative flex cursor-pointer rounded-md px-5 py-4 shadow-sm focus:outline-none`
								}
							>
								{({ active, checked }) => (
									<>
										<div className='roles grid gap-x-2 w-full items-center'>
											<img
												src={role.img}
												alt={role.alt}
												className='rounded-full w-9 h-9 self-center'
											/>
											<div className='flex items-center'>
												<div className='text-sm'>
													<RadioGroup.Label
														as='p'
														className={`font-medium text-[0.875rem]   ${
															checked
																? 'text-white'
																: 'text-deepblue'
														}`}
													>
														{role.name}
													</RadioGroup.Label>
													<RadioGroup.Description
														as='span'
														className={`inline ${
															checked
																? 'text-sky-100'
																: 'text-lightgray'
														}`}
													>
														<span>{role.desc}</span>{' '}
													</RadioGroup.Description>
												</div>
											</div>
											{checked && (
												<div className='shrink-0 text-white'>
													<CheckIcon className='h-6 w-6' />
												</div>
											)}
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
				<Button className='bg-darkblue hover:bg-blue transition text-white p-2.5 outline-offset-2 outline-blue mt-14'>
					Sign up
				</Button>
			</Form>
			<div className='flex gap-2 text-sm mt-5 mb-12'>
				<p className='text-lightgray '>Have an account?</p>
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

export default ChooseRole;
