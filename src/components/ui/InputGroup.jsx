import Button from "./Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const InputGroup = (props) => {
   return (
      <div className='relative'>
         <input
            type={props.type}
            id={props.id}
            className={`peer w-full bg-white placeholder:text-main-txt/40 transition outline-transparent border-0 border-b-splash  border-b-[1px] focus:border-0 ${props.className}`}
            name={props.name}
            placeholder={props.placeholder}
            autoComplete='off'
         />
         <label
            htmlFor={props.for}
            className={`bg-white px-0.5 text-main-txt/40 peer-focus:text-blue font-semibold text-sm absolute -top-3.5 left-2 peer-placeholder-shown:scale-x-0  peer-focus:scale-1 peer-focus:origin-left transition-all`}
         >
            {props.label}
         </label>
         {props.type === props.show && (
            <Button
               onClick={() => props.onToggle()}
               type='button'
               className='flex max-w-fit absolute right-2 top-1/3 bg-white outline-blue outline-offset-2'
            >
               <span className="sr-only">password toggle</span>
               {props.isVisible ? (
                  <FaEye className='hover:fill-blue' />
               ) : (
                  <FaEyeSlash className='hover:fill-blue' />
               )}
            </Button>
         )}
      </div>
   );
};

export default InputGroup;
