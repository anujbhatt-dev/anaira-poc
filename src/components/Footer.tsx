import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-[80vh] flex flex-col justify-center py-16 bg-zinc-950">
      <div className="container mx-auto text-center">
        <p className="text-3xl font-semibold mb-6">&copy; {new Date().getFullYear()} Anaira Clothing. All rights reserved.</p>
        <div className="space-y-6">
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service">
            Terms of Service
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
