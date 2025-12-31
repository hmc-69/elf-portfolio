import { motion } from 'framer-motion';
import { Sparkles, Code, Wrench } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
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
                            className="absolute inset-0 border-2 border-dashed border-tech-gold/30 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border border-aurora-green/30 rounded-full"
                        />

                        {/* Center Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-tech-gold to-candy-red rounded-xl shadow-[0_0_50px_rgba(244,211,94,0.4)] flex items-center justify-center transform rotate-12 backdrop-blur-md bg-opacity-80 border border-white/20">
                                <span className="text-6xl">🎁</span>
                            </div>
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
        </section>
    );
};

export default Hero;
