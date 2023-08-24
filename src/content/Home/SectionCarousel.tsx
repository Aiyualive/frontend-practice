import { Section } from "../../components/Container/Section";
import { CarouselItem } from "./CarouselItem";

export function SectionCarousel({...props}){
    return (
        <Section {...props}>
            {/*carousel*/}
            <CarouselItem/>

            {/*<Features/>*/}
        </Section>
    );
}