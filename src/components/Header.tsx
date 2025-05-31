import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent md:bg-[#f2f2f2] transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="relative z-20">
            <img 
              src="/imgs/Logo.png" 
              alt="YannsTechHub Logo" 
              className="h-8 md:h-10"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="relative z-20 p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            md:flex md:items-center md:space-x-8
          `}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 p-6 md:p-0 space-y-4 md:space-y-0">
              <Link 
                to="/daily-deals" 
                className="text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Daily deals
              </Link>
              <Link 
                to="/shop" 
                className="text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/bundle-deals" 
                className="text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bundle Deals
              </Link>
              <Link 
                to="/support" 
                className="text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:opacity-75 transition-opacity">
              <img src="/imgs/Search - 7.png" alt="Search" className="w-6 h-6" />
            </button>
            <Link to="/login" className="hover:opacity-75 transition-opacity">
              <img src="/imgs/Profile - 3.png" alt="User Account" className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="relative hover:opacity-75 transition-opacity">
              <img src="/imgs/cart.png" alt="Shopping Cart" className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile User Actions (shown in menu) */}
          <div className={`
            fixed md:hidden top-20 right-0 bg-white w-64 p-6
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col space-y-4">
              <button className="flex items-center space-x-3 hover:text-primary transition-colors">
                <img src="/imgs/Search - 7.png" alt="Search" className="w-6 h-6" />
                <span>Search</span>
              </button>
              <Link 
                to="/login" 
                className="flex items-center space-x-3 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src="/imgs/Profile - 3.png" alt="User Account" className="w-6 h-6" />
                <span>Account</span>
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center space-x-3 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative">
                  <img src="/imgs/cart.png" alt="Shopping Cart" className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;