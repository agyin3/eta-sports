"use client";
import { Box, Typography, Stack, Button, useTheme } from "@mui/material";
import BasePage from "../components/base-page";
import { campsClinicsData } from "../data/homepage";

export default function CampsClinicsPage() {
    const theme = useTheme();
    return (
        <BasePage>
            <Box
                component="section"
                marginBottom={theme.spacing(3)}
                p={theme.spacing(3)}
                id="camps-clinics"
            >
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    gutterBottom
                >
                    CAMPS & CLINICS
                </Typography>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={3}
                    justifyContent="center"
                    flexWrap="wrap"
                    alignItems="center"
                >
                    {campsClinicsData.map((camp) => (
                        <Stack
                            key={camp.id}
                            justifyContent="center"
                            alignItems="center"
                            gap={1.5}
                            width="45%"
                        >
                            <Box
                                width={{ xs: "264px", md: "396px" }}
                                height={{ xs: "352px", md: "527px" }}
                                sx={{
                                    backgroundImage: `url(${camp.imageSrc})`,
                                    backgroundSize: "cover", // fills entire container
                                    backgroundPosition: "center", // keeps image centered
                                    backgroundRepeat: "no-repeat",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            ></Box>
                            <Typography
                                variant="body1"
                                align="center"
                                whiteSpace="pre-wrap"
                            >
                                {camp.title}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {camp.date}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => window.open(camp.link, "_blank")}
                            >
                                Register
                            </Button>
                        </Stack>
                    ))}
                </Box>
                {/* <Button
                    variant="text"
                    size="large"
                    sx={{ margin: "auto", display: "block" }}
                >
                    View More
                </Button> */}
            </Box>
        </BasePage>
    );
}
