const Button = ({ onClick, className, children, type }) => {
   return (
      <button className={`cursor-pointer rounded-md font-semibold ${className}`} type={type} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
