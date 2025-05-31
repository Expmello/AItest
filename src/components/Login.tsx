import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
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
              alt="Login hero" 
              className="w-full h-auto object-cover"
              loading="lazy" 
            />
          </div>

          {/* Login Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl p-8 md:p-12">
            <h1 className="text-2xl font-bold text-center mb-8">Log In</h1>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="bg-[#f7f7fa] flex items-center gap-4 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-transparent w-full text-sm focus:outline-none"
                  />
                  <img src="/imgs/User.png" alt="" className="w-5 h-5" />
                </div>

                <div className="bg-[#f7f7fa] flex items-center gap-4 p-3 rounded">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent w-full text-sm focus:outline-none"
                  />
                  <img src="/imgs/Lock.png" alt="" className="w-5 h-5" />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white rounded-full py-3 font-bold hover:bg-black/90 transition-colors"
              >
                Submit
              </button>

              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="text-center">
                <p className="text-sm mb-4">Log in with</p>
                <div className="flex justify-center gap-4">
                  <button className="p-2 hover:opacity-80 transition-opacity">
                    <img src="/imgs/Google.png" alt="Google login" className="w-8 h-8" />
                  </button>
                  <button className="p-2 hover:opacity-80 transition-opacity">
                    <img src="/imgs/Apple.png" alt="Apple login" className="w-8 h-8" />
                  </button>
                </div>
              </div>

              <p className="text-center text-sm mt-6">
                Don't have an account? {' '}
                <Link to="/signup" className="text-[#423eff] hover:underline">
                  Sign up
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

export default Login;