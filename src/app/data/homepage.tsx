import AllTrenchesFlyer from "../../../public/5v5_ALLTRNECHES-flyer.png";
import Sp5derLinemanFlyer from "../../../public/lineman-camp-sp5der.png";

interface CampClinic {
    id: number;
    title: string;
    date: string;
    imageSrc: string;
    link: string;
}

export const campsClinicsData: CampClinic[] = [
    {
        id: 3,
        title: "Lineman Camp & Tryouts\n(13u/14u/HS)",
        date: "March 27, 2026",
        imageSrc: Sp5derLinemanFlyer.src,
        link: "https://forms.gle/qavBeeVF1RxvRCybA",
    },
    {
        id: 4,
        title: "Lineman Camp & Tryouts\n(8u/10u/12u)",
        date: "March 27, 2026",
        imageSrc: Sp5derLinemanFlyer.src,
        link: "https://forms.gle/MiGxBUdK4eAnvNVv9",
    },
    {
        id: 1,
        title: "5v5 ALLTRENCHES\n(High School)",
        date: "March 28, 2026",
        imageSrc: AllTrenchesFlyer.src,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfxyaPlUpfAhA_srk6vH4GhxHw1rYPTnH-7CiXMpE_eB0f_Lg/viewform?usp=pp_url&entry.567938642=High+School",
    },
    {
        id: 2,
        title: "5v5 ALLTRENCHES\n(Youth)",
        date: "March 28, 2026",
        imageSrc: AllTrenchesFlyer.src,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfxyaPlUpfAhA_srk6vH4GhxHw1rYPTnH-7CiXMpE_eB0f_Lg/viewform?usp=pp_url&entry.567938642=Youth",
    },
];
