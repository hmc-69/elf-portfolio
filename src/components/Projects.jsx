import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import project1 from '../assets/project_naughty_nice_1767186399387.png';
import project2 from '../assets/project_sleigh_route_1767186421164.png';
import project3 from '../assets/project_toy_automator_1767186441805.png';

const projects = [
    {
        title: "Naughty-Nice Analyzer 3000",
        desc: "Real-time behavioral sentiment analysis dashboard processing millions of letters per second.",
        tags: ["Python", "TensorFlow", "React", "WebSocket"],
        status: "Live in Production",
        color: "from-candy-red to-orange-500",
        image: project1
    },
    {
        title: "Sleigh Route Optimizer",
        desc: "Solving the Traveling Santa Problem using quantum algos to ensure 100% on-time delivery.",
        tags: ["Rust", "Mapbox GL", "Graph Theory"],
        status: "Beta Testing",
        color: "from-blue-600 to-aurora-green",
        image: project2
    },
    {
        title: "Toy Fabrication Automator",
        desc: "IoT interface for controlling the Wooden Duck Assembly Line 4.0 with voice commands.",
        tags: ["Arduino", "Node.js", "MQTT"],
        status: "Patent Pending",
        color: "from-tech-gold to-yellow-600",
        image: project3
    }
];

const funnyLines = [
    "🚫 Does not work on Christmas Eve due to high traffic.",
    "🍪 Cookies required to unlock this feature.",
    "🔒 Restricted Access: Only Santa has the sudo password.",
    "🦌 Reindeers are currently using this server as a heating pad.",
    "🙅‍♂️ Access Denied: You are on the Naughty List.",
    "❄️ Code froze. Literally. It's the North Pole.",
    "🎁 This repo is wrapped. Wait until Dec 25th."
];

const Projects = () => {
    const [popup, setPopup] = useState(null);

    const showFunnyPopup = (projectTitle) => {
        const randomLine = funnyLines[Math.floor(Math.random() * funnyLines.length)];
        setPopup({ title: projectTitle, message: randomLine });
        setTimeout(() => setPopup(null), 4000);
    };

    return (
        <section id="inventions" className="py-20 bg-midnight-pine relative">
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex md:justify-between md:items-end"
                >
                    <div>
                        <span className="text-candy-red font-mono text-sm tracking-wider uppercase">Case Studies</span>
                        <h2 className="text-4xl md:text-5xl font-berkshire mt-2 text-snow-drift">Recent Inventions</h2>
                    </div>
                    <p className="hidden md:block text-glacial-mist max-w-sm text-right">
                        Solving North Pole logistical challenges with cutting-edge code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-workshop-slate rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/5 flex flex-col h-full"
                        >
                            {/* Card Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-workshop-slate to-transparent opacity-60" />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-mono border border-white/20 z-10">
                                    {project.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-berkshire text-snow-drift mb-3 group-hover:text-tech-gold transition-colors">{project.title}</h3>
                                <p className="text-glacial-mist mb-6 text-sm leading-relaxed flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 bg-midnight-pine text-aurora-green rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <button
                                        onClick={() => showFunnyPopup(project.title)}
                                        className="flex-1 py-2 rounded-lg bg-snow-drift text-midnight-pine font-bold hover:bg-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                                    >
                                        <ExternalLink size={16} /> Demo
                                    </button>
                                    <button
                                        onClick={() => showFunnyPopup(project.title)}
                                        className="p-2 rounded-lg border border-white/10 text-snow-drift hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <Github size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Funny Popup Modal */}
                <AnimatePresence>
                    {popup && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                                onClick={() => setPopup(null)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                className="bg-workshop-slate border-2 border-candy-red p-6 rounded-2xl shadow-[0_0_50px_rgba(230,57,70,0.5)] relative max-w-sm m-4 pointer-events-auto"
                            >
                                <button
                                    onClick={() => setPopup(null)}
                                    className="absolute top-2 right-2 text-glacial-mist hover:text-white"
                                >
                                    <X size={16} />
                                </button>
                                <div className="flex gap-4 items-start">
                                    <div className="text-4xl animate-bounce">⚠️</div>
                                    <div>
                                        <h4 className="text-tech-gold font-bold mb-1">Access Restricted</h4>
                                        <p className="text-snow-drift text-sm leading-relaxed">{popup.message}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
