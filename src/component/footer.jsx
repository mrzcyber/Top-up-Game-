import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className=" bg-main w-full border-t-2 border-gray-500/90  ">
        
        <div className="   flex md:flex-row flex-col ">
          <div className="flex  flex-col md:w-4xs pr-16 md:pl-64 ml-10">
            <Image src={`/logo3.png`} width={100} height={100} alt="logo" />
            <p className="font-semibold text-white md:w-80 whitespace-normal break-words text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
              quod iure! Excepturi, tempore? Sint voluptate dolores quisquam aut
              rem quidem ex in quae fugit velit eum, voluptates at enim esse
              dolorum itaque error sed aliquam ipsam mollitia voluptatibus
              necessitatibus possimus doloribus. Consequuntur excepturi illo
              dolor accusantium accusamus praesentium quas
            </p>
            <div className="flex flex-row gap-2 pt-2">
              <a href={`/whatsapp`}>
                <IoLogoWhatsapp
                  size={30}
                  className="text-green-600 hover:text-green-600/50 "
                />
              </a>
              <a>
                <IoLogoInstagram
                  size={30}
                  className="text-orange-600 hover:text-orange-600/50 "
                />
              </a>
              <a>
                <IoLogoTiktok
                  size={30}
                  className="text-black hover:text-black/90 p-1 text-shadow-lg bg-white rounded-2xl hover:bg-white/50"
                />
              </a>
            </div>
          </div>
          <div className="p-10 flex flex-wrap md:gap-20 gap-10 mt-8  ">
            <div className="text-white flex flex-col gap-4 ">
              <h1 className=" text-xl md:text-2xl  font-bold text-amber-600 hover:text-amber-600/90 ">
                Side Map
              </h1>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-15">
                Home              </a>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-20">
                Account
              </a>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-full">
                Leadherboard
              </a>
            </div>
            <div className="text-white flex flex-col gap-4 ">
              <h1 className="text-xl md:text-2xl font-bold text-amber-600 hover:text-amber-600/90 ">
                Support
              </h1>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-full">
                Whatsapp
              </a>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-15">
                Email
              </a>
            </div>
            <div className=" text-white flex flex-col gap-4 ">
              <h1 className="text-xl md:text-2xl font-bold text-amber-600 hover:text-amber-600/90 ">
                Legalitas
              </h1>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-28">
                Privasi Policy
              </a>
              <a className="  cursor-pointer text-md md:text-xl font-semibold hover:text-amber-500  after:content-[''] after:block  after:border-b-2 after:w-0 after:bg-amber-500 after:border-amber-500  after:transition-all after:duration-500 after:linear hover:after:w-full">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>

        <div className="md:px-65 ">
          <p className="border-t-4 border-gray-400/90 pt-10 pb-10 text-center mt-10 text-white text-2xl font-semibold">
            Reza Topup by Reza © 2025.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
