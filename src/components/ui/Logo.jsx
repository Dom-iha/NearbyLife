import logo from "../../assets/nearbylife.svg";

const Logo = ({className}) => {
   return (
      <img src={logo} alt='nearby life logo' className={`justify-self-center ${className}`}/>
   );
};

export default Logo;
