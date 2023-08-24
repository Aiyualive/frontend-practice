import React from "react";
import {IconButton} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Text } from "../../Text/TextComponent";
import { TextBackground } from "../../Text/Typography";
import Button from "@mui/material/Button";

interface HeaderActionType {
    name: string
}
export const HeaderActions: Record<string, HeaderActionType> = {
    products: {
        name: "Products",
    },
    docs: {
        name: "Docs"
    },
    mission: {
        name: "Mission"
    },
    changeLog: {
        name: "Changelog"
    }
};

const actionList = Object.values(HeaderActions).map(action => ({
    name: action.name
}));


export function HeaderLogo(){
    const AR = 168/120;
    return (
        <Link href="/" style={{display: "flex", alignItems: "center"}}>
            <Text.H5
                textBackground={TextBackground.none}
                paddingLeft={"8px"}
                display={{ xs: "none", md: "none", lg: "flex", xl: "flex" }}
            >
                sphere
            </Text.H5>
        </Link>
    );
}

export function HeaderBurgerMenu({openMenuStateFun, mobile = false}) {
    return (
        <IconButton onClick={openMenuStateFun}>
            <Image
                src={mobile ? "/icons/hamburgerEaten.png" : "/icons/hamburger.png"}
                alt="burgerMenu"
                width={46}
                height={46}
                priority={true}
            />
        </IconButton>
    );
}

export function HeaderButtons({color = "#FFDDA8", scale = 1}: {color?: string, scale?: number }) {
    return (
        <Box
            component="div"
            className="flex gap-x-2 items-center"
        >
            {/*<CartButton/>*/}
            {actionList.map(({name}) => (
                <Link href={`/${name}`} >
                    <Button>
                        {name}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}


