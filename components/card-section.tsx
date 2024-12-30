"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function CardSection() {
  return (
    <div className="flex items-center justify-center">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50/10 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black/40 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-[32rem] rounded-xl p-6 border">
          <div className="flex flex-col space-y-3">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
                Professional Achievement NFT
              </h3>
              <p className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300">
                Milestone: Senior Developer Promotion
              </p>
            </div>
            
            <div className="w-full mt-2">
              <Image
                priority
                src="/achievement-badge.png"
                height="400"
                width="400"
                className="h-52 w-full object-contain rounded-xl group-hover/card:shadow-xl bg-black/20 p-2"
                alt="Achievement Glyph"
              />
            </div>
            
            {/* NFT Traits */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <CardItem
                translateZ={30}
                className="bg-black/10 dark:bg-white/10 p-3 rounded-lg transition-all duration-300 ease-out hover:bg-black/20 dark:hover:bg-white/20"
              >
                <div className="text-xs text-neutral-500 dark:text-neutral-300">Experience</div>
                <div className="text-sm font-bold text-neutral-600 dark:text-white">5+ Years</div>
              </CardItem>
              <CardItem
                translateZ={30}
                className="bg-black/10 dark:bg-white/10 p-3 rounded-lg transition-all duration-300 ease-out hover:bg-black/20 dark:hover:bg-white/20"
              >
                <div className="text-xs text-neutral-500 dark:text-neutral-300">Level</div>
                <div className="text-sm font-bold text-neutral-600 dark:text-white">Senior</div>
              </CardItem>
              <CardItem
                translateZ={30}
                className="bg-black/10 dark:bg-white/10 p-3 rounded-lg transition-all duration-300 ease-out hover:bg-black/20 dark:hover:bg-white/20"
              >
                <div className="text-xs text-neutral-500 dark:text-neutral-300">Projects</div>
                <div className="text-sm font-bold text-neutral-600 dark:text-white">50+</div>
              </CardItem>
              <CardItem
                translateZ={30}
                className="bg-black/10 dark:bg-white/10 p-3 rounded-lg transition-all duration-300 ease-out hover:bg-black/20 dark:hover:bg-white/20"
              >
                <div className="text-xs text-neutral-500 dark:text-neutral-300">Skills</div>
                <div className="text-sm font-bold text-neutral-600 dark:text-white">Full Stack</div>
              </CardItem>
            </div>

            {/* Action Button */}
            <div className="flex justify-center items-center mt-6">
              <CardItem
                translateZ={30}
                className="px-8 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold w-full transition-all duration-300 ease-out"
              >
                Mint NFT
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
