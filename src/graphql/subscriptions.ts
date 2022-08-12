/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
