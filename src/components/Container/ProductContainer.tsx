import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import palette from "@styles/palette.module.scss";
import style from "@styles/style.module.scss";

export function ProductContainer({
    children,
    position="relative",
    ...props
}: BoxProps) {
    return (
        <Box
            {...props}
            width={"500px"}
            height={"300px"}
            component="div"
            position={position}
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
    );
}