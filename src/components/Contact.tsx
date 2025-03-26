import { useState } from "react";
import { SectionHeader } from "./SectionHeader"
import illContact from "../assets/icons/ContactUs.svg"
interface FormData {
    type: "sayHi" | "getQuote";
    name: string;
    email: string;
    message: string;
}

interface FormInputsProps {
    formData: FormData;
    onChange: (updates: Partial<FormData>) => void;
}

interface FormTypeSelectorProps {
    selected: "sayHi" | "getQuote";
    onChange: (type: "sayHi" | "getQuote") => void;
}


export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        type: "sayHi",
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };
    return (
        <div className="contact w-full px-24 pb-15 overflow-hidden">
            <SectionHeader title="Contact Us" description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
            <form
                onSubmit={handleSubmit}
                className="flex relative gap-10 items-start px-24 pt-16 pb-20 w-full bg-zinc-100 rounded-[45px] max-md:gap-8 max-md:px-16 max-md:py-10 max-sm:gap-5 max-sm:px-5 max-sm:py-8"
            >
                <div className="flex flex-col gap-10 items-start w-full max-w-[556px] max-md:gap-8 max-sm:gap-5">
                    <FormTypeSelector
                        selected={formData.type}
                        onChange={(type) => setFormData((prev) => ({ ...prev, type }))}
                    />
                    <FormInputs
                        formData={formData}
                        onChange={(updates) =>
                            setFormData((prev) => ({ ...prev, ...updates }))
                        }
                    />
                    <button
                        type="submit"
                        className="px-9 py-5 w-full text-xl leading-7 text-center text-white rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
                    >
                        Send Message
                    </button>
                </div>
                <div className="absolute right-[-20rem] max-md:right-[-50px] max-sm:hidden">
                    <img src={illContact} alt="" srcSet="" />
                </div>
            </form>
        </div>
    )
}

export const FormTypeSelector: React.FC<FormTypeSelectorProps> = ({
    selected,
    onChange,
}) => {
    return (
        <div className="flex gap-9 items-start max-sm:gap-5" role="radiogroup">
            <button
                type="button"
                onClick={() => onChange("sayHi")}
                className="flex gap-3.5 items-center cursor-pointer"
                role="radio"
                aria-checked={selected === "sayHi"}
            >
                <div className="flex justify-center items-center bg-white rounded-full border border-black border-solid h-[30px] w-[30px]">
                    {selected === "sayHi" && (
                        <div className="w-4 h-4 bg-[var(--mylime)] rounded-full" />
                    )}
                </div>
                <span className="text-lg text-black">Say Hi</span>
            </button>
            <button
                type="button"
                onClick={() => onChange("getQuote")}
                className="flex gap-3.5 items-center cursor-pointer"
                role="radio"
                aria-checked={selected === "getQuote"}
            >
                <div className="flex justify-center items-center bg-white rounded-full border border-black border-solid h-[30px] w-[30px]">
                    {selected === "getQuote" && (
                        <div className="w-4 h-4 bg-[var(--mylime)] rounded-full" />
                    )}
                </div>
                <span className="text-lg text-black">Get a Quote</span>
            </button>
        </div>
    );
};

export const FormInputs: React.FC<FormInputsProps> = ({
    formData,
    onChange,
}) => {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-base leading-7 bg text-black">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => onChange({ name: e.target.value })}
                    className="px-8 py-5 w-full text-lg bg-[var(--mywhite)] rounded-2xl border border-black border-solid text-zinc-500"
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-base leading-7 text-black">
                    Email*
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => onChange({ email: e.target.value })}
                    className="px-8 py-5 w-full text-lg bg-[var(--mywhite)] rounded-2xl border border-black border-solid text-zinc-500"
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-base leading-7 text-black">
                    Message*
                </label>
                <textarea
                    id="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={(e) => onChange({ message: e.target.value })}
                    className="px-8 py-5 w-full text-lg bg-[var(--mywhite)] rounded-2xl border border-black border-solid resize-none h-[190px] text-zinc-500"
                />
            </div>
        </div>
    );
};


