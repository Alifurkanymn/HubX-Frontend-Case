// Components
import InfoSection from "@/components/Tabs/InfoSection";
import TabItem from "@/components/Tabs/TabItem";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

// Icons
import { motion } from "motion/react"
import fileIcon from '@/assets/icons/file.svg';
import certificateIcon from '@/assets/icons/certificate.svg';
import scanIcon from '@/assets/icons/scan.svg';
import filterIcon from '@/assets/icons/filter.svg';
import exportIcon from '@/assets/icons/export.svg';

// Images
import documentScanner from '@/assets/images/documentScanner/documentScanner.webp';
import signAndStamp from '@/assets/images/signAndStamp/signAndStamp.webp';
import signAndStampLeft from '@/assets/images/signAndStamp/left.webp';
import signAndStampRight from '@/assets/images/signAndStamp/right.webp';
import batchScanning from '@/assets/images/batchScanning/batchScanning.webp';
import batchScanningFile from '@/assets/images/batchScanning/batchScanningFile.webp';
import advancedFilters from '@/assets/images/advancedFilters/advancedFilters.webp';
import advancedFiltersLeft from '@/assets/images/advancedFilters/left.webp';
import advancedFiltersRight from '@/assets/images/advancedFilters/right.webp';
import exportAndShare from '@/assets/images/exportAndShare/exportAndShare.webp';
import exportAndShareArrow from '@/assets/images/exportAndShare/arrow.webp';
import exportAndSharePDF from '@/assets/images/exportAndShare/pdf.webp';
import exportAndShareJPG from '@/assets/images/exportAndShare/jpg.webp';
import exportAndShareTXT from '@/assets/images/exportAndShare/txt.webp';

type Props = {}

const IntroductionProduct = (props: Props) => {
    return (
        <div className="2xl:max-w-screen-2xl mx-auto py-24">
            <Tabs defaultValue="document-scanner" className="w-full gap-0">
                <TabsContent value="document-scanner">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20 px-6 lg:px-28 overflow-hidden">
                        <div className="relative">
                            <motion.img
                                src={documentScanner}
                                alt="Sign & Stamp"
                                className="w-full max-w-[230px] lg:max-w-none min-w-[225px] aspect-[367/452] object-contain"
                                initial={{ opacity: .75, y: 452 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .75, ease: 'easeOut' }}
                            />
                        </div>
                        <InfoSection
                            title="Document Scanner"
                            subTitle="Scan with Ease"
                            description="Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word format."
                            buttonText="Learn More"
                            onButtonClick={() => console.log('Document Scanner')}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="sign-stamp">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20 px-6 lg:px-28 overflow-hidden">
                        <div className="relative">
                            <motion.img
                                src={signAndStamp}
                                alt="Sign & Stamp"
                                className="w-full max-w-[230px] lg:max-w-none min-w-[225px] aspect-[367/452] object-contain"
                                initial={{ opacity: .75, y: 560 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .75, ease: 'easeOut' }}
                            />
                            <motion.img
                                src={signAndStampLeft}
                                alt="Sign & Stamp Left"
                                className="absolute max-w-[142px] lg:max-w-none top-1/2 -left-14 lg:-left-20"
                                initial={{ opacity: .5, scale: 0 }}
                                animate={{
                                    opacity: .75,
                                    scale: 1,
                                }}
                                transition={{ duration: .5, ease: 'easeOut', delay: .4 }}
                            />
                            <motion.img
                                src={signAndStampRight}
                                alt="Sign & Stamp Right"
                                className="absolute max-w-[142px] lg:max-w-none top-1/4 -right-14 lg:-right-28"
                                initial={{ opacity: .5, scale: 0 }}
                                animate={{
                                    opacity: .75,
                                    scale: 1,
                                }}
                                transition={{ duration: .5, ease: 'easeOut', delay: .6 }}
                            />
                        </div>
                        <InfoSection
                            title="Sign & Stamp"
                            subTitle="One-Tap Focus"
                            description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
                            buttonText="Learn More"
                            onButtonClick={() => console.log('Sign & Stamp click')}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="batch-scanning">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20 px-6 lg:px-28 overflow-hidden">
                        <div className="relative">
                            <motion.img
                                src={batchScanning}
                                alt="Batch Scanning"
                                className="w-full max-w-[230px] lg:max-w-none min-w-[225px] aspect-[367/452] object-contain"
                                initial={{ opacity: 0.75, y: 452 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .75, ease: 'easeOut' }}
                            />
                            {[1, 2, 3].map((_, index) => (
                                <motion.img
                                    key={index}
                                    src={batchScanningFile}
                                    alt={`Batch Scanning File ${index + 1}`}
                                    className="absolute left-1/2 transform -translate-x-1/2"
                                    initial={{ opacity: 0, y: 247 }}
                                    animate={{
                                        opacity: 1,
                                        y: 15 * index,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeOut',
                                        delay: (index + 1) * 0.30,
                                    }}
                                    style={{
                                        top: `${26}%`,
                                        width: `${55 + index * 10}%`,
                                        transformOrigin: 'center',
                                    }}
                                />
                            ))}
                        </div>
                        <InfoSection
                            title="Batch Scanning"
                            subTitle="Multiple Page Scan"
                            description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
                            buttonText="Learn More"
                            onButtonClick={() => console.log('Batch Scanning click')}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="advanced-filters">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20 px-6 lg:px-28 overflow-hidden">
                        <div className="relative">
                            <div className="relative">
                                <motion.img
                                    src={advancedFilters}
                                    alt="Advanced fılters"
                                    className="w-full max-w-[230px] lg:max-w-none min-w-[225px] aspect-[367/452] object-contain"
                                    initial={{ opacity: .75, y: 560 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{ duration: .75, ease: 'easeOut' }}
                                />
                                <motion.img
                                    src={advancedFiltersLeft}
                                    alt="Advanced fılters Left"
                                    className="absolute max-w-7 lg:max-w-9 xl:max-w-none top-12 lg:top-22 -left-2"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{ duration: .5, ease: 'easeOut', delay: .8 }}
                                />
                                <motion.img
                                    src={advancedFiltersRight}
                                    alt="Advanced fılters Right"
                                    className="absolute max-w-7 lg:max-w-9 xl:max-w-none top-12 lg:top-22 -right-2"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{ duration: .5, ease: 'easeOut', delay: 1 }}
                                />
                            </div>
                        </div>
                        <InfoSection
                            title="Advanced Filters"
                            subTitle="Unique Filters"
                            description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
                            buttonText="Learn More"
                            onButtonClick={() => console.log('Advanced Filters click')}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="export-share">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20 px-6 lg:px-28 overflow-hidden">
                        <div className="relative">
                            <motion.img
                                src={exportAndShare}
                                alt="Advanced fılters"
                                className="w-full max-w-[230px] lg:max-w-none min-w-[225px] aspect-[367/452] object-contain"
                                initial={{ opacity: .75, y: 560 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .75, ease: 'easeOut' }}
                            />
                            <motion.img
                                src={exportAndShareArrow}
                                alt="Advanced fılters Left"
                                className="absolute max-w-5 lg:max-w-none bottom-0 lg:bottom-5 -left-8 lg:-left-6"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .5, ease: 'easeOut', delay: .6 }}
                            />
                            <motion.img
                                src={exportAndSharePDF}
                                alt="Advanced fılters Right"
                                className="absolute max-w-[100px] lg:max-w-[150px] bottom-0 lg:bottom-5 -left-6"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .5, ease: 'easeOut', delay: .8 }}
                            />
                            <motion.img
                                src={exportAndShareJPG}
                                alt="Advanced fılters Right"
                                className="absolute max-w-[80px] lg:max-w-[130px] bottom-8 lg:bottom-14 left-17 lg:left-26"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .5, ease: 'easeOut', delay: 1 }}
                            />
                            <motion.img
                                src={exportAndShareTXT}
                                alt="Advanced fılters Right"
                                className="absolute max-w-[100px] lg:max-w-[150px] bottom-0 lg:bottom-5 -right-4"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{ duration: .5, ease: 'easeOut', delay: 1.2 }}
                            />
                        </div>
                        <InfoSection
                            title="export & share"
                            subTitle="All-Round Conversion"
                            description="Export your scans as PDF, JPG, ZIP, TXT and Word."
                            buttonText="Learn More"
                            onButtonClick={() => console.log('Export & Share click')}
                        />
                    </div>
                </TabsContent>
                <TabsList className="h-full w-full bg-transparent p-0">
                    <Carousel className="w-full max-w-screen">
                        <CarouselContent className="w-full ml-0">
                            <CarouselItem className="pl-0 basis-2/3 lg:basis-1/5">
                                <TabsTrigger className='group w-full px-14 py-6 rounded-none box-border border-r m-0 border-r-gray-100 hover:border-blue-secondary transition-all duration-200 data-[state=active]:bg-blue-primary data-[state=active]:shadow-none cursor-pointer' value="document-scanner">
                                    <TabItem iconSrc={fileIcon} label="Document Scanner" />
                                </TabsTrigger>
                            </CarouselItem>
                            <CarouselItem className="pl-0 basis-2/3 lg:basis-1/5">
                                <TabsTrigger className='group w-full px-14 py-6 rounded-none box-border border-r m-0 border-r-gray-100 hover:border-blue-secondary transition-all duration-200 data-[state=active]:bg-blue-primary data-[state=active]:shadow-none cursor-pointer' value="sign-stamp">
                                    <TabItem iconSrc={certificateIcon} label="Sign & Stamp" />
                                </TabsTrigger>
                            </CarouselItem>
                            <CarouselItem className="pl-0 basis-2/3 lg:basis-1/5">
                                <TabsTrigger className='group w-full px-14 py-6 rounded-none box-border border-r m-0 border-r-gray-100 hover:border-blue-secondary transition-all duration-200 data-[state=active]:bg-blue-primary data-[state=active]:shadow-none cursor-pointer' value="batch-scanning">
                                    <TabItem iconSrc={scanIcon} label="Batch Scanning" />
                                </TabsTrigger>
                            </CarouselItem>
                            <CarouselItem className="pl-0 basis-2/3 lg:basis-1/5">
                                <TabsTrigger className='group w-full px-14 py-6 rounded-none box-border border-r m-0 border-r-gray-100 hover:border-blue-secondary transition-all duration-200 data-[state=active]:bg-blue-primary data-[state=active]:shadow-none cursor-pointer' value="advanced-filters">
                                    <TabItem iconSrc={filterIcon} label="Advanced Filters" />
                                </TabsTrigger>
                            </CarouselItem>
                            <CarouselItem className="pl-0 basis-2/3 lg:basis-1/5">
                                <TabsTrigger className='group w-full px-14 py-6 rounded-none box-border border-r-0 m-0 border-r-gray-100 hover:border-blue-secondary transition-all duration-200 data-[state=active]:bg-blue-primary data-[state=active]:shadow-none cursor-pointer' value="export-share">
                                    <TabItem iconSrc={exportIcon} label="Export & Share" />
                                </TabsTrigger>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default IntroductionProduct