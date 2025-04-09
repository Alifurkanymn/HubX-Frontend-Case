type subTitleProps = {
    subTitle: string;
    className?: string;
}

const SubTitle = ({ subTitle, className = '' }: subTitleProps) => {
    return (
        <h2 className={`text-[32px] lg:text-[40px] font-bold leading-[40px] lg:leading-[48px] ${className}`}>
            {subTitle}
        </h2>
    )
}

export default SubTitle