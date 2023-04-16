import { Label } from '@headlessui/react/dist/components/label/label';
import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import Role from '../../components/ui/Role';

function ChooseRole(props) {
	const choices = [
		{
			img: '',
			role: 'Individual Client',
			desc: 'Find the nearest medicals or medical facility.',
			alt: 'client image',
			id: 'role_1'
		},
		{
			img: '',
			role: 'Nurse',
			desc: 'Search for a Nursing job.',
			alt: 'a nurse',
			id: 'role_2'
		},
		{
			img: '',
			role: 'Doctor',
			desc: 'Find your closes patients.',
			alt: 'a doctor',
			id: 'role_3'
		},
		{
			img: '',
			role: 'Pharmacy',
			desc: 'Find your closest drugstore.',
			alt: 'meds',
			id: 'role_4'
		},
		{
			img: '',
			role: 'Lab test',
			desc: 'Find your closest lab test.',
			alt: 'a lab',
			id: 'role_5'
		},
	];

	const roles = choices.map((choice) => (
		<Role
			img={choice.img}
			role={choice.role}
			desc={choice.desc}
			alt={choice.alt}
			key={choice.id}
		/>
	));

	return (
		<section
			id='choose-role'
			className='grid min-h-screen place-items-center bg-[hsl(227, 79%, 59%, 0.1);
			] p-3.5'
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
				<h2 className='text-darkgray font-semibold text-xl'>
					Choose your Role
				</h2>
				<p className='text-lightgray'>
					To be registered, select the roles that best suit your individual
					requirements
				</p>
			</div>
			<Form className='grid gap-2'>
				{roles}

				<Button className='bg-darkblue hover:bg-blue transition text-white p-2.5 outline-offset-2 outline-blue'>
					Sign up
				</Button>
			</Form>
			<div className='flex gap-2 text-sm mb-5'>
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
