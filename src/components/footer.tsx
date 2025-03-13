"use client";
import React from 'react';
import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
    return (
        <div className="relative w-full h-[100px] sm:h-[250px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%" }}>
            <div className="fixed w-full h-[250px] bottom-0 z-10">
                <div className="h-[250px] bg-primary text-white p-6 sm:px-12 flex justify-between items-end relative overflow-hidden">
                    <div className="flex flex-col items-start relative z-20">
                        <div className="relative">
                            <div className="text-3xl sm:text-5xl font-extrabold">Rack</div>
                        </div>
                        <div className="mt-2 sm:mt-4 text-xs sm:text-sm">© Copyright Rack 2024</div>
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