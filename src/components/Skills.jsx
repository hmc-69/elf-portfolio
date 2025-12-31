import { motion } from 'framer-motion';
import { Code, Database, Layout, Sparkles, Terminal, Zap } from 'lucide-react';

const skills = [
    { icon: Layout, title: "Frontend Magic", desc: "React, Framer Motion, Tailwind", color: "text-aurora-green" },
    { icon: Terminal, title: "Elf Logic", desc: "Node.js, Python, Algorithms", color: "text-tech-gold" },
    { icon: Database, title: "Workshop Data", desc: "SQL, MongoDB, Firebase", color: "text-candy-red" },
    { icon: Sparkles, title: "UI/UX Spells", desc: "Figma, Rive, Adobe XD", color: "text-purple-400" },
    { icon: Code, title: "Clean Code", desc: "TypeScript, ESLint, Prettier", color: "text-blue-400" },
    { icon: Zap, title: "Optimization", desc: "Vite, Next.js, Web Vitals", color: "text-yellow-400" },
];

const Skills = () => {
    return (
        <section id="protocols" className="py-20 bg-midnight-pine/50 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-tech-gold font-mono text-sm tracking-wider uppercase">Magical Tech Stack</span>
                    <h2 className="text-4xl md:text-5xl font-berkshire mt-2 text-snow-drift">Tools of the Trade</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-workshop-slate hover:bg-workshop-slate/80 p-6 rounded-2xl border border-white/5 hover:border-tech-gold/50 cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-midnight-pine flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${skill.color}`}>
                                <skill.icon size={24} />
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-snow-drift mb-2">{skill.title}</h3>
                            <p className="text-glacial-mist font-mono text-sm">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
