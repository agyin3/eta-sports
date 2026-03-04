"use client";
import Box from "@mui/material/Box";
import { Button, List, Stack, Typography, useTheme } from "@mui/material";
import BasePage from "./components/base-page";
import FullLogo from "../../public/elite-titan-athletx-logo-full.png";

export default function Home() {
    const theme = useTheme();
    return (
        <BasePage>
            <Box component="section" px={theme.spacing(3)}>
                <Box
                    component="div"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="calc(100vh - 64px - 56px)" // Subtract header height
                    sx={{
                        backgroundImage: `url(${FullLogo.src})`,
                        backgroundSize: "contain", // fills entire container
                        backgroundPosition: "center", // keeps image centered
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* <Box
                        maxHeight={{ sm: "362px", md: "724px" }}
                        maxWidth={{ sm: "362px", md: "724px" }}
                    >
                        <Image
                            src={FullLogo}
                            alt="Elite Titan Athletx logo"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Box> */}
                </Box>
            </Box>
        </BasePage>
    );
}
