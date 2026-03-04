import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => (
    <Box
        component="footer"
        py={2}
        textAlign="center"
        width={"100%"}
        bgcolor="background.paper"
    >
        <Typography variant="caption" color="text.secondary">
            © 2026 Elite Titan Athletx Sports. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;
