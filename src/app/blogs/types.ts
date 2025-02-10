import { StaticImageData } from "next/image";

export interface blogts {
    id: number;
    blogimg :StaticImageData,
    blogtitle: string;
    innerlang: string[];
    innerpara: string;
    para: string;
}

