import React from "react";
import { SectionHeader } from "./SectionHeader";
interface CaseStudyCardProps {
    description: string;
}
export const CaseStudies: React.FC = () => {
    const caseStudies = [
        {
            description:
                "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        },
        {
            description:
                "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        },
        {
            description:
                "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        },
    ];

    return (
        <div className="case-studies w-full pb-15 px-24">
            <SectionHeader
                title="Case Studies"
                description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
            />

            <section className="flex flex-row gap-16 px-16 py-16  my-0 bg-[var(--myblack)] rounded-[45px] max-md:px-12 max-md:py-0 max-sm:flex-col max-sm:p-8">
                {caseStudies.map((study, index) => (
                    <React.Fragment key={index}>
                        <CaseStudyCard description={study.description} />
                        {index < caseStudies.length - 1 && (
                            <div className="w-px h-[186px] bg-gray-400 max-sm:mx-0 max-sm:my-5 max-sm:w-full max-sm:h-px" />
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export const ArrowIcon: React.FC = () => (
    <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
        <path
            d="M1.25 10.701C0.533 11.115 0.287 12.033 0.701 12.75C1.115 13.467 2.033 13.713 2.75 13.299L1.25 10.701ZM19.769 2.388C19.984 1.588 19.509 0.766 18.709 0.551L5.669 -2.943C4.869 -3.157 4.046 -2.682 3.832 -1.882C3.617 -1.082 4.092 -0.26 4.892 -0.045L16.483 3.061L13.378 14.652C13.163 15.452 13.638 16.274 14.438 16.489C15.238 16.703 16.061 16.228 16.275 15.428L19.769 2.388ZM2.75 13.299L20.071 3.299L18.571 0.701L1.25 10.701L2.75 13.299Z"
            fill="#B9FF66"
        />
    </svg>
);


const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    description,
}) => {
    return (
        <article className="flex flex-col gap-5  max-sm:w-full">
            <p className="text-lg text-[white]">{description}</p>
            <div className="flex gap-4 items-center text-xl text-[var(--mylime)]">
                <span>Learn more</span>
                <div>
                    <ArrowIcon />
                </div>
            </div>
        </article>
    );
};