import { TripLocation } from "./tripLocation";

export interface Trip {
    tripNumber: number;
    locations: TripLocation[];
}