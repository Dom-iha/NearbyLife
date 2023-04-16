import { Label } from '@headlessui/react/dist/components/label/label';

const Role = (props) => {
	return (
		<>
			<input id='role' name='role' type='checkbox' className='peer appearance-none scale-0' />
			<label htmlFor='role' className='role grid gap-3 peer-checked:bg-paleblue'>
				<img
					src={props.img}
					alt={props.alt}
					className='rounded-full w-8 h-8'
				/>
				<h3>{props.role}</h3>
				<p>{props.desc}</p>
			</label>
		</>
	);
};

export default Role;
