import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <p>&copy; 2025 Student Management System. All rights reserved.</p>
        <div className="flex space-x-4">
         <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <a href="/contact" className="text-sm hover:underline">
            Contact
          </a>
          <a href="/privacy" className="text-sm hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
