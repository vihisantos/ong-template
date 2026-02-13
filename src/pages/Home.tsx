import { Hero } from '../components/home/Hero';
import { MissionSection } from '../components/home/MissionSection';
import { ImpactGallery } from '../components/home/ImpactGallery';
import { DonationCTA } from '../components/home/DonationCTA';

export const Home = () => {
    return (
        <main>
            <Hero />
            <MissionSection />
            <ImpactGallery />
            <DonationCTA />
        </main>
    );
};
