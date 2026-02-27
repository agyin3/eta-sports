import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
        >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                <IconButton
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                >
                    <Typography variant="h5" component="span">
                        &times;
                    </Typography>
                </IconButton>
            </Box>
            <Divider />
            <List>
                {links.map((link) => (
                    <ListItem key={link.name} disablePadding>
                        <ListItemButton component="a" href={link.href}>
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            color="default"
            elevation={1}
            sx={{
                borderBottomWidth: "1px",
                borderBottomColor: "mustard",
                borderBottomStyle: "solid",
            }}
        >
            <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: 2 }}>
                {/* Hamburger for Mobile */}
                <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                {/* Logo */}

                <Box
                    display="flex"
                    flexGrow={1}
                    alignItems={"center"}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                >
                    <Link href="/" passHref>
                        <Image
                            src="/elite-titan-athletx-logo.png"
                            alt="Elite Titan Athletx logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                </Box>
                {/* Desktop Links */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    {links.map((link) => (
                        <Button
                            key={link.name}
                            href={link.href}
                            color="inherit"
                            sx={{ fontWeight: 500 }}
                        >
                            {link.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
