import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        // Simulate "tubular" send
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section id="hire-me" className="py-24 bg-midnight-pine relative overflow-hidden">
            {/* Background tube visual */}
            <div className="absolute top-0 right-0 w-1/3 h-full border-l-4 border-workshop-slate/30 opacity-20 transform skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-berkshire mb-4 text-snow-drift">Send a Pneumatic Message</h2>
                    <p className="text-glacial-mist">Direct line to North Pole Station 4. Expect a reply within 2-3 elf-hours.</p>
                </div>

                <motion.div
                    className="bg-workshop-slate p-8 md:p-12 rounded-3xl border-4 border-workshop-slate shadow-[0_0_50px_rgba(15,46,46,0.5)] relative"
                >
                    {/* Tube decorative top */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-gray-700 to-workshop-slate rounded-t-full border-t border-white/10" />

                    {sent ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 bg-aurora-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-aurora-green">
                                <Sparkles size={40} />
                            </div>
                            <h3 className="text-2xl font-berkshire text-snow-drift mb-2">Message Whooshed Away!</h3>
                            <p className="text-glacial-mist">The pneumatics are carrying your words to Tinker's desk.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-tech-gold uppercase tracking-wider">Elf Name / Entity</label>
                                    <input type="text" className="w-full bg-midnight-pine border border-white/10 rounded-xl px-4 py-3 text-snow-drift focus:outline-none focus:border-tech-gold/50 transition-colors" placeholder="Santa Claus" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-tech-gold uppercase tracking-wider">Frequency (Email)</label>
                                    <input type="email" className="w-full bg-midnight-pine border border-white/10 rounded-xl px-4 py-3 text-snow-drift focus:outline-none focus:border-tech-gold/50 transition-colors" placeholder="santa@northpole.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-tech-gold uppercase tracking-wider">Transmission Content</label>
                                <textarea className="w-full bg-midnight-pine border border-white/10 rounded-xl px-4 py-3 text-snow-drift h-32 focus:outline-none focus:border-tech-gold/50 transition-colors" placeholder="I have a mission for you..." required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-candy-red hover:bg-red-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 hover:shadow-red-900/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Initiate Transmission
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
