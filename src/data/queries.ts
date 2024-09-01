import { gql } from "@apollo/client";

export const GET_TODOLIST = gql`
query {
  getTodoList {
    id
    title
    isDone
    type
    createdAt
  }
}
`;