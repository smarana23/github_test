import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesDropdown = [
    // { name: 'Our Services', path: '/services' },
    { name: 'Academic Excellence', path: '/services/academic-excellence' },
    { name: 'Campus Recruitment', path: '/services/campus-recruitment' },
    { name: 'Certifications', path: '/services/certifications' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'ERP Software', path: '/services/erp-software' },
    { name: 'IT Staffing', path: '/services/it-staffing' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Payroll Management', path: '/services/payroll-management' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Web Development', path: '/services/web-development' }
  ];

  const companyDropdown = [
    { name: 'About Us', path: '/company', scrollTo: 'about-us' },
    { name: 'How We Work', path: '/company', scrollTo: 'how-we-work' },
    { name: 'Why Choose Us', path: '/company', scrollTo: 'why-choose-us' },
    { name: 'Our Team', path: '/company', scrollTo: 'our-team' },
    // { name: 'Our CEO', path: '/ceo-founder' }
  ];

  const handleDropdownItemClick = (item) => {
    if (item.scrollTo && item.path === '/company') {
      navigate('/company', { state: { scrollTo: item.scrollTo } });
    } else {
      navigate(item.path);
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="RDR Software Solutions" className="h-10" />
          <span className={`ml-2 text-xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}>
            RDR Software Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                  relative font-medium transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                  ${scrolled 
                    ? (isActive ? 'text-secondary after:bg-secondary' : 'text-dark hover:text-secondary') 
                    : (isActive ? 'text-white after:bg-white' : 'text-white/90 hover:text-white')}
                `}
              >
                Home
              </NavLink>
            </li>
            {/* Services Dropdown */}
            <li className="relative">
              <Menu>
                {({ open }) => (
                  <>
                    <div className="flex items-center">
                      <Link
                        to="/services"
                        className={`
                          font-medium transition-colors duration-300
                          ${scrolled 
                            ? 'text-dark hover:text-secondary' 
                            : 'text-white/90 hover:text-white'}
                        `}
                      >
                        Services
                      </Link>
                      <Menu.Button className={`
                        ml-1 flex items-center focus:outline-none
                        ${scrolled 
                          ? 'text-dark hover:text-secondary' 
                          : 'text-white/90 hover:text-white'}
                      `}>
                        <ChevronDownIcon 
                          className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
                        />
                      </Menu.Button>
                    </div>
                    <AnimatePresence>
                      {open && (
                        <Menu.Items
                          as={motion.div}
                          static
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 mt-2 w-64 left-0 bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2"
                        >
                          <div className="py-1">
                          <Link
                              to="/services"
                              className="block px-4 py-2 text-sm font-semibold text-secondary border-b hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              OUR SERVICES
                            </Link>
                            {servicesDropdown.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.path}
                                    className={`
                                      block px-4 py-2 text-sm transition-colors
                                      ${active ? 'bg-primary-50 text-primary' : 'text-dark'}
                                    `}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Menu>
            </li>
            {/* Company Dropdown - similar structure to Services */}
            <li className="relative">
              <Menu>
                {({ open }) => (
                  <>
                    <div className="flex items-center">
                      <Link
                        to="/company"
                        className={`
                          font-medium transition-colors duration-300
                          ${scrolled 
                            ? 'text-dark hover:text-secondary' 
                            : 'text-white/90 hover:text-white'}
                        `}
                      >
                        Company
                      </Link>
                      <Menu.Button className={`
                        ml-1 flex items-center focus:outline-none
                        ${scrolled 
                          ? 'text-dark hover:text-secondary' 
                          : 'text-white/90 hover:text-white'}
                      `}>
                        <ChevronDownIcon 
                          className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
                        />
                      </Menu.Button>
                    </div>
                    <AnimatePresence>
                      {open && (
                        <Menu.Items
                          as={motion.div}
                          static
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 mt-2 w-64 left-0 bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2"
                        >
                          <div className="py-1">
                            <Link
                              to="/ceo-founder"
                              className="block px-4 py-2 text-sm font-semibold text-secondary border-b hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              OUR CEO
                            </Link>
                            {companyDropdown.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <button
                                    onClick={() => handleDropdownItemClick(item)}
                                    className={`
                                      block w-full text-left px-4 py-2 text-sm transition-colors
                                      ${active ? 'bg-primary-50 text-primary' : 'text-dark'}
                                    `}
                                  >
                                    {item.name}
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Menu>
            </li>
            <li>
              <NavLink
                to="/careers"
                className={({ isActive }) => `
                  relative font-medium transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                  ${scrolled 
                    ? (isActive ? 'text-secondary after:bg-secondary' : 'text-dark hover:text-secondary') 
                    : (isActive ? 'text-white after:bg-white' : 'text-white/90 hover:text-white')}
                `}
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  relative font-medium transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                  ${scrolled 
                    ? (isActive ? 'text-secondary after:bg-secondary' : 'text-dark hover:text-secondary') 
                    : (isActive ? 'text-white after:bg-white' : 'text-white/90 hover:text-white')}
                `}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link
                to="/contact"
                className="btn btn-primary ml-4"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen 
            ? <XMarkIcon className={`w-6 h-6 ${scrolled ? 'text-dark' : 'text-white'}`} /> 
            : <Bars3Icon className={`w-6 h-6 ${scrolled ? 'text-dark' : 'text-white'}`} />
          }
        </button>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 lg:hidden bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <img src="/logo.svg" alt="RDR Software Solutions" className="h-8" />
                    <span className="ml-2 text-lg font-bold text-primary">RDR Software Solutions</span>
                  </Link>
                  <button onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="w-6 h-6 text-dark" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <Link 
                          to="/" 
                          className="block py-2 text-lg font-medium text-dark hover:text-secondary"
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <div className="flex justify-between items-center">
                          <Link 
                            to="/services" 
                            className="block py-2 text-lg font-medium text-dark hover:text-secondary"
                            onClick={() => setIsOpen(false)}
                          >
                            Services
                          </Link>
                          <button 
                            className="p-2 text-dark hover:text-secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              const servicesSubmenu = e.currentTarget.closest('li').querySelector('ul');
                              servicesSubmenu.classList.toggle('hidden');
                            }}
                          >
                            <ChevronDownIcon className="w-5 h-5" />
                          </button>
                        </div>
                        <ul className="pl-4 mt-2 space-y-2 hidden">
                          {servicesDropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                className="block py-1 text-dark/80 hover:text-secondary"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="flex justify-between items-center">
                          <Link 
                            to="/company"
                            className="block py-2 text-lg font-medium text-dark hover:text-secondary"
                            onClick={() => setIsOpen(false)}
                          >
                            Company
                          </Link>
                          <button 
                            className="p-2 text-dark hover:text-secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              const companySubmenu = e.currentTarget.closest('li').querySelector('ul');
                              companySubmenu.classList.toggle('hidden');
                            }}
                          >
                            <ChevronDownIcon className="w-5 h-5" />
                          </button>
                        </div>
                        <ul className="pl-4 mt-2 space-y-2 hidden">
                          <li>
                            <Link 
                              to="/ceo-founder"
                              className="block py-1 font-medium text-primary-600 hover:text-primary-800"
                              onClick={() => setIsOpen(false)}
                            >
                              Our CEO
                            </Link>
                          </li>
                          {companyDropdown.map((item) => (
                            <li key={item.name}>
                              <button
                                onClick={() => handleDropdownItemClick(item)}
                                className="block w-full text-left py-1 text-dark/80 hover:text-secondary"
                              >
                                {item.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link 
                          to="/careers" 
                          className="block py-2 text-lg font-medium text-dark hover:text-secondary"
                          onClick={() => setIsOpen(false)}
                        >
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/contact" 
                          className="block py-2 text-lg font-medium text-dark hover:text-secondary"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="p-4 border-t">
                  <Link
                    to="/contact"
                    className="block w-full py-3 text-center text-white bg-secondary rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;