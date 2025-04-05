export interface FloorDataType {
    floorData: {
        id: number;
        heading: string;
        subtitle: string;
        headingColor: string;
        imageUrl: string;
        description: string;
        floorImages: {
            id: number;
            imageUrl: string;
            alt: string;
        }[];
        floorDesc: string;
    }
}