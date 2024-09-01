import { gql } from '@apollo/client';

export const GET_TODO_BY_ID = gql`
  query GetTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      title
      isDone
      type
      createdAt
      text
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodoStatusById($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      title
      isDone
      type
      createdAt
    }
  }
`;