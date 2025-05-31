import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Hero Image - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2 bg-[#182126] rounded-l-2xl p-12">
            <img 
              src="/imgs/sign-up.png" 
              alt="Signup hero" 
              className="w-full h-auto object-cover"
              loading="lazy" 
            />
          </div>

          {/* Signup Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl p-8 md:p-12">
            <h1 className="text-2xl font-bold text-center mb-8">Create a new Account</h1>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#f7f7fa] p-3 rounded text-sm focus:outline-none"
                />

                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-[#f7f7fa] p-3 rounded text-sm focus:outline-none"
                />

                <div className="bg-[#f7f7fa] flex items-center gap-4 p-3 rounded">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="bg-transparent w-full text-sm focus:outline-none"
                  />
                  <img src="/imgs/User.png" alt="" className="w-5 h-5" />
                </div>
                <p className="text-xs text-[#423eff] ml-2">*Can't change username</p>

                <div className="bg-[#f7f7fa] flex items-center gap-4 p-3 rounded">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent w-full text-sm focus:outline-none"
                  />
                  <img src="/imgs/Gmail.png" alt="" className="w-5 h-5" />
                </div>

                <div className="bg-[#f7f7fa] flex items-center gap-4 p-3 rounded">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-transparent w-full text-sm focus:outline-none"
                  />
                  <img src="/imgs/Lock.png" alt="" className="w-5 h-5" />
                </div>

                <div className="bg-[#f7f7fa] flex items-center gap-4 p-3 rounded">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="bg-transparent w-full text-sm focus:outline-none"
                  />
                  <img src="/imgs/Lock.png" alt="" className="w-5 h-5" />
                </div>
              </div>

              <Link 
                to="/login" 
                className="block w-full bg-black text-white rounded-full py-3 font-bold text-center hover:bg-black/90 transition-colors"
              >
                Get Started
              </Link>

              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="text-center">
                <p className="text-sm mb-4">Create account with</p>
                <div className="flex justify-center gap-4">
                  <button className="p-2 hover:opacity-80 transition-opacity">
                    <img src="/imgs/Google.png" alt="Google signup" className="w-8 h-8" />
                  </button>
                  <button className="p-2 hover:opacity-80 transition-opacity">
                    <img src="/imgs/Apple.png" alt="Apple signup" className="w-8 h-8" />
                  </button>
                </div>
              </div>

              <p className="text-center text-sm mt-6">
                Already have an account? {' '}
                <Link to="/login" className="text-[#423eff] hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;