"use client";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

export default function BasePage({
    children,
}: {
    children: React.ReactNode;
    isHomepage?: boolean;
}) {
    const theme = useTheme();
    return (
        <>
            <Header />
            <Box bgcolor={theme.palette.background.default}>
                <Box>{children}</Box>
            </Box>
            <Footer />
        </>
    );
}
