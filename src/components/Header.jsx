import React from 'react';
import headimg from '../assets/header.svg';

const Header = () => {
  const links = [
    { name: 'Success Stories', href: '#' },
    { name: 'Course Features', href: '#' },
    { name: 'Why Trust Leap?', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  // Subcomponent: Logo
  const Logo = () => (
    <div className="flex items-center space-x-2 ">
      <img src={headimg} alt="Logo" className="h-10" />
     
    </div>
  );

  // Subcomponent: NavLinks
  const NavLinks = () => (
    <nav className="hidden md:flex items-center space-x-6 ">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          {link.name}
        </a>
      ))}
      <a
        href="#"
        className="ml-4 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors font-medium"
      >
        SAT Brochure
      </a>
    </nav>
  );

  // Subcomponent: MobileMenuButton
  const MobileMenuButton = () => (
    <button className="md:hidden text-gray-700">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <NavLinks />
          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
