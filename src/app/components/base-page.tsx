"use client";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

export default function BasePage({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    return (
        <Box bgcolor={theme.palette.background.default}>
            <Header />
            <Box>{children}</Box>
            <Footer />
        </Box>
    );
}
