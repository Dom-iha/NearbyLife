import { useContext } from "react";
import Button from "./Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

const InputGroup = (props) => {
   const passCtx = useContext(AuthContext)

   return (
      <div className='relative'>
         <input
            type={props.type}
            id={props.id}
            className={`peer w-full bg-white placeholder:text-lightgray transition outline-transparent focus:border-darkblue border-0 border-b-splash  border-b-[1px] focus:border-0 ${props.className}`}
            name={props.name}
            placeholder={props.placeholder}
            autoComplete='off'
         />
         <label
            htmlFor={props.for}
            className={`bg-white px-0.5 text-gray peer-focus:text-darkblue font-semibold text-sm absolute -top-3.5 left-2 peer-placeholder-shown:scale-x-0  peer-focus:scale-1 peer-focus:origin-left transition-all`}
         >
            {props.label}
         </label>
         {props.type === props.show && (
            <Button
               onClick={() => passCtx.toggle()}
               type='button'
               className='flex max-w-fit absolute right-2 top-1/3 bg-white outline-blue outline-offset-2'
            >
               <span className="sr-only">toggle password visibility</span>
               {passCtx.showPassword ? (
                  <FaEye className='hover:fill-blue fill-gray' />
               ) : (
                  <FaEyeSlash className='hover:fill-blue fill-gray' />
               )}
            </Button>
         )}
      </div>
   );
};

export default InputGroup;
