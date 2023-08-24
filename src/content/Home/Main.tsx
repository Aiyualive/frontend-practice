import React from "react";
import { LandingPage } from "./LandingPage";
import { SectionCarousel } from "./SectionCarousel";
import { SectionConfig } from "./sections";

export function Main() {
    return (
        <div className="flex flex-col w-full w-full">
            <LandingPage id={SectionConfig.landingPage.id}/>
            <SectionCarousel id={SectionConfig.carousel.id}/>
        </div>
    );
}
