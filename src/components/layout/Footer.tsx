import { Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="text-3xl font-heading font-bold flex items-center gap-2 tracking-tight">
                            LoveFlow
                        </div>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Empoderando comunidades e transformando vidas através do desenvolvimento sustentável e ação compassiva.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-accent transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Sobre</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Nossa História</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Equipe</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Carreiras</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Transparência</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Impacto</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Projetos</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Histórias</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Relatórios</a></li>
                            <li><a href="#" className="hover:text-brand-accent transition-colors">Voluntarie-se</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Contato</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-brand-accent mt-1" />
                                <span>Av. Paulista, 1578 - Bela Vista<br />São Paulo, SP - 01310-200</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-brand-accent" />
                                <span>contato@loveflow.org.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 LoveFlow ONG. Todos os direitos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
