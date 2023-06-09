import Image from "next/image";
import BrandLogo from "../../../public/images/brandlogo.png";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export interface iNavLink {
  name: string;
  url: string;
}

export const NavLinks: iNavLink[] = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Courses",
    url: "#",
  },
  {
    name: "Testimonial",
    url: "#",
  },
  {
    name: "Community",
    url: "#",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex align-middle justify-between px-4 md:px-24 h-[87px] flex-row w-full md:h-[150px] bg-transparent top-0">
      <Image src={BrandLogo} alt={"Techtime logo"} className={"h-8 w-20 md:w-auto md:h-14 my-auto"} />
      <Desktop navLinks={NavLinks} />
      <Mobile navLinks={NavLinks} />
    </nav>
  );
};
