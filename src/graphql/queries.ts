/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $id: ID
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTickets(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
            items {
              id
              content
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
      nextToken
    }
  }
`;
