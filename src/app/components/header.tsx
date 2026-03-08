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
    { name: "Camps/Clinics", href: "/camps-clinics" },
    { name: "Our Philosophy", href: "/our-philosophy" },
];

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawer = (
        <Box
            width={250}
            display="flex"
            flexDirection="column"
            height="100%"
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
        >
            <Box display="flex" justifyContent="flex-end" p={1}>
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
                        <ListItemButton
                            component="a"
                            href={link.href}
                            onClick={(e) => {
                                const section = document.querySelector(
                                    link.href,
                                );
                                if (section) {
                                    e.preventDefault();
                                    section.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                        >
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box mt="auto" p={2} display="flex" justifyContent="center">
                <Link
                    href="https://www.instagram.com/elitetitanathletx/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton aria-label="Instagram" color="primary">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
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
            <Toolbar disableGutters sx={{ width: "100%", px: 3 }}>
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
                    justifyContent={{ md: "flex-start" }}
                    mx={{ xs: "auto" }}
                    position={{ xs: "absolute", md: "relative" }}
                    top={{ xs: "50%", md: "0" }}
                    left={{ xs: "50%", md: "0" }}
                    sx={{
                        transform: { xs: "translate(-50%, -50%)", md: "none" },
                    }}
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
                            color="inherit"
                            sx={{ fontWeight: 500 }}
                            component="a"
                            href={link.href}
                            onClick={(e) => {
                                const section = document.querySelector(
                                    link.href,
                                );
                                if (section) {
                                    e.preventDefault();
                                    section.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
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
