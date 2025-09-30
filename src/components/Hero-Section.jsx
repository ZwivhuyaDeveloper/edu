import React from 'react';
import StatsSection from "./statssection.jsx";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import { ArrowUpCircle } from 'lucide-react';
import { Button } from './ui/button.jsx';


function HeroSection() {
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] dark:bg-black"></div>
      );
      const items = [
        {
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: <Skeleton />,
            className: "md:col-span-1",
            image: <img src={""} alt="" />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Dawn of Innovation",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: <img src={""} alt="" width='full' height='full' />,
            className: "md:col-span-2",
            image: <img src={""} alt="" />,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Power of Communication",
            description:"Understand the impact of effective communication in our lives.",
            header: <Skeleton />,
            className: "md:col-span-2",
            image: <img src={""} alt="" />,
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Art of Design",
            description: "Discover the beauty of thoughtful and functional design.",
            header: <Skeleton />,
            className: "md:col-span-1",
            image: <img src={""} alt="" />,
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
      ];
    return (
        <div className='flex flex-row items-center pt-40 gap-20 w-full h-full justify-between px-60 '>

            <div className='flex flex-col w-4xl h-full gap-15 items-center justify-start'>
                <div>
                    <span className='text-black text-5xl font-bold'>Comprehensive AI Sofware for Education</span>
                </div>
                <p className='text-black text-left text-xl '>
                    Empowering Students, Teacher and Administrator with the power of Artificial Intelligence to manage students reports, performance and grading
                </p>
                <div className='flex flex-row gap-3 items-center w-full justify-start'>
                    <Button className='bg-teal-800 text-white font-bold text-xl py-5 px-4 rounded-lg'>Get Started For Free</Button>
                    <Button className='bg-teal-800 text-white font-bold text-xl py-5 px-5 rounded-lg border border-teal-800'>Contact</Button>
                    <Button className='bg-teal-800 text-white font-bold text-xl py-5 px-5 rounded-lg border border-teal-800'><ArrowUpCircle /></Button>
                </div>
            </div>

            <div className='flex flex-col w-full h-full items-center justify-center'>
            <BentoGrid className="w-full mx-auto ">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    />
                ))}
            </BentoGrid>
            </div>

        </div>
    );
}

export default HeroSection;
