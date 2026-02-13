import { useState } from 'react';
import { Heart, Check } from 'lucide-react';

export const DonationCTA = () => {
    const [amount, setAmount] = useState(50);
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountClick = (val: number) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setAmount(0);
    };

    return (
        <section id="donate" className="py-32 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface/10 border border-brand-surface/20 text-brand-surface text-xs font-bold tracking-widest uppercase">
                            Faça Parte
                        </div>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                            Sua contribuição <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-accent to-brand-gold">transforma vidas.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                            Cada centavo vai diretamente para nossos projetos. Seu apoio nos permite fornecer água limpa, educação e saúde.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                "100% das doações financiam nossos projetos",
                                "Contribuições dedutíveis do IR",
                                "Relatórios anuais de transparência"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Donation Card */}
                    <div className="lg:w-1/2 w-full max-w-xl">
                        <div className="bg-white rounded-4xl p-10 shadow-2xl relative overflow-hidden border border-white/10 ring-1 ring-black/5">
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-brand-accent to-brand-gold" />

                            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 text-center">Escolha um valor</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[20, 50, 100, 200].map((val) => (
                                    <button
                                        key={val}
                                        onClick={() => handleAmountClick(val)}
                                        className={`py-4 rounded-xl font-bold border-2 transition-all relative overflow-hidden ${amount === val
                                            ? 'border-brand-accent bg-brand-accent text-white shadow-lg shadow-brand-accent/30'
                                            : 'border-gray-100 text-brand-primary hover:border-brand-accent/50 bg-gray-50'
                                            }`}
                                    >
                                        R${val}
                                    </button>
                                ))}
                            </div>

                            <div className="relative mb-8">
                                <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 font-heading font-bold text-xl">R$</span>
                                <input
                                    type="number"
                                    placeholder="Outro valor"
                                    value={customAmount}
                                    onChange={handleCustomChange}
                                    className={`w-full bg-gray-50 border-2 rounded-xl py-5 pl-12 pr-6 text-lg font-bold text-brand-dark focus:outline-none focus:ring-4 focus:ring-brand-accent/10 transition-all ${customAmount ? 'border-brand-accent' : 'border-gray-100'}`}
                                />
                            </div>

                            <button className="w-full bg-brand-dark text-white font-bold py-5 rounded-xl text-lg flex items-center justify-center gap-3 transition-all hover:bg-brand-accent hover:shadow-xl hover:shadow-brand-accent/20 group">
                                Doar Agora <Heart size={20} className="group-hover:scale-110 transition-transform fill-current" />
                            </button>

                            <div className="flex justify-center items-center gap-2 mt-6 text-gray-400 text-xs font-medium uppercase tracking-wider">
                                <span>Pagamento Seguro via Stripe</span>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <span>Cancele a qualquer momento</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
