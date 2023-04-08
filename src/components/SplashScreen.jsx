import Logo from "./ui/Logo";

const SplashScreen = () => {
   return (
      <section className='grid min-h-screen place-content-center bg-splash'>
         <Logo />
         <h1 className='text-blue text-3xl font-bold'>NearByLife</h1>
      </section>
   );
};

export default SplashScreen;
