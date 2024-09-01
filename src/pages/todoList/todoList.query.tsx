import { gql } from '@apollo/client';

export const GET_TODO_LIST = gql`
  query($filters: TodoFiltersInput, $orderBy: Ordering) {
    getTodoList(filters: $filters, orderBy: $orderBy) {
      id
      title
      isDone
      type
      createdAt
    }
  }
`;