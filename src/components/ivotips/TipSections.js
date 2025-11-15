import Link from 'next/link';
import styles from './TipSections.module.css';

const tips = [
    {
        title: "How do I make an application?",
        slug: "how-to-apply",
        description: "Step-by-step guidance on applying for an Intervention Order in Victoria."
    },
    {
        title: "What will the process be?",
        slug: "process-overview",
        description: "Overview of the IVO process, court steps, and important considerations for applicants."
    },
    {
        title: "How will I be supported in court?",
        slug: "court-support",
        description: "Support options available in court, including volunteers, duty lawyers, and personal support."
    },
    {
        title: "How will I be supported in the community?",
        slug: "community-support",
        description: "Community-based resources and support for individuals navigating an IVO."
    },
    {
        title: "Court etiquette tips",
        slug: "court-etiquette",
        description: "Practical tips on conduct, dress, and preparation for attending court hearings."
    }
];

export default function TipSections() {
    return (
        <div className={styles['tips-container']}>
            {tips.map((tip) => (
                <Link
                    key={tip.slug}
                    href={`/ivotips/${tip.slug}`}
                    className={styles['tip-section']}
                >
                    <h2>{tip.title}</h2>
                    <p>{tip.description}</p>
                </Link>
            ))}
        </div>
    );
}
