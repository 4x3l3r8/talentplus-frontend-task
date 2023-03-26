import { Button } from "../shared";
import { iNavLink } from "./Navbar";

export const Desktop: React.FC<{ navLinks: iNavLink[] }> = ({ navLinks }) => {
  return (
    <div className="hidden md:flex">
      {navLinks.map((link, i) => (
        <Button size="md" className="my-auto text-gray-300" color="link" key={i}>
          {link.name}
        </Button>
      ))}
      <Button className="my-auto" color="white" size="lg">
        Enroll Now
      </Button>
    </div>
  );
};
