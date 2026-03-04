"use client";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import Texture from "../../../public/grain-texture.jpg";

export default function BasePage({
    children,
    isHomepage = false,
}: {
    children: React.ReactNode;
    isHomepage?: boolean;
}) {
    const theme = useTheme();
    return (
        <>
            <Header />
            <Box
                bgcolor={theme.palette.background.default}
                zIndex={1}
                sx={
                    isHomepage
                        ? {}
                        : {
                              position: "relative",
                              "&::after": {
                                  content: '""',
                                  position: "fixed",
                                  inset: 0,
                                  backgroundImage: `url(${Texture.src})`,
                                  zIndex: -1,
                                  opacity: 0.3,
                                  pointerEvents: "none",
                                  backgroundSize: "contain",
                              },
                          }
                }
            >
                <Box />
                <Box>{children}</Box>
            </Box>
            <Footer />
        </>
    );
}
