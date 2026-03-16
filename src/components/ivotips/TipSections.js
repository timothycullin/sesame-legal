// Imports
import Link from 'next/link';

// Styles
import styles from './TipSections.module.css';

// Logic
const tips = [
    {
        title: 'How do I make an application?',
        slug: 'how-to-apply',
        description: 'Step-by-step guidance on applying for an Intervention Order (IVO) in Victoria.'
    },
    {
        title: 'What will the process be?',
        slug: 'process-overview',
        description: 'Overview of the IVO process, court steps, and important considerations for applicants.'
    },
    {
        title: 'How will I be supported in court?',
        slug: 'court-support',
        description: 'Support options available in court during an IVO, including volunteers, duty lawyers, and personal support.'
    },
    {
        title: 'How will I be supported in the community?',
        slug: 'community-support',
        description: 'Community-based resources and support for individuals navigating an IVO.'
    },
    {
        title: 'Court etiquette tips',
        slug: 'court-etiquette',
        description: 'Practical tips on conduct, dress, and preparation for attending IVO hearings.'
    }
];

// Markup
export default function TipSections() {
    return (
        <section className={styles['tips-container']} aria-labelledby="other-ivo-tips-heading">
            <h2 id="other-ivo-tips-heading" className={styles['sr-only']}>
                Other IVO tips
            </h2>

            {tips.map((tip) => (
                <Link
                    key={tip.slug}
                    href={`/ivotips/${tip.slug}`}
                    className={styles['tip-section']}
                    aria-labelledby={`tip-${tip.slug}`}
                >
                    <h3 id={`tip-${tip.slug}`}>{tip.title}</h3>
                    <p>{tip.description}</p>
                </Link>
            ))}
        </section>
    );
}