import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code, Wrench, X } from 'lucide-react';
import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';

const Hero = () => {
    const [showGiftPopup, setShowGiftPopup] = useState(false);
    const [isDrumrolling, setIsDrumrolling] = useState(false);
    const audioRef = useRef(null);

    const handleGiftClick = () => {
        if (isDrumrolling || showGiftPopup) return;

        setIsDrumrolling(true);

        // Play drumroll sound if available (fallback to visual only if missing)
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed or file missing):", e));
        }

        // Trigger confetti rapidly during drumroll
        const drumrollInterval = setInterval(() => {
            confetti({
                particleCount: 5,
                spread: 30,
                origin: { x: 0.5, y: 0.6 },
                colors: ['#F4D35E', '#E63946'],
                ticks: 50,
                gravity: 2
            });
        }, 200);

        setTimeout(() => {
            clearInterval(drumrollInterval);
            setIsDrumrolling(false);
            setShowGiftPopup(true);

            // BIG CONFETTI EXPLOSION
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#F4D35E', '#E63946', '#ffffff']
            });

        }, 4000); // 4 seconds delay
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">

            {/* Sound Effect File - Placeholder */}
            <audio ref={audioRef} src="/src/assets/drumroll-opening.mp3" preload="auto" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="text-center md:text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-workshop-slate border border-tech-gold/30 text-tech-gold text-sm font-mono"
                    >
                        <Sparkles size={14} />
                        <span>North Pole Station 4</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        className="text-5xl md:text-7xl font-berkshire leading-tight text-snow-drift"
                    >
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-gold to-orange-400">
                            Toys of Tomorrow
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-glacial-mist text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-light"
                    >
                        Hi, I'm <span className="text-snow-drift font-semibold">Tinker</span>.
                        I bridge the gap between Elf Magic and Modern Automation.
                        Optimizing joy at scale.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="#protocols" className="px-8 py-3 bg-candy-red hover:bg-red-500 text-white rounded-lg font-bold shadow-[0_0_15px_rgba(230,57,70,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2">
                            <Code size={20} />
                            View Protocols
                        </a>
                        <a href="#inventions" className="px-8 py-3 border border-tech-gold text-tech-gold rounded-lg font-bold hover:bg-tech-gold/10 transition-all flex items-center justify-center gap-2">
                            <Wrench size={20} />
                            My Inventions
                        </a>
                    </motion.div>
                </div>

                {/* Right Visual (Holographic Toy) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Glowing Orb / Holo Effect */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 border-2 border-dashed border-tech-gold/30 rounded-full transition-all duration-300 ${isDrumrolling ? 'scale-110 border-candy-red' : ''}`}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-4 border border-aurora-green/30 rounded-full transition-all duration-300 ${isDrumrolling ? 'scale-90 border-candy-red' : ''}`}
                        />

                        {/* Center Visual - Interactive Gift */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                animate={isDrumrolling ? {
                                    x: [0, -5, 5, -5, 5, 0],
                                    transition: { duration: 0.5, repeat: Infinity }
                                } : {}}
                                className="w-32 h-32 bg-gradient-to-br from-tech-gold to-candy-red rounded-xl shadow-[0_0_50px_rgba(244,211,94,0.4)] flex items-center justify-center transform rotate-12 backdrop-blur-md bg-opacity-80 border border-white/20 cursor-pointer z-20 group relative"
                                onClick={handleGiftClick}
                            >
                                <span className="text-6xl select-none">🎁</span>

                                {/* Cloud Dialog Tooltip */}
                                {!isDrumrolling && !showGiftPopup && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 1.5, type: "spring" }}
                                        className="absolute -top-14 -right-12 bg-white text-midnight-pine text-xs font-bold px-4 py-2 rounded-2xl rounded-bl-none shadow-xl whitespace-nowrap z-30 pointer-events-none"
                                    >
                                        Psst... Click me! ✨
                                        <div className="absolute -bottom-2 left-2 w-4 h-4 bg-white transform rotate-45" />
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>

                        {/* Floating particles */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 right-0 bg-workshop-slate p-3 rounded-lg border border-aurora-green/50 shadow-lg text-aurora-green text-xs font-mono"
                        >
                            Efficiency: 104%
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 left-0 bg-workshop-slate p-3 rounded-lg border border-candy-red/50 shadow-lg text-candy-red text-xs font-mono"
                        >
                            Spirit: High
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Surprise Popup Modal */}
            <AnimatePresence>
                {showGiftPopup && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setShowGiftPopup(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="bg-workshop-slate border-4 border-tech-gold p-8 rounded-3xl shadow-[0_0_100px_rgba(244,211,94,0.6)] relative max-w-md m-4 text-center pointer-events-auto"
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-8xl">🎉</div>
                            <button
                                onClick={() => setShowGiftPopup(false)}
                                className="absolute top-2 right-2 text-glacial-mist hover:text-white p-2"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-4xl font-berkshire text-tech-gold mt-8 mb-4">It's a Match!</h2>
                            <p className="text-xl text-snow-drift leading-relaxed mb-6">
                                You need an Elf with <span className="text-candy-red font-bold">Holiday Spirit</span> and <span className="text-aurora-green font-bold">React Skills</span>?
                            </p>
                            <p className="text-lg text-glacial-mist italic mb-8">
                                "I'm the one who knocks... on your Chimney!"
                            </p>

                            <a href="#hire-me" onClick={() => setShowGiftPopup(false)} className="inline-block px-8 py-3 bg-candy-red hover:bg-red-500 text-white rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                                Hire Me Now! 🚀
                            </a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Hero;
