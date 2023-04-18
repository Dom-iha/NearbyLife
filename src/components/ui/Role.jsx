import { useState } from "react";

const Role = (props) => {
	const [isChecked, handleIsChecked] = useState(false)

	const handleChange = () => {
		handleIsChecked(prevState => !prevState)
	}
	

	return (
		<div>
			<input
				id={props.id}
				name='role'
				type='checkbox'
				className='peer appearance-none scale-0 sr-only'
				onChange={handleChange}
				checked={isChecked}
			/>
			<label
				htmlFor={props.id}
				className='role grid gap-x-3 shadow-sm peer-checked:bg-paleblue peer-checked:text-white rounded-md bg-white p-3 transition'
			>
				<img
					src={props.img}
					alt={props.alt}
					className='rounded-full w-8 h-8 self-center'
				/>
				<h3 className={`${!isChecked ? 'text-deepblue' : ''} text-[0.875rem]  font-semibold`}>
					{props.name}
				</h3>
				<p className=' text-sm'>{props.desc}</p>
			</label>
		</div>
	);
};

export default Role;
