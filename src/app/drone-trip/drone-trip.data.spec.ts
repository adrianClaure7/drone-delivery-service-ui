export const DroneTripMockData = {
   fileDronesLocations: '[DroneA], [200], [DroneB], [250], [DroneC], [100]\r\n[LocationA], [200]\r\n[LocationB], [150]\r\n[LocationC], [50]\r\n[LocationD], [150]\r\n[LocationE], [100]\r\n[LocationF], [200]\r\n[LocationG], [50]\r\n[LocationH], [80]\r\n[LocationI], [70]\r\n[LocationJ], [50]\r\n[LocationK], [30]\r\n[LocationL], [20]\r\n[LocationM], [50]\r\n[LocationN], [30] \r\n[LocationO], [20]\r\n[LocationP], [90]\r\n', // Provide the file content you want to test
   droneTrips: [
      {
         droneName: "DroneB",
         trips: [
            {
               tripNumber: 1,
               locations: [
                  {
                     locationName: "LocationA"
                  },
                  {
                     locationName: "LocationC"
                  }
               ]
            },
            {
               tripNumber: 2,
               locations: [
                  {
                     locationName: "LocationG"
                  },
                  {
                     locationName: "LocationJ"
                  },
                  {
                     locationName: "LocationM"
                  },
                  {
                     locationName: "LocationK"
                  },
                  {
                     locationName: "LocationN"
                  },
                  {
                     locationName: "LocationL"
                  },
                  {
                     locationName: "LocationO"
                  }
               ]
            },
            {
               tripNumber: 3,
               locations: [
                  {
                     locationName: "LocationD"
                  }
               ]
            }
         ]
      },
      {
         droneName: "DroneA",
         trips: [
            {
               tripNumber: 1,
               locations: [
                  {
                     locationName: "LocationF"
                  }
               ]
            },
            {
               tripNumber: 2,
               locations: [
                  {
                     locationName: "LocationB"
                  }
               ]
            },
            {
               tripNumber: 3,
               locations: [
                  {
                     locationName: "LocationH"
                  }
               ]
            }
         ]
      },
      {
         droneName: "DroneC",
         trips: [
            {
               tripNumber: 1,
               locations: [
                  {
                     locationName: "LocationE"
                  }
               ]
            },
            {
               tripNumber: 2,
               locations: [
                  {
                     locationName: "LocationP"
                  }
               ]
            },
            {
               tripNumber: 3,
               locations: [
                  {
                     locationName: "LocationI"
                  }
               ]
            }
         ]
      }
   ],
   dronesLocations: {
      drones: [
         {
            droneName: "DroneA",
            maxWeight: 200
         },
         {
            droneName: "DroneB",
            maxWeight: 250
         },
         {
            droneName: "DroneC",
            maxWeight: 100
         }
      ],
      locations: [
         {
            name: "LocationA",
            weight: 200
         },
         {
            name: "LocationB",
            weight: 150
         },
         {
            name: "LocationC",
            weight: 50
         },
         {
            name: "LocationD",
            weight: 150
         },
         {
            name: "LocationE",
            weight: 100
         },
         {
            name: "LocationF",
            weight: 200
         },
         {
            name: "LocationG",
            weight: 50
         },
         {
            name: "LocationH",
            weight: 80
         },
         {
            name: "LocationI",
            weight: 70
         },
         {
            name: "LocationJ",
            weight: 50
         },
         {
            name: "LocationK",
            weight: 30
         },
         {
            name: "LocationL",
            weight: 20
         },
         {
            name: "LocationM",
            weight: 50
         },
         {
            name: "LocationN",
            weight: 30
         },
         {
            name: "LocationO",
            weight: 20
         },
         {
            name: "LocationP",
            weight: 90
         }
      ]
   },
   fileDroneTrips: '[DroneB]\nTrip #1\n[LocationA], [LocationC]\nTrip #2\n[LocationG], [LocationJ], [LocationM], [LocationK], [LocationN], [LocationL], [LocationO]\nTrip #3\n[LocationD]\n[DroneA]\nTrip #1\n[LocationF]\nTrip #2\n[LocationB]\nTrip #3\n[LocationH]\n[DroneC]\nTrip #1\n[LocationE]\nTrip #2\n[LocationP]\nTrip #3\n[LocationI]'
};