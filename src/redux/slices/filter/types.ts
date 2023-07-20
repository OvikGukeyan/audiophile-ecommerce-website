export type CategoryType = {
    name: string;
    image: string;
} 

export interface FiltersSliceState {
    category: CategoryType | null;
    currentItemId: number | null;
}
