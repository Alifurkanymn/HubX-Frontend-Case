type DescriptionProps = {
    description: string;
    className?: string;
}

const Description = ({ description, className = '' }: DescriptionProps) => {
    return (
        <p className={`text-sm lg:text-lg font-normal leading-[28px] lg:leading-[32px] max-w-2xl ${className}`}>
            {description}
        </p>
    )
}

export default Description
