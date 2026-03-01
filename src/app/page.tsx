"use client";
import Box from "@mui/material/Box";
import { Button, List, Stack, Typography, useTheme } from "@mui/material";
import BasePage from "./components/base-page";
import Image from "next/image";
import FullLogo from "../../public/elite-titan-athletx-full.jpg";
import BuildImage from "../../public/build-philosophy.jpg";
import BattleImage from "../../public/battle-philosophy.jpg";
import BecomeImage from "../../public/become-philosophy.jpg";
import { campsClinicsData } from "./data/homepage";

export default function Home() {
    const theme = useTheme();
    return (
        <BasePage>
            <Box component="section" px={theme.spacing(3)} id="home">
                {/* Mobile Logo */}
                <Box
                    component="div"
                    width="100%"
                    display={{ xs: "flex", md: "none" }}
                    justifyContent="center"
                >
                    <Image
                        src={FullLogo}
                        alt="Elite Titan Athletx logo"
                        style={{ maxHeight: "362px", maxWidth: "362px" }}
                    />
                </Box>
                {/* Desktop Logo */}
                <Box
                    component="div"
                    width="100%"
                    display={{ xs: "none", md: "flex" }}
                    justifyContent="center"
                >
                    <Image
                        src={FullLogo}
                        alt="Elite Titan Athletx logo"
                        style={{ maxHeight: "724px", maxWidth: "724px" }}
                    />
                </Box>
            </Box>
            {/* Camps & Clinics */}
            <Box
                component="section"
                marginBottom={theme.spacing(3)}
                px={theme.spacing(3)}
                id="camps-clinics"
            >
                <Typography variant="h3" align="center" gutterBottom>
                    CAMPS & CLINICS
                </Typography>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={3}
                    justifyContent="center"
                >
                    {campsClinicsData.map((camp) => (
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            gap={1.5}
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
                            <Typography variant="body1">
                                {camp.title}
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
            {/* About Section */}
            <Box component="section" p={theme.spacing(3)} id="about">
                <Typography variant="h3" align="center" gutterBottom>
                    OUR PHILOSOPHY
                </Typography>
                <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                >
                    <Box
                        flex={1}
                        padding={{ md: theme.spacing(3) }}
                        marginBottom={{ xs: theme.spacing(3), md: 0 }}
                    >
                        <Typography variant="h4">BUILD</Typography>
                        <Typography>
                            Everything elite starts with the build.
                            <br />
                            <br />
                            We build strength — physically and mentally.
                            <br />
                            <br />
                            We build explosive movement and technical mastery.
                            <br /> <br />
                            We build discipline, structure, and daily habits
                            that separate serious athletes from the rest. <br />{" "}
                            <br />
                            At Elite Titan Athletx, development isn’t random.
                            It’s intentional.
                            <br /> <br />
                            We focus on: <br /> <br />
                            <ul>
                                <li>Foundational technique</li>
                                <li>Speed and power development</li>
                                <li>Football IQ and situational awareness</li>
                                <li>Character and accountability</li>
                            </ul>
                            Because before an athlete can dominate, they must
                            first be built correctly.
                            <br /> <br />
                            Elite performance is constructed — not wished for.
                        </Typography>
                    </Box>
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Box
                            width="100%"
                            height={{ xs: "324px", md: "100%" }}
                            sx={{
                                backgroundImage: `url(${BuildImage.src})`,
                                backgroundSize: "cover", // fills entire container
                                backgroundPosition: "center", // keeps image centered
                                backgroundRepeat: "no-repeat",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            marginBottom={{ xs: theme.spacing(1.5), md: 0 }}
                        ></Box>
                    </Box>
                </Box>
                <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    marginBottom={{ xs: theme.spacing(3), md: 0 }}
                >
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Box
                            width="100%"
                            height={{ xs: "324px", md: "100%" }}
                            sx={{
                                backgroundImage: `url(${BattleImage.src})`,
                                backgroundSize: "cover", // fills entire container
                                backgroundPosition: "center", // keeps image centered
                                backgroundRepeat: "no-repeat",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            marginBottom={{ xs: theme.spacing(1.5), md: 0 }}
                        ></Box>
                    </Box>
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Typography variant="h4">BATTLE</Typography>
                        <Typography>
                            Competition reveals character.
                            <br />
                            <br />
                            Every rep is earned.
                            <br />
                            Every drill has purpose.
                            <br />
                            Every session demands intensity.
                            <br />
                            <br />
                            We train athletes to battle through adversity, push
                            past limits, and compete when it matters most.
                            Whether it’s in training, in the classroom, or under
                            the lights — we prepare them to respond, not react.
                            <br />
                            <br />
                            Battling means:
                            <br />
                            <br />
                            <ul>
                                <li>Embracing discomfort</li>
                                <li>Competing with relentless effort</li>
                                <li>Staying composed under pressure</li>
                                <li>Finishing stronger than you started</li>
                            </ul>
                            <br />
                            We don’t create spectators.
                            <br />
                            We develop competitors.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    marginBottom={{ xs: theme.spacing(3), md: 0 }}
                >
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Typography variant="h4">BECOME</Typography>
                        <Typography>
                            When the build is strong and the battle is embraced,
                            transformation happens.
                            <br />
                            <br />
                            Athletes don’t just improve — they evolve.
                            <br />
                            <br />
                            <ul>
                                <li>They become leaders.</li>
                                <li>They become disciplined.</li>
                                <li>
                                    They become confident in their preparation.
                                </li>
                                <li>
                                    They become accountable to a higher
                                    standard.
                                </li>
                            </ul>
                            <br />
                            At Elite Titan Athletx, we’re not just developing
                            football players.
                            <br />
                            We’re shaping individuals who understand what it
                            takes to succeed long after the game ends.
                            <br />
                            <br />
                            They don’t chase greatness.
                            <br />
                            <br />
                            They become it.
                        </Typography>
                    </Box>
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Box
                            width="100%"
                            height={{ xs: "324px", md: "100%" }}
                            sx={{
                                backgroundImage: `url(${BecomeImage.src})`,
                                backgroundSize: "cover", // fills entire container
                                backgroundPosition: "center", // keeps image centered
                                backgroundRepeat: "no-repeat",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            marginBottom={{ xs: theme.spacing(1.5), md: 0 }}
                        ></Box>
                    </Box>
                </Box>
            </Box>
        </BasePage>
    );
}
