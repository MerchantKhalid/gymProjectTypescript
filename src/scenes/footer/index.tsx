import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-contant mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo image" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos
            voluptatum dolor? Quo est illum libero quasi ipsam? Aperiam ipsa ad
            ipsam officia labore inventore.
          </p>
          <p className="">&copy;2023 All rights reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Mohammad Khalid Hasan</p>
          <p className="my-5">Lilima Akther</p>
          <p>Fitness World.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">194 Rua Santareno Bernardo</p>
          <p className="my-5">Porto,Portugal </p>
          <p>+351920102458</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
