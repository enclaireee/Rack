"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Readme from "./readme";
import Link from "next/link";

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const titleVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: {
            y: 100,
            opacity: 0,
            rotateY: 90
        },
        visible: {
            y: 0,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    };

    const taglineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.2,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        }
    };

    const backgroundVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2 }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                delay: 1.5,
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const titleLetters = "Rack".split("");

    // Increase number of floating elements
    const numFloatingElements = 12;

    return (
        <>
            <AnimatePresence>
                {isLoaded && (
                    <>
                        <div className="min-h-screen relative">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-black to-neutral-900"
                                initial="hidden"
                                animate="visible"
                                variants={backgroundVariants}
                            />

                            <div className="flex h-screen w-full">
                                <div className="flex flex-col justify-center items-center w-full relative">
                                    <div className="px-8 md:px-16 lg:px-24 text-center z-10">

                                        <motion.div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gray-400/20 blur-2xl"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />

                                        <motion.div
                                            className="flex justify-center"
                                            variants={titleVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {titleLetters.map((letter, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="text-7xl md:text-9xl text-primary font-extrabold z-10"
                                                    variants={letterVariants}
                                                >
                                                    {letter}
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        <motion.p
                                            className="text-2xl md:text-4xl text-gray-300 font-bold mt-2 z-20"
                                            variants={taglineVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            Modern way to organize.
                                        </motion.p>

                                        <motion.div
                                            variants={buttonVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="mt-12 relative z-50"
                                        >
                                            <Link href="#readme-section" className="inline-block">
                                                <div className="btn btn-primary btn-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95 transition-all pointer-events-auto">
                                                    Get Started
                                                </div>
                                            </Link>
                                        </motion.div>

                                        {[...Array(numFloatingElements)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`absolute rounded-full bg-gradient-to-r from-gray-400/40 to-gray-500/50 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm pointer-events-none z-10`}
                                                style={{
                                                    width: Math.random() * 120 + 60,
                                                    height: Math.random() * 120 + 60
                                                }}
                                                initial={{
                                                    x: Math.random() * window.innerWidth - window.innerWidth/2,
                                                    y: Math.random() * window.innerHeight - window.innerHeight/2,
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    x: Math.random() * window.innerWidth - window.innerWidth/2,
                                                    y: Math.random() * window.innerHeight - window.innerHeight/2,
                                                    opacity: [0, 0.6, 0],
                                                    scale: [0, 1, 0]
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 8 + i * 1.5, // Slightly faster animations
                                                    delay: i * 0.3, // Reduced delay for more frequent spawning
                                                    ease: "linear"
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Readme />
                    </>
                )}
            </AnimatePresence>
        </>
    );
}