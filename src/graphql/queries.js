import { gql } from "graphql-request";

export const getBuildings =
  /* GraphQL */
  gql`
    query GetBuildings {
      Buildings {
        name
        meetingRooms {
          name
          meetings {
            title
            date
            startTime
            endTime
          }
        }
      }
    }
  `;

export const getMeetingRooms =
  /* GraphQL */
  gql`
    query GetMeetingRooms {
      Meeting {
        name
        floor
        building {
          name
        }
        meetings {
          title
        }
      }
    }
  `;
