"use client";
import Box from "@mui/material/Box";
import { Button, List, Stack, Typography, useTheme } from "@mui/material";
import BasePage from "./components/base-page";
import FullLogo from "../../public/elite-titan-athletx-logo-full.png";
import Texture from "../../public/grain-texture.jpg";
import Image from "next/image";

export default function Home() {
    const theme = useTheme();
    return (
        <BasePage isHomepage>
            <Box component="section">
                <Box
                    component="div"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="calc(100vh - 64px - 56px)"
                    // Subtract header height (64px) and footer height (56px)
                    sx={{ background: theme.gradients.radial }}
                >
                    <Box
                        maxHeight={{ sm: "362px", md: "724px" }}
                        maxWidth={{ sm: "362px", md: "724px" }}
                    >
                        <Image
                            src={FullLogo}
                            alt="Elite Titan Athletx logo"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Box>
                </Box>
            </Box>
        </BasePage>
    );
}
