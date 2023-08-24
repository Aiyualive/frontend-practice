// Main inspiration: https://www.youtube.com/watch?v=9paBIA2R5C0
import React, {useState} from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {MobileOverlay} from "./MobileOverlay";
import {HeaderBurgerMenu, HeaderLogo, HeaderButtons,} from "./HeaderSections";


export function StandardHeader() {
    return (
        <>
            {/* Left */}
            <Box
                component="div"
                columnGap="12px"
                marginLeft={"20px"}
                display={{ xs: "none", md: "flex" }}
            >

            </Box>

            {/* Right */}
            <Box
                component="div"
                display="flex"
                justifyContent={"center"}
                flexGrow={1}
            >
                <Box component="div"
                    display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
                    sx={{marginRight: "16px"}}
                >
                    {/*<DropdownMenu title="Menu" dropdownItems={infoSections} />*/}
                    <HeaderButtons />
                </Box>
            </Box>
        </>
    );
}


export function Header({ headerPosition }) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <>
            <AppBar
                color={"transparent"}
                sx={{
                    boxShadow: "unset",
                    zIndex: 10,
                    borderBottom: "1px solid #E4EBFF",
                    backdropFilter: "blur(10px)"
                }}
                position={headerPosition}
            >
                <Container className="!max-w-none !mx-0">
                    <Toolbar
                        disableGutters
                        sx={{
                            marginY: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            paddingRight: "0px"
                        }}
                    >
                        {/* Either show Logo or hamburger*/}
                        <Box component="div" display={{ xs: "none", md: "flex"}}>
                            <HeaderLogo />
                        </Box>

                        <Box component="div" display={{ xs: "flex", md: "none" }}>
                            <HeaderBurgerMenu openMenuStateFun={() => setOpenMenu(true)} />
                        </Box>

                        {/* Header content */}
                        <StandardHeader/>
                    </Toolbar>
                </Container>
            </AppBar>

            { openMenu && <MobileOverlay setOpenMenu={setOpenMenu}/>}
        </>
    );
}