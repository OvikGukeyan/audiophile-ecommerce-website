export type imageType = {
    mobile: string;
    tablet: string;
    desktop: string;
    tabletGor: string;

};
export type incledesItem = {
    quantity: number;
    item: string;
};
export type otherType = {
    id: number
    slug: string;
    name: string;
    image: imageType;
}
export type ItemType = {
    id: number;
    slug: string;
    name: string;
    image: imageType;
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: incledesItem[];
    gallery: {
        first: imageType;
        second: imageType;
        third: imageType;
    };
    others: otherType[];
}

export interface itemsSliceState {
    itemsArray: ItemType[];
    isLoaded: boolean;
    loadingRejected: boolean;
}
