import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            At Evogem we promise to give you the dream body that you want, and
            our trainers are ready to work with you every step of the way till
            you achieve your goals.
          </p>
          <p>c Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0"> 
        <h4 className="font-bold">Links</h4>
        <p className="my-5"> Massa orci senectus</p>
        <p className="my-5"> Et gravida id et etiam</p>
        <p> Ullamcorper Vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0"> 
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5"> Our Address is at Infinity Estate Addo road Ajah</p>
        <p className="my-5"> Et gravida id et etiam</p>
        <p> (+234)746-0479</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
