/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      content
      status
      comments {
        items {
          id
          content
          post {
            id
            content
            status
            comments {
              nextToken
            }
            startDatetime
            endDatetime
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          ticketCommentsId
        }
        nextToken
      }
      startDatetime
      endDatetime
      createdAt
      updatedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      content
      status
      comments {
        items {
          id
          content
          post {
            id
            content
            status
            comments {
              nextToken
            }
            startDatetime
            endDatetime
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          ticketCommentsId
        }
        nextToken
      }
      startDatetime
      endDatetime
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      content
      status
      comments {
        items {
          id
          content
          post {
            id
            content
            status
            comments {
              nextToken
            }
            startDatetime
            endDatetime
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          ticketCommentsId
        }
        nextToken
      }
      startDatetime
      endDatetime
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        content
        status
        comments {
          items {
            id
            content
            post {
              id
              content
              status
              startDatetime
              endDatetime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            ticketCommentsId
          }
          nextToken
        }
        startDatetime
        endDatetime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticketCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        content
        status
        comments {
          items {
            id
            content
            post {
              id
              content
              status
              startDatetime
              endDatetime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            ticketCommentsId
          }
          nextToken
        }
        startDatetime
        endDatetime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticketCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        content
        status
        comments {
          items {
            id
            content
            post {
              id
              content
              status
              startDatetime
              endDatetime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            ticketCommentsId
          }
          nextToken
        }
        startDatetime
        endDatetime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticketCommentsId
    }
  }
`;
