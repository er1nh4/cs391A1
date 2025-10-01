export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    // Additional fields
    gender: string;
    type: string;
    episode: [];
}