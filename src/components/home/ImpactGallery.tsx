import { ArrowRight, Plus } from 'lucide-react';

export const ImpactGallery = () => {
    const projects = [
        {
            title: "Água Limpa",
            category: "Infraestrutura",
            image: "https://images.unsplash.com/photo-1541976844346-718b9acf520c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            size: "large"
        },
        {
            title: "Educação",
            category: "Futuro",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            size: "small"
        },
        {
            title: "Agricultura",
            category: "Sustentabilidade",
            image: "https://images.unsplash.com/photo-1625246333195-bf466755497c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            size: "small"
        },
        {
            title: "Saúde",
            category: "Bem-estar",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            size: "wide"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Nosso Impacto</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark leading-tight">
                            Projetos Reais, <br />
                            <span className="italic text-brand-primary">Histórias Reais.</span>
                        </h2>
                    </div>
                    <button className="group flex items-center gap-3 text-brand-dark font-bold hover:text-brand-accent transition-colors">
                        <span className="border-b-2 border-brand-dark group-hover:border-brand-accent transition-colors pb-1">Ver Todos os Projetos</span>
                        <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[1200px] md:h-[600px]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-4xl cursor-pointer ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                project.size === 'wide' ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-heading font-bold text-white">{project.title}</h3>
                                </div>
                            </div>

                            {/* Default Icon */}
                            <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity">
                                <Plus />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
