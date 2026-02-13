import { Globe, Users, Leaf, ArrowRight } from 'lucide-react';

export const MissionSection = () => {
    return (
        <section id="about" className="py-32 bg-brand-surface">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-4 animate-fade-in-up">
                        Nossa Missão
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Construindo pontes para um <br />
                        <span className="italic text-brand-primary">futuro melhor.</span>
                    </h3>
                    <p className="text-xl text-brand-primary leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Dedicamos nossos recursos para criar mudanças duradouras através da educação, acesso à saúde e desenvolvimento de infraestrutura sustentável.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Main Feature - Large */}
                    <div className="md:col-span-2 bg-brand-dark rounded-4xl p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 transition-all duration-700 group-hover:bg-brand-accent/30" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                                <Users size={32} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-heading font-bold text-white mb-4">Comunidade Primeiro</h4>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                                    Identificamos e resolvemos os desafios mais urgentes enfrentados pelas comunidades, trabalhando diretamente com líderes locais.
                                </p>
                                <button className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Ler Histórias <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Side Feature 1 */}
                    <div className="bg-brand-cream rounded-4xl p-10 hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                        <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Globe size={28} />
                        </div>
                        <h4 className="text-2xl font-heading font-bold text-brand-dark mb-3">Alcance Nacional</h4>
                        <p className="text-brand-primary leading-relaxed">
                            De vilarejos remotos a grandes cidades, nossa rede se estende por todos os estados.
                        </p>
                    </div>

                    {/* Side Feature 2 */}
                    <div className="bg-white rounded-4xl p-10 border border-gray-100 hover:border-brand-accent/20 transition-colors duration-300 group">
                        <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                            <Leaf size={28} />
                        </div>
                        <h4 className="text-2xl font-heading font-bold text-brand-dark mb-3">Sustentabilidade</h4>
                        <p className="text-brand-primary leading-relaxed">
                            Projetos desenhados para serem autossustentáveis, garantindo impacto a longo prazo.
                        </p>
                    </div>

                    {/* Wide Feature - Bottom */}
                    <div className="md:col-span-3 bg-brand-accent rounded-4xl p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="relative z-10 max-w-2xl">
                            <h4 className="text-3xl font-heading font-bold mb-4">Junte-se a 5.000+ Doadores Mensais</h4>
                            <p className="text-white/80 text-lg">Seu apoio consistente nos ajuda a planejar com antecedência e responder rapidamente a emergências.</p>
                        </div>
                        <button className="relative z-10 bg-white text-brand-accent px-8 py-4 rounded-full font-bold hover:bg-brand-dark hover:text-white transition-colors shadow-lg">
                            Seja um Parceiro
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
