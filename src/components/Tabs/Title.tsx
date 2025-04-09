type titleProps = {
    title: string;
    className?: string;
}

const Title = ({ title, className = '' }: titleProps) => {
    return (
        <h1 className={`text-blue-secondary font-extrabold uppercase tracking-[2px] text-base lg:text-xl ${className}`}>
            {title}
        </h1>
    )
}

export default Title