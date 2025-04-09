interface TabItemProps {
    iconSrc: string;
    label: string;
}

const TabItem = ({ iconSrc, label }: TabItemProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 bg-white border border-gray-200 rounded-full">
                <svg className="circle-progress" height="56" width="56">
                    <circle cx="28" cy="28" r="27" stroke="#0381FF" strokeWidth="1" fill="none" />
                </svg>
                <img
                    src={iconSrc}
                    alt={`${label} Icon`}
                    className="circle-img w-8 h-8 max-w-8"
                />
            </div>
            <h4 className="z-10">{label}</h4>
        </div>
    );
};

export default TabItem;
