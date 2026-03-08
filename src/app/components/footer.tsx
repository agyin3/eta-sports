import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer: React.FC = () => (
    <Box
        component="footer"
        py={2}
        px={4}
        textAlign="center"
        width={"100%"}
        display="flex"
        justifyContent={{ xs: "center", md: "space-between" }}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
    >
        <Typography variant="caption" color="text.secondary">
            © 2026 Elite Titan Athletx Sports. All rights reserved.
        </Typography>

        <Box
            mt="auto"
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
        >
            <Link
                href="https://www.instagram.com/elitetitanathletx/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton size="small" aria-label="Instagram" color="primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
                            fill="currentColor"
                        />
                    </svg>
                </IconButton>
            </Link>
        </Box>
    </Box>
);

export default Footer;
