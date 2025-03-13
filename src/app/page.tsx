"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
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
        },
        tap: {
            scale: 0.95
        }
    };

    const titleLetters = "Rack".split("");

    return (
        <AnimatePresence>
            {isLoaded && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-gradient-to-br from-primary to-base-300"
                        initial="hidden"
                        animate="visible"
                        variants={backgroundVariants}
                    />

                    <div className="flex h-screen w-full">
                        <div className="flex flex-col justify-center items-center w-full relative">
                            <div className="px-8 md:px-16 lg:px-24 text-center z-10">

                                <motion.div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/20 blur-2xl"
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
                                            className="text-7xl md:text-9xl text-primary-content font-extrabold z-10"
                                            variants={letterVariants}
                                        >
                                            {letter}
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.p
                                    className="text-2xl md:text-4xl text-secondary-content font-bold mt-2 z-10"
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
                                    className="mt-12"
                                >
                                    <motion.button
                                        className="btn btn-secondary btn-lg"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 15px rgba(255,255,255,0.5)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }}
                                    >
                                        Get Started
                                    </motion.button>
                                </motion.div>

                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute rounded-full bg-secondary/30 -z-10`}
                                        style={{
                                            width: Math.random() * 100 + 50,
                                            height: Math.random() * 100 + 50
                                        }}
                                        initial={{
                                            x: Math.random() * 1000 - 500,
                                            y: Math.random() * 1000 - 500,
                                            opacity: 0
                                        }}
                                        animate={{
                                            x: Math.random() * 1000 - 500,
                                            y: Math.random() * 1000 - 500,
                                            opacity: [0, 0.4, 0],
                                            scale: [0, 1, 0]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 10 + i * 2,
                                            delay: i * 0.5,
                                            ease: "linear"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}