
import * as React from "react";

interface SectionHeaderProps {
    title?: string
    description?: string;
  }
  
export const SectionHeader: React.FC<SectionHeaderProps>  = ({title, description}) => {
    return <div className="flex gap-10 items-start py-10 mb-10 max-md:px-12 max-md:py-0 max-sm:px-5 max-sm:py-2">
         <h2 className="px-2 py-0 text-4xl font-medium bg-[var(--mylime)] rounded-lg max-sm:text-3xl">
            {title}
        </h2>
        <p className="text-lg max-w-[580px] max-sm:text-base">
           {description}
        </p>
    </div>
}