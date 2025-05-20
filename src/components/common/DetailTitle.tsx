import { ContentsTitleProps } from "../../utils/types"

// 디테일 페이지 소제목
const DetailTitle = ({children, className}:ContentsTitleProps) => {
    return (
        <h2 className={`text-4xl font-bold mb-6 text-greyShadow ${className}`}>
            {children}
        </h2>
    )
}

export default DetailTitle