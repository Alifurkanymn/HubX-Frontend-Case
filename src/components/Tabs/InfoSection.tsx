import OutlineButton from '../Buttons/OutlineButton'
import SubTitle from './SubTitle'
import Title from './Title'
import Description from './Description'
import { motion } from "motion/react"

type InfoSectionProps = {
    title: string;
    subTitle: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
};

const InfoSection = ({ title, subTitle, description, buttonText, onButtonClick }: InfoSectionProps) => {
    return (
        <motion.div
            className="flex flex-col items-center lg:items-end text-center lg:text-right gap-3 lg:gap-5"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: .5, ease: 'easeOut' }}>
            <Title title={title} />
            <SubTitle subTitle={subTitle} />
            <Description description={description} />
            <OutlineButton onClick={onButtonClick}>
                {buttonText}
            </OutlineButton>
        </motion.div>
    )
}

export default InfoSection
