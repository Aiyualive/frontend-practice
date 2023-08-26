import { Section } from "../../components/Container/Section";
import { CarouselItem } from "./CarouselItem";
import { ScrollAnimation } from "./ScrollAnimation";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProductContainer } from "@components/Container/ProductContainer";
import Box, { BoxProps } from "@mui/material/Box";
import palette from "@styles/palette.module.scss";
import style from "@styles/style.module.scss";

export function SectionCarousel({...props}){
    const containerRef = useRef(null);
    // const targetRef1 = useRef(null);
    // const targetRef2 = useRef(null);
    //
    // const { scrollYProgress } = useScroll({
    //     // container: containerRef,
    //     target: containerRef,
    //     offset: ["start end", "end end"]
    // });
    // // only start reducing scale when the container has come into view
    // // as each container comes into veiw reduce their scale
    //
    // const bottomShadowValue = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["-100%", "0%"]
    // );
    // const imageValue = useTransform(scrollYProgress, [0, 1], ["100%", "70%"]);
    // const imageValue2 = useTransform(scrollYProgress, [0.1, 1], ["100%", "80%"]);
    // const imageValue3 = useTransform(scrollYProgress, [0.2, 1], ["100%", "90%"]);
    //
    // const containerRef1 = useRef<HTMLDivElement | null>(null);
    // const containerRef2 = useRef<HTMLDivElement | null>(null);
    // const containerRef3 = useRef<HTMLDivElement | null>(null);
    //
    // const obj = [
    //     {ref: containerRef1, percentage: "70%"},
    //     {ref: containerRef2, percentage: "80%"},
    //     {ref: containerRef3, percentage: "90%"},
    // ];

    const containerRef1 = useRef<HTMLDivElement | null>(null);
    const scroll1 = useScroll({
        target: containerRef1,
        offset: ["start end", "end end"]
    });
    const scaleValue1 = useTransform(scroll1.scrollYProgress, [0, 1], ["100%", "70%"]);

    const containerRef2 = useRef<HTMLDivElement | null>(null);
    const scroll2 = useScroll({
        target: containerRef2,
        offset: ["start end", "end end"]
    });
    const scaleValue2 = useTransform(scroll2.scrollYProgress, [0, 1], ["100%", "80%"]);

    const containerRef3 = useRef<HTMLDivElement | null>(null);
    const scroll3 = useScroll({
        target: containerRef3,
        offset: ["start end", "end end"]
    });
    const scaleValue3 = useTransform(scroll3.scrollYProgress, [0, 1], ["100%", "90%"]);


    const obj = [
        {ref: containerRef1, percentage: scaleValue2},
        {ref: containerRef2, percentage: scaleValue3},
        {ref: containerRef3, percentage: "100%"},
    ];

    return (
        <section>
            {obj.map(({ref, percentage}, index) =>
                // <motion.div
                //     id={`Card${index}`}
                //     key={`Card${index}`}
                //     style={{
                //         // scale: `calc(${imageValue}% - ${index * 10}%)`,
                //         scale: item,
                //         width: "100%",
                //         height: "500px",
                //         position: "sticky",
                //         top: `${100 + index * 30}px`,
                //         backgroundColor: "blue"
                //     }}
                // >
                //     Card index
                // </motion.div>
                // <Test2 index={index} pct={percentage} ref>
                //     {index}
                // </Test2>
                <motion.div
                    key={`Card${index}`}
                    ref={ref}
                    style={{
                        // scale: `calc(${imageValue}% - ${index * 10}%)`,
                        scale: percentage,
                        // width: "100%",
                        height: "500px",
                        position: "sticky",
                        top: `${100 + index * 50}px`,
                        backgroundColor: "blue"
                    }}
                >
                    {index}
                </motion.div>
            )}
        </section>
    );
}
// <motion.div style={{ scale: imageValue }} key={`Card${item}`}>
//     <ProductContainer
//         id={`Card${item}`}
//
//         position={"sticky"}
//         top={`${100 + index * 30}px`}
//     >
//         Card {item}
//     </ProductContainer>
// </motion.div>
// <Section
//     {...props}
//     ref={containerRef}
//     flexDirection={"column"}
//     overflow={"visible"}
//     rowGap={"50px"}
// >
//     {[targetRef1,targetRef2].map((item, index) =>
//         <ProductContainer
//             id={`Card${item}`}
//             position={"sticky"}
//             top={`${100 + index * 30}px`}
//         >
//             Card index
//         </ProductContainer>
//     )}
// </Section>

export function Test2({
    children, index, pct, ref,...props
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleValue = useTransform(scrollYProgress, [0, 1], ["100%", pct]);

    return (
        <motion.div
            ref={index === 0 ? null : containerRef}
            style={{
                // scale: `calc(${imageValue}% - ${index * 10}%)`,
                scale: scaleValue,
                width: "100%",
                height: "500px",
                position: "sticky",
                top: `${100 + index * 50}px`,
                backgroundColor: "blue"
            }}
        >
            {index}
        </motion.div>
    );
}
export function Test({
    children,
    ...props
}: BoxProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["end start"]
    });

    const scaleValue = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);

    return (
        <motion.div style={{ scale: scaleValue }} ref={containerRef}>
            <Box
                {...props}
                width={"500px"}
                height={"300px"}
                component="div"
                position={"sticky"}
                padding={"16px"}
                boxShadow={`-5px 5px ${palette.lightRed}`}
                flexDirection={"column"}
                borderRadius={style.borderRadiusMd}
                display="flex"
                textAlign="center"
                justifyContent="center"
                sx={{
                    background: (theme) => theme.palette.primary.main,
                }}
            >
                {children}
            </Box>
        </motion.div>
    );
}

// <div className="copy">
//     <h2>Lorem ipsum dolor sit amet</h2>
// </div>
// <div className="img-container">
//     <motion.div className="img-inner" style={{ translateX: imageValue }}>
//         <motion.div
//             className="bottom-shadow"
//             style={{ translateX: bottomShadowValue }}
//         />
//         <img src={"/images/main-screen.svg"} alt="a green plant" />
//         <motion.div
//             className="top-shadow"
//             style={{ translateX: topShadowValue }}
//         />
//     </motion.div>
// </div>