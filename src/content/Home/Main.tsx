import React from "react";
import { LandingPage } from "./LandingPage";
import { SectionCarousel } from "./SectionCarousel";
import { SectionConfig } from "./sections";
import { Investors } from "./Investors";

export function Main() {
    return (
        <div className="flex flex-col w-full w-full">
            <LandingPage id={SectionConfig.landingPage.id}/>

            <SectionCarousel id={SectionConfig.carousel.id}/>
            {/*<Investors id={SectionConfig.investors.id}/>*/}
            <Investors id={SectionConfig.investors.id}/>
        </div>
    );
}
