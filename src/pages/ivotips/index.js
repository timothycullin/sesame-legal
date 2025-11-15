import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TipSections from '../../components/ivotips/TipSections';


export default function IvoTipLanding() {
    return (
        <div className="page-container">
            <SEO
                title="IVO Tips - Guidance for Intervention Orders in Victoria"
                description="Providing the community with tips and guidance for navigating the IVO process in Victoria."
            />

            <main>
                <Header
                    title="IVO Tips"
                    label="Legal Tips"
                    description="Providing the community with guidance on navigating Intervention Orders in Victoria."
                />

                <TipSections />

            </main>

            <Footer />
        </div>
    );
}
