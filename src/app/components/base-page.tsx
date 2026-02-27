"use client";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import Header from "./header";

export default function BasePage({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    return (
        <Box bgcolor={theme.palette.background.default}>
            <Header />
            <Box padding={theme.spacing(3)} pt={0}>
                {children}
            </Box>
        </Box>
    );
}
