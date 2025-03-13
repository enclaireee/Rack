"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export default function Footer() {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%" }}>
            <div className="fixed w-full h-[400px] bottom-0 z-10">
                <div className="h-[400px] bg-primary text-black p-6 sm:px-12 flex justify-between items-end relative overflow-hidden">
                    <div className="flex flex-col items-start relative z-20">
                        <div className="relative">
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={120}
                                height={50}
                                className="object-contain w-[120px] sm:w-[150px] h-auto"
                            />
                        </div>
                        <div className="mt-2 sm:mt-4">© Copyright Rack 2025</div>
                        <div className="text-xs">Made by <Link href="https://github.com/enclaireee"> Enclaire </Link></div>
                    </div>

                    <div className="bottom-4 right-6 sm:right-12 flex items-center z-20">
                        <Link href="https://github.com/enclaireee/Rack">
                            <Github className="size-6 sm:size-10 hover:text-gray-300 transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}