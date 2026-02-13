import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center bg-brand-cream overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark hidden lg:block" />

            <div className="container mx-auto px-6 relative z-10 py-20 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 w-full items-center">

                    {/* Left Content (Text) */}
                    <div className="space-y-10 max-w-2xl pt-40 lg:pt-32">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-widest uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                            Organização Sem Fins Lucrativos
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-brand-dark leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Esperança para <br />
                            <span className="italic text-brand-accent">todo</span> coração.
                        </h1>

                        <p className="text-lg md:text-xl text-brand-primary leading-relaxed max-w-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Nós conectamos generosidade e necessidade. Junte-se a um movimento dedicado à mudança sustentável.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <button className="group bg-brand-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-brand-accent hover:shadow-xl hover:shadow-brand-accent/20 flex items-center gap-3">
                                Comece a Doar
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group px-8 py-4 rounded-full border border-gray-200 hover:border-brand-dark font-medium transition-all flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold text-brand-gold group-hover:text-white transition-colors">
                                    <Play size={12} fill="currentColor" />
                                </div>
                                Assistir Vídeo
                            </button>
                        </div>

                        {/* Enhanced Statistics - Now more prominent and safely positioned */}
                        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-brand-dark/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div>
                                <p className="text-4xl font-bold font-heading text-brand-dark mb-1">50k+</p>
                                <p className="text-xs font-bold text-brand-primary/70 tracking-widest uppercase">Vidas Impactadas</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold font-heading text-brand-dark mb-1">30+</p>
                                <p className="text-xs font-bold text-brand-primary/70 tracking-widest uppercase">Comunidades</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold font-heading text-brand-dark mb-1">120+</p>
                                <p className="text-xs font-bold text-brand-primary/70 tracking-widest uppercase">Voluntários</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative hidden lg:block h-[800px] w-full animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute inset-0 bg-gray-200 rounded-4xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Inspirational"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/50 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-float">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-brand-dark">+120 Voluntários</span>
                            </div>
                            <p className="text-sm text-brand-primary leading-snug">
                                "O trabalho realizado aqui é verdadeiramente transformador para toda a região."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
