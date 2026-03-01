import AllTrenchesFlyer from "../../../public/5v5_ALLTRNECHES-flyer.png";

interface CampClinic {
    id: number;
    title: string;
    date: string;
    imageSrc: string;
    link: string;
}

export const campsClinicsData: CampClinic[] = [
    {
        id: 1,
        title: "5v5 ALLTRENCHES (High School)",
        date: "March 28, 2026",
        imageSrc: AllTrenchesFlyer.src,
        link: "https://forms.gle/k4PsZ2oHTpTtYweo9",
    },
    {
        id: 2,
        title: "5v5 ALLTRENCHES (Youth)",
        date: "March 28, 2026",
        imageSrc: AllTrenchesFlyer.src,
        link: "https://forms.gle/k4PsZ2oHTpTtYweo9",
    },
];
