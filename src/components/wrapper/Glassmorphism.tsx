import { ReactNode } from "react";

interface GlassmorphismProps {
    children: ReactNode;
    className?: string;
}

const Glassmorphism = ({ children, className }: GlassmorphismProps) => {
    return (
        <div className={`backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg ${className}`}>
            {children}
        </div>
    )
}

export default Glassmorphism;