import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Mission', href: '#mission' },
        { name: 'Protocols', href: '#protocols' },
        { name: 'Inventions', href: '#inventions' },
        { name: 'Hire Me', href: '#hire-me' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4 rounded-2xl bg-midnight-pine/80 backdrop-blur-xl border border-white/10 shadow-lg relative">

                {/* Logo */}
                <div className="flex items-center gap-2 text-snow-drift font-berkshire text-2xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Snowflake className="text-tech-gold" />
                    <span>Tinker.dev</span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 items-center font-outfit text-glacial-mist">
                    {links.map((link) => (
                        <li key={link.name} className="relative group cursor-pointer hover:text-snow-drift transition-colors">
                            <a href={link.href}>{link.name}</a>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-gold transition-all group-hover:w-full" />
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden text-snow-drift cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full mt-2 p-4 bg-midnight-pine/95 border border-white/10 rounded-2xl shadow-xl flex flex-col gap-4 md:hidden"
                        >
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-glacial-mist hover:text-tech-gold text-center py-2 font-bold font-outfit"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
