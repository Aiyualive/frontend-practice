import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

export function Section({ children, ref, overflow="hidden", ...props }: BoxProps) {
    return (
        <Box

            {...props}
            ref={ref}
            component="div"
            overflow={overflow}
            width="100%"
            height={"100vh"}
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            {children}
        </Box>
    );
}
