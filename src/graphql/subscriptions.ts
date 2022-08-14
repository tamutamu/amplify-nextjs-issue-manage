/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket($owner: String) {
    onCreateTicket(owner: $owner) {
      id
      title
      content
      coverImage
      status
      comments {
        items {
          id
          content
          post {
            id
            title
            content
            coverImage
            status
            comments {
              nextToken
            }
            startDatetime
            endDatetime
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          ticketCommentsId
          owner
        }
        nextToken
      }
      startDatetime
      endDatetime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket($owner: String) {
    onUpdateTicket(owner: $owner) {
      id
      title
      content
      coverImage
      status
      comments {
        items {
          id
          content
          post {
            id
            title
            content
            coverImage
            status
            comments {
              nextToken
            }
            startDatetime
            endDatetime
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          ticketCommentsId
          owner
        }
        nextToken
      }
      startDatetime
      endDatetime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket($owner: String) {
    onDeleteTicket(owner: $owner) {
      id
      title
      content
      coverImage
      status
      comments {
        items {
          id
          content
          post {
            id
            title
            content
            coverImage
            status
            comments {
              nextToken
            }
            startDatetime
            endDatetime
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          ticketCommentsId
          owner
        }
        nextToken
      }
      startDatetime
      endDatetime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      content
      post {
        id
        title
        content
        coverImage
        status
        comments {
          items {
            id
            content
            post {
              id
              title
              content
              coverImage
              status
              startDatetime
              endDatetime
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            ticketCommentsId
            owner
          }
          nextToken
        }
        startDatetime
        endDatetime
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      ticketCommentsId
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      content
      post {
        id
        title
        content
        coverImage
        status
        comments {
          items {
            id
            content
            post {
              id
              title
              content
              coverImage
              status
              startDatetime
              endDatetime
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            ticketCommentsId
            owner
          }
          nextToken
        }
        startDatetime
        endDatetime
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      ticketCommentsId
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      content
      post {
        id
        title
        content
        coverImage
        status
        comments {
          items {
            id
            content
            post {
              id
              title
              content
              coverImage
              status
              startDatetime
              endDatetime
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            ticketCommentsId
            owner
          }
          nextToken
        }
        startDatetime
        endDatetime
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      ticketCommentsId
      owner
    }
  }
`;
