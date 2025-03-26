import { SectionHeader } from "./SectionHeader"
import member1 from "../assets/member-1.png"
import { CustomButton } from "./CustomButton";

interface PersonInfoProps {
    imageSrc: string;
    name: string;
    title: string;
    imageClassName?: string;
}

interface TeamMemberCardProps {
    imageSrc: string;
    name: string;
    title: string;
    description: string;
    imageClassName?: string;
}
export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    imageSrc,
    name,
    title,
    description,
    imageClassName,
}) => {
    return (
        <article className="flex flex-col px-9 pt-10 pb-16 bg-[var(--mygray)] border border-solid border-[var(--myblack)] min-h-[331px] min-w-60 rounded-[45px] shadow-[0px_5px_0px_rgba(25,26,35,1)] w-full max-md:px-5">
            <div className=" h-330px">
                <PersonInfo
                    imageSrc={imageSrc}
                    name={name}
                    title={title}
                    imageClassName={imageClassName}
                />
                <hr className="mt-7 w-full border border-black border-solid min-h-px" />
                <p className="mt-7 text-lg">{description}</p>
            </div>
        </article>
    );
};

export const PersonInfo: React.FC<PersonInfoProps> = ({
    imageSrc,
    name,
    title,
    imageClassName = "object-contain shrink-0 aspect-square w-[103px]",
}) => {
    return (
        <header className="flex gap-0 items-start w-full">
            <div className="flex flex-1 shrink gap-5 items-end pr-11 w-full basis-0 min-w-60">
                <img
                    src={imageSrc}
                    alt={`${name} profile picture`}
                    className={imageClassName}
                />
                <div className="flex flex-col rounded-none">
                    <h2 className="self-start text-xl font-medium">{name}</h2>
                    <p className="text-lg">{title}</p>
                </div>
            </div>
        </header>
    );
};

export const Team: React.FC<any> = () => {

    const TEAM_MEMBERS = [
        {
            imageSrc: member1
            ,
            name: "John Smith",
            title: "CEO and Founder",
            description:
                "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            imageClassName: "object-contain shrink-0 aspect-[1.03] w-[106px]",
        },
        {
            imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/43520fb86ddb57d5cd750ab984eeafc6451ffb1a?placeholderIfAbsent=true",
            name: "Jane Doe",
            title: "Director of Operations",
            description:
                "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        },
        {
            imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/1223de093a68f63663d4a9bf62a635446779cd1d?placeholderIfAbsent=true",
            name: "Michael Brown",
            title: "Senior SEO Specialist",
            description:
                "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        },


        {
            imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/1223de093a68f63663d4a9bf62a635446779cd1d?placeholderIfAbsent=true",
            name: "Emily Johnson",
            title: "PPC Manager",
            description:
                "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        },
        {
            imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/1223de093a68f63663d4a9bf62a635446779cd1d?placeholderIfAbsent=true",
            name: "Brian Williams",
            title: "Social Media Specialist",
            description:
                "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        },
        {
            imageSrc:
                "https://cdn.builder.io/api/v1/image/assets/46637b4b037a4f8cafcf187659f69c77/1223de093a68f63663d4a9bf62a635446779cd1d?placeholderIfAbsent=true",
            name: "Sarah Kim",
            title: "Content Creator",
            description:
                "6+ years of experience in email marketing and automation. Expert in creating engaging campaigns and optimizing conversion rates",
        },

    ];


    return (


        <div className="team px-24 w-full pb-5">
            <SectionHeader title="Team"
                description="Meet the skilled and experienced team behind our successful digital marketing strategies"
            />
            <section className="grid gap-10 pb-10 grid-cols-[repeat(3,1fr)] max-md:px-12 max-md:py-0 max-md:grid-cols-[1fr] max-sm:px-5 max-sm:py-0">
                {TEAM_MEMBERS.map((member, index) => (
                    <TeamMemberCard
                        key={index}
                        imageSrc={member.imageSrc}
                        name={member.name}
                        title={member.title}
                        description={member.description}
                        imageClassName={member.imageClassName}
                    />
                ))}
            </section>
            <div className="relative flex justify-end w-full">
                <CustomButton width="w-[269px]" height="h-[68px]" title="See all team" bgColor="bg-black" text="text-white" />
            </div>
        </div>
    )
}




