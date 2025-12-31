
import { motion } from 'framer-motion';
import { Cpu, Wand2 } from 'lucide-react';
import elfImage from '../assets/elf_vr_profile_1767185891336.png';

const About = () => {
    return (
        <section id="mission" className="py-20 bg-midnight-pine relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-tech-gold to-aurora-green rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative rounded-2xl overflow-hidden border-2 border-workshop-slate shadow-2xl bg-workshop-slate/50 hover:scale-[1.02] transition-transform duration-500">
                        <img src={elfImage} alt="Elf with VR Goggles" className="w-full h-full object-cover" />
                        {/* Tech overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md border-t border-white/10 flex justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                                <span className="text-xs font-mono text-aurora-green">SYSTEM: ONLINE</span>
                            </div>
                            <span className="text-xs font-mono text-glacial-mist">ID: T-9000</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-berkshire mb-4">
                            <span className="text-snow-drift">From </span>
                            <span className="text-candy-red">Magic </span>
                            <span className="text-snow-drift">to </span>
                            <span className="text-tech-gold">Machine</span>
                        </h2>

                        <p className="text-lg text-glacial-mist leading-relaxed mb-6 font-light">
                            For centuries, the North Pole operated on <b className="text-snow-drift">Stardust v1.0</b>. It was charming, but hardly scalable for 8 billion children.
                        </p>
                        <p className="text-lg text-glacial-mist leading-relaxed mb-6 font-light">
                            I joined the Workshop Innovation Team to change that. By fusing ancient elven craftsmanship with modern automation, I build systems that keep the spirit alive while ensuring 99.99% delivery uptime.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="p-4 rounded-xl bg-workshop-slate/50 border border-white/5 hover:border-tech-gold/30 transition-colors">
                            <Wand2 className="text-aurora-green mb-2" size={24} />
                            <h4 className="text-snow-drift font-outfit font-bold">Creative Soul</h4>
                            <p className="text-sm text-glacial-mist mt-1">Design that sparks joy.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-workshop-slate/50 border border-white/5 hover:border-candy-red/30 transition-colors">
                            <Cpu className="text-candy-red mb-2" size={24} />
                            <h4 className="text-snow-drift font-outfit font-bold">Tech Mind</h4>
                            <p className="text-sm text-glacial-mist mt-1">Code that scales magic.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
