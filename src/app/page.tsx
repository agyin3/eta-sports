"use client";
import Box from "@mui/material/Box";
import { List, Typography, useTheme } from "@mui/material";
import Header from "./components/header";
import BasePage from "./components/base-page";
import Image from "next/image";
import FullLogo from "../../public/elite-titan-athletx-full.jpg";

export default function Home() {
    const theme = useTheme();
    return (
        <BasePage>
            <>
                {/* Mobile Logo */}
                <Box
                    component="section"
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
                    component="section"
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
            </>
            <Box component="div">
                <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                >
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Typography variant="h2">BUILD</Typography>
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
                    <Box flex={1} padding={{ md: theme.spacing(3) }}></Box>
                </Box>
                <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                >
                    <Box flex={1} padding={{ md: theme.spacing(3) }}></Box>
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Typography variant="h2">BATTLE</Typography>
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
                    flexDirection={{ xs: "column", md: "row" }}
                >
                    <Box flex={1} padding={{ md: theme.spacing(3) }}>
                        <Typography variant="h2">BECOME</Typography>
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
                    <Box flex={1} padding={{ md: theme.spacing(3) }}></Box>
                </Box>
            </Box>
        </BasePage>
    );
}
