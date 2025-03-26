import React from "react";
import { SectionHeader } from "./SectionHeader";
interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    isCollapsible: boolean;
}
interface StepIconProps {
    variant: "plus" | "minus";
}
export const OurWorkingProcess: React.FC = () => {
    const data = [
        {
            number: "01",
            title: "Consultation",
            description:
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
            isCollapsible: true,
        },
        {
            number: "02",
            title: "Research and Strategy Development",
            description: "We will conduct in-depth research to identify your target audience, competitors, and industry trends. Based on this information, we will develop a comprehensive digital marketing strategy that aligns with your business goals.",
            isCollapsible: true,
        },
        {
            number: "03",
            title: "Implementation",
            description: "Changes to the website, content creation, and optimization of the website for search engines.",
            isCollapsible: true,
        },
        {
            number: "04",
            title: "Monitoring and Optimization",
            description: "Help you to monitor the performance of your digital marketing campaigns and make data-driven decisions to optimize your results.",
            isCollapsible: true,
        },
        {
            number: "05",
            title: "Reporting and Communication",
            description: "Suppose you have any questions or concerns about your digital marketing campaigns. In that case, we will provide regular reports and updates to keep you informed about the progress of your campaigns.",
            isCollapsible: true,
        },
        {
            number: "06",
            title: "Continual Improvement",
            description: "Try to improve the performance of your digital marketing campaigns continually.",
            isCollapsible: true,
        },
    ];

    return (
        <div className="working-process w-full px-24 pb-20">
            <SectionHeader
                title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your 
                 Business Goals"
            />
            <section className="flex flex-col w-full gap-8 py-0 max-md:px-12 max-md:py-0 max-sm:px-5 max-sm:py-0">
                {data.map((step) => (
                    <ProcessStep
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        isCollapsible={step.isCollapsible}
                    />
                ))}
            </section>

        </div>
    );
}



export function ProcessStep({
    number,
    title,
    description,
    isCollapsible,
}: ProcessStepProps) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <article
            onClick={() => isCollapsible && setIsExpanded(!isExpanded)}
            className={`px-16 py-10 border border-solid ${isExpanded ? 'bg-[var(--mylime)]' : 'bg-[var(--mygray)]'
            } border-[var(--myblack)] rounded-[45px] shadow-[0_5px_0_#191A23] max-sm:p-8 transition-colors duration-300 ease-in-out cursor-pointer`}
        >
            <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                    <h2 className="text-6xl max-sm:text-4xl">{number}</h2>
                    <div className="text-3xl max-w-[612px] max-sm:text-2xl">{title}</div>
                </div>
                <button
                    className={!isCollapsible ? "cursor-default" : ""}
                >
                    <StepIcon
                        variant={isCollapsible ? (isExpanded ? "minus" : "plus") : "plus"}
                    />
                </button>
            </div>
            {isExpanded && description && (
                <>
                    <div
                        className={`mx-0 my-8 w-full h-px bg-zinc-900 opacity-20 transition-all duration-300 ease-in-out`}
                    />
                    <p
                        className="text-lg animate-slide-down"
                    >
                        {description}
                    </p>
                </>
            )}
        </article>
    );
}



export function StepIcon({ variant }: StepIconProps) {
    return (
        <svg width="58" height="59" viewBox="0 0 58 59" fill="none">
            <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
            {variant === "minus" ? (
                <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
            ) : (
                <path
                    d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                    fill="#191A23"
                />
            )}
        </svg>
    );
}
