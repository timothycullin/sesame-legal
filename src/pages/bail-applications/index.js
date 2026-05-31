// Imports
import Head from "next/head";

// Local components
import Footer from "../../components/Footer";

// Local data
import bailApplicationGuide from "../../data/bail-applications";

// Local styles
import styles from "./bail-applications.module.css";

// Logic
export default function BailApplicationsPage() {
    const resource = bailApplicationGuide[0];
    const pageUrl = "https://www.sesamelegal.com/bail-applications";

    if (!resource) {
        return null;
    }

    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{resource.title} | Sesame Legal</title>
                <meta name="description" content={resource.description} />
                <link rel="canonical" href={pageUrl} />
            </Head>

            <main className={styles.main}>
                <article className={styles.article}>
                    <p className={styles.eyebrow}>Guide</p>
                    <h1>{resource.title}</h1>
                    <p className={styles.description}>{resource.description}</p>

                    {resource.sections.map((section) => (
                        <section key={section.heading} className={styles.section}>
                            <h2>{section.heading}</h2>

                            {section.paragraphs?.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}

                            {section.list && (
                                <ul>
                                    {section.list.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </article>
            </main>

            <Footer />
        </div>
    );
}