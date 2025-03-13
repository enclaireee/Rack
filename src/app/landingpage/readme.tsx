"use client";
import { motion } from "motion/react";

const Readme = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <motion.div
            id="readme-section"
            className="min-h-screen w-full bg-black text-white py-12 px-4 md:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
        >
            <div className="max-w-4xl mx-auto pt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Welcome to Rack</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        A simple organization platform built by students, for students.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        variants={fadeInVariants}
                        className="card bg-neutral shadow-lg"
                    >
                        <div className="card-body">
                            <div className="text-3xl mb-3">📁</div>
                            <h3 className="card-title text-lg">Easy File Organization</h3>
                            <p className="text-gray-400">Keep track of all your assignments and notes in one place.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInVariants}
                        className="card bg-neutral shadow-lg"
                    >
                        <div className="card-body">
                            <div className="text-3xl mb-3">🏷️</div>
                            <h3 className="card-title text-lg">Simple Tag System</h3>
                            <p className="text-gray-400">Create custom tags to categorize your school work.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInVariants}
                        className="card bg-neutral shadow-lg"
                    >
                        <div className="card-body">
                            <div className="text-3xl mb-3">🔍</div>
                            <h3 className="card-title text-lg">Quick Search</h3>
                            <p className="text-gray-400">Find your documents instantly using tags or names.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInVariants}
                        className="card bg-neutral shadow-lg"
                    >
                        <div className="card-body">
                            <div className="text-3xl mb-3">🎓</div>
                            <h3 className="card-title text-lg">Student-Friendly</h3>
                            <p className="text-gray-400">Designed specifically for organizing coursework and projects.</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="divider mb-10"
                    variants={fadeInVariants}
                />

                <motion.div
                    className="mb-12"
                    variants={fadeInVariants}
                >
                    <h3 className="text-2xl font-bold text-center mb-6">Getting Started is Easy</h3>
                    <div className="steps steps-vertical md:steps-horizontal w-full">
                        <div className="step step-primary">Sign Up</div>
                        <div className="step step-primary">Create Tags</div>
                        <div className="step step-primary">Start Organizing</div>
                    </div>
                </motion.div>

                <motion.div
                    className="card bg-accent text-accent-content max-w-md mx-auto"
                    variants={fadeInVariants}
                >
                    <div className="card-body">
                        <h3 className="card-title text-xl">Ready to get organized?</h3>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2">✓</span> Simple tag organization
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✓</span> Made for students
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✓</span> Free to use
                            </li>
                        </ul>
                        <div className="card-actions justify-center mt-4">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Readme;