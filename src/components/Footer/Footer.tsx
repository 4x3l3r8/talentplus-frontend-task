import React from "react";
import BrandLogo from "../../../public/images/brandlogo.png";
import Image from "next/image";
import { NavLinks } from "../Navbar";
import { Button } from "../shared";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#000F24] py-4 md:py-24 text-white">
      <div className="w-5/6 md:gap-5 mx-auto bg-transparent flex flex-col md:flex-row">
        <div className="flex-1">
          <Image src={BrandLogo} alt={"Techtime logo"} className={"h-8 w-20 md:w-auto md:h-14 my-auto"} />
          <span className="capitalize text-base">reach out to us on any of our social media networks</span>
          <div className="flex mt-4 text-3xl justify-between w-5/6">
            <FaFacebook cursor={"pointer"} />
            <FaTwitter cursor={"pointer"} />
            <FaYoutube cursor={"pointer"} />
            <FaInstagram cursor={"pointer"} />
            <FaDiscord cursor={"pointer"} />
          </div>
        </div>
        <div className="flex flex-1 flex-col text-left">
          <span className="font-clash text-3xl font-semibold pb-8">Useful Links</span>
          {NavLinks.map((link, i) => (
            <Button color="link" size="lg" className="text-left font-normal pl-0" key={i}>
              {link.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-1 flex-col text-left">
          <span className="font-clash text-3xl font-semibold pb-8">Community</span>
          <Button color="link" size="lg" className="text-left font-normal pl-0">
            Help Centers
          </Button>
          <Button color="link" size="lg" className="text-left font-normal pl-0">
            Partners
          </Button>
          <Button color="link" size="lg" className="text-left font-normal pl-0">
            Suggestions
          </Button>
          <Button color="link" size="lg" className="text-left font-normal pl-0">
            Blog
          </Button>
          <Button color="link" size="lg" className="text-left font-normal pl-0">
            Newsletter
          </Button>
        </div>
        <div className="flex flex-[1] flex-col">
          <span className="font-clash text-3xl font-semibold pb-8">Subscribe Us</span>
          <div className="flex w-full">
            <input type="text" className="h-14 flex-1 border-2 border-brand-500 bg-[#2a2a2b]" name="" id="" />
            <Button color="primary" size="lg" className="rounded-none">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
