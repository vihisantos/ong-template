import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Início', href: '/' },
        { name: 'Sobre', href: '/about' },
        { name: 'Projetos', href: '/projects' },
        { name: 'Doe', href: '/donate' },
    ];

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm py-5 transition-all duration-300 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="font-heading font-bold text-2xl tracking-tight text-brand-dark transition-colors">
                    LoveFlow
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium tracking-wide transition-colors hover:text-brand-accent text-brand-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/donate" className="bg-brand-accent hover:bg-rose-600 text-white px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 hover:shadow-xl flex items-center gap-2 animate-pulse-slow">
                        Doar Agora <Heart size={16} fill="currentColor" />
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="text-brand-dark" /> : <Menu className="text-brand-dark" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-down">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="font-heading text-3xl text-brand-dark hover:text-brand-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/donate" onClick={() => setIsOpen(false)} className="bg-brand-accent text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center gap-3">
                        Doar Agora <Heart size={20} fill="currentColor" />
                    </Link>
                </div>
            )}
        </header>
    );
};
