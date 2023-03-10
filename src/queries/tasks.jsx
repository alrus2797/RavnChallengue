import { gql } from '@apollo/client';

const GET_TASKS_QUERY = gql`query {
    tasks(input: {}) {
      id
      name
      tags
      dueDate
      pointEstimate
      assignee{
        fullName
        avatar
      }
      position
      status
      
    }
  }
`

export default GET_TASKS_QUERY;