import BaseIconButton from "../components/common/BaseIconButton";
import { FloatingData, FloatingIcon } from "../data/FloatingData";
import React from "react";

type IconProps = {
    size?: number;
    className?: string;
};

const FloatingButton = () => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col z-50 gap-4">
            {FloatingData.map(({ key, value, name }) => {
                const Icon = FloatingIcon[key] as React.ComponentType<IconProps>;

                const handleClick = () => {
                    navigator.clipboard.writeText(value);
                }

                return (
                    <BaseIconButton key={key} onClick={handleClick} href={`https://${value}`} title={name}>
                        <Icon size={24} className="hover:bg-gray-200" />
                    </BaseIconButton>
                )
            })}
        </div>
    )
}

export default FloatingButton;









// import BaseIconButton from "../components/common/BaseIconButton";
// import { FloatingData, FloatingIcon } from "../data/FloatingData";
// import React from "react";

// type IconProps = {
//     size?: number;
//     className?: string;
// };

// const FloatingButton = () => {
//     return (
//         <div className="fixed bottom-4 right-4 flex flex-col z-50 gap-4">
//             {FloatingData.map(({ key, value, name, type }) => {
//                 const Icon = FloatingIcon[key] as React.ComponentType<IconProps>;
//                 let content: React.ReactNode;

//                 const handleClick = () => {
//                     if (type === "url") {
//                         content = (
//                             <a
//                                 href={`https://${value}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:underline"
//                             >
//                                 {value}
//                             </a>
//                         )
//                     } else {
//                         content = (
//                             <button onClick={handleClick} className="hover:underline">
//                                 {value}
//                             </button>
//                         );
//                     }
//                 }



//                 // if (type === "scroll")

//                 return (
//                     <BaseIconButton key={key} title={name}>
//                         <Icon size={24} />
//                     </BaseIconButton>
//                 )
//             })}
//         </div>
//     )
// }

// export default FloatingButton;