const Footer = () => {
  return (
    <footer className="font-lora bg-btnColor text-white mt-10 py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-start">
        {/* About Section */}
        <div className="">
          <h3 className="text-md md:text-xl font-semibold mb-3">About Us</h3>
          <p className="w-full md:w-2/3 text-sm leading-relaxed">
            Empowering individuals to achieve their career goals. We provide
            expert advice, tailored guidance, and tools to pave the way for your
            success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md md:text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="text-sm hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/articles" className="text-sm hover:underline">
                Articles
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-md md:text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm leading-relaxed">
            Have questions? Reach out to us:
          </p>
          <p className="mt-3">
            <a
              href="mailto:career.advisory@example.com"
              className="text-navColor hover:underline"
            >
              thecareeradvisory@gmail.com
            </a>
          </p>
          <p className="mt-1">
            <a href="tel:+1234567890" className="text-navColor hover:underline">
              +123 456 7890
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Career Advisory. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
