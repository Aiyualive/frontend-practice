import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

interface SectionWrapperProps extends BoxProps {
    children: React.ReactNode;
}

export function Section({ children, ...props }: SectionWrapperProps) {
    return (
        <Box
            {...props}
            component="div"
            overflow={"hidden"}
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
