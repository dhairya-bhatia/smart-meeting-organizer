const meetingsData = [
  {
    name: "Building 1",
    id: 1,
    meetingRooms: [
      {
        name: "Punjab",
        roomId: 11,
        floor: 3,
        meetings: [
          {
            title: "Booked for Interview",
            date: "19/06/2022",
            startTime: "19:00",
            endTime: "20:00"
          }
        ]
      },
      {
        name: "Assam",
        roomId: 12,
        floor: 5,
        meetings: [
          {
            title: "Team meeting",
            date: "19/06/2022",
            startTime: "15:00",
            endTime: "16:30"
          }
        ]
      }
    ]
  },
  {
    name: "Building 2",
    id: 2,
    meetingRooms: [
      {
        name: "Karnataka",
        roomId: 13,
        floor: 1,
        meetings: []
      }
    ]
  },
  {
    name: "Building 3",
    id: 3,
    meetingRooms: [
      {
        name: "Haryana",
        roomId: 14,
        floor: 2,
        meetings: [
          {
            title: "Conference",
            date: "13/06/2022",
            startTime: "19:00",
            endTime: "20:00"
          }
        ]
      },
      {
        name: "Gujarat",
        roomId: 15,
        floor: 3,
        meetings: [
          {
            title: "Team meeting",
            date: "13/06/2022",
            startTime: "19:00",
            endTime: "20:00"
          }
        ]
      }
    ]
  }
];

export default meetingsData;
