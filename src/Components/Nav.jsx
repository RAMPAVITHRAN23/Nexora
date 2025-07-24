import React, { useState } from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="shadow-lg bg-white rounded-lg relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center p-1 gap-4 rounded-">

                {/* Logo */}
                <div className="flex justify-center p-2 gap-4 cursor-pointer">
                    <img src={assets.logos} alt="Logo" className="h-10 rounded-20" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex justify-center gap-12">
                    <ul className="flex flex-row text-lg font-semibold gap-6">
                        <li><a href="#" className="hover:text-orange-600 px-4 py-2 transition-all">Home</a></li>
                        <li><a href="#" className="hover:text-orange-600 px-4 py-2 transition-all">About</a></li>
                        <li><a href="#" className="hover:text-orange-600 px-4 py-2 transition-all">Services</a></li>
                        <li><a href="#" className="hover:text-orange-600 px-4 py-2 transition-all">Contact</a></li>
                    </ul>
                </div>

                {/* Icons + Hamburger */}
                <div className="flex justify-center gap-4">
                    <button onClick={() => navigate("/search")} className="hover:bg-orange-600 rounded-full p-2">
                        <Search />
                    </button>
                    <button onClick={() => navigate("/shopping-cart")} className="hover:bg-orange-600 rounded-full p-2">
                        <ShoppingCart />
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-orange-600"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-orange-500 text-white text-center py-6 rounded-xl mx-4 mt-2 shadow-md">
                    <ul className="space-y-4 text-lg font-semibold">
                        <li>
                            <button onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="hover:underline">
                                HOME
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="hover:underline">
                                ABOUT
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { navigate('/service'); setIsMenuOpen(false); }} className="hover:underline">
                                SERVICE
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="hover:underline">
                                CONTACT
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
