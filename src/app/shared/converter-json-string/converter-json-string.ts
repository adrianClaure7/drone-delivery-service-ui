/**
 * This TypeScript class provides functions to convert strings to JSON representations and vice versa.
 * It includes conversion functions for drones, locations, and drone trips.
 */
import { Drone } from "../interfaces/drone";
import { DroneTrip } from "../interfaces/droneTrip";
import { Location } from "../interfaces/location";

export class ConverterJsonString {

    /**
     * Converts a string representation of drones and locations to JSON.
     * The string should follow a specific format with drones listed first and locations listed after.
     *
     * @param data - The string representation of drones and locations.
     * @returns An object containing the converted drones and locations.
     */
    static convertStringToJsonOfDronesAndLocations(data: string) {
        const lines = data.trim().split("\n");
        let drones: Drone[] = [];
        const locations: Location[] = [];

        lines.forEach(line => {
            const [name, value] = line.trim().split(", ");

            if (line.includes("Drone")) {
                drones = ConverterJsonString.convertStringToDrones(line);
            } else if (name.includes("Location")) {
                const locationName = name.replace("[", "").replace("]", "");
                const weight = parseInt(value.replace("[", "").replace("]", ""));
                locations.push({ name: locationName, weight });
            }
        });
        if (drones.length == 0) {
            return { error: 'Error' };
        }
        return { drones, locations };
    }

    /**
     * Converts a string representation of drones to an array of Drone objects.
     * Each line of the string should represent a single drone with its name and max weight.
     *
     * @param data - The string representation of drones.
     * @returns An array of Drone objects.
     */
    static convertStringToDrones(data: string) {
        const droneData = data.split(", ");
        const drones = [];
        if (droneData.length < 100) {
            for (let i = 0; i < droneData.length; i += 2) {
                const droneName = droneData[i].replace("[", "").replace("]", "");
                const maxWeight = parseInt(droneData[i + 1].replace("[", "").replace("]", ""));
                drones.push({ droneName, maxWeight });
            }
        }

        return drones;
    }

    /**
     * Converts an array of DroneTrip objects to a string representation.
     * The string represents the drone trips with their drone names and associated locations.
     *
     * @param data - An array of DroneTrip objects.
     * @returns The string representation of the drone trips.
     */
    static convertDroneTripsJsonToString(data: DroneTrip[]) {
        let result = "";

        for (let i = 0; i < data.length; i++) {
            const drone = data[i];

            result += `[${drone.droneName}]\n`;

            for (let j = 0; j < drone.trips.length; j++) {
                const trip = drone.trips[j];

                result += `Trip #${trip.tripNumber}\n`;

                const locations = trip.locations.map((location: any) => `[${location.locationName}]`);
                result += locations.join(", ") + "\n";
            }
        }

        return result;
    }
}