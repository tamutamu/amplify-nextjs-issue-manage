/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      users {
        items {
          id
          groupID
          userID
          group {
            id
            name
            users {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          user {
            id
            name
            groups {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $id: ID
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroups(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        users {
          items {
            id
            groupID
            userID
            group {
              id
              name
              createdAt
              updatedAt
              owner
            }
            user {
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      groups {
        items {
          id
          groupID
          userID
          group {
            id
            name
            users {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          user {
            id
            name
            groups {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        groups {
          items {
            id
            groupID
            userID
            group {
              id
              name
              createdAt
              updatedAt
              owner
            }
            user {
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      groups {
        id
        name
        users {
          items {
            id
            groupID
            userID
            group {
              id
              name
              createdAt
              updatedAt
              owner
            }
            user {
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tickets {
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
              createdAt
              updatedAt
              ticketCommentsId
              owner
            }
            nextToken
          }
          project {
            id
            name
            groups {
              id
              name
              createdAt
              updatedAt
              owner
            }
            tickets {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          category
          startDatetime
          endDatetime
          createdAt
          updatedAt
          projectTicketsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $id: ID
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjects(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        groups {
          id
          name
          users {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        tickets {
          items {
            id
            title
            content
            coverImage
            status
            comments {
              nextToken
            }
            project {
              id
              name
              createdAt
              updatedAt
              owner
            }
            category
            startDatetime
            endDatetime
            createdAt
            updatedAt
            projectTicketsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
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
          ticket {
            id
            title
            content
            coverImage
            status
            comments {
              nextToken
            }
            project {
              id
              name
              createdAt
              updatedAt
              owner
            }
            category
            startDatetime
            endDatetime
            createdAt
            updatedAt
            projectTicketsId
            owner
          }
          createdAt
          updatedAt
          ticketCommentsId
          owner
        }
        nextToken
      }
      project {
        id
        name
        groups {
          id
          name
          users {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        tickets {
          items {
            id
            title
            content
            coverImage
            status
            comments {
              nextToken
            }
            project {
              id
              name
              createdAt
              updatedAt
              owner
            }
            category
            startDatetime
            endDatetime
            createdAt
            updatedAt
            projectTicketsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category
      startDatetime
      endDatetime
      createdAt
      updatedAt
      projectTicketsId
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
            ticket {
              id
              title
              content
              coverImage
              status
              category
              startDatetime
              endDatetime
              createdAt
              updatedAt
              projectTicketsId
              owner
            }
            createdAt
            updatedAt
            ticketCommentsId
            owner
          }
          nextToken
        }
        project {
          id
          name
          groups {
            id
            name
            users {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tickets {
            items {
              id
              title
              content
              coverImage
              status
              category
              startDatetime
              endDatetime
              createdAt
              updatedAt
              projectTicketsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        category
        startDatetime
        endDatetime
        createdAt
        updatedAt
        projectTicketsId
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
      ticket {
        id
        title
        content
        coverImage
        status
        comments {
          items {
            id
            content
            ticket {
              id
              title
              content
              coverImage
              status
              category
              startDatetime
              endDatetime
              createdAt
              updatedAt
              projectTicketsId
              owner
            }
            createdAt
            updatedAt
            ticketCommentsId
            owner
          }
          nextToken
        }
        project {
          id
          name
          groups {
            id
            name
            users {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tickets {
            items {
              id
              title
              content
              coverImage
              status
              category
              startDatetime
              endDatetime
              createdAt
              updatedAt
              projectTicketsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        category
        startDatetime
        endDatetime
        createdAt
        updatedAt
        projectTicketsId
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
        ticket {
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
          project {
            id
            name
            groups {
              id
              name
              createdAt
              updatedAt
              owner
            }
            tickets {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          category
          startDatetime
          endDatetime
          createdAt
          updatedAt
          projectTicketsId
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
export const getGroupUsers = /* GraphQL */ `
  query GetGroupUsers($id: ID!) {
    getGroupUsers(id: $id) {
      id
      groupID
      userID
      group {
        id
        name
        users {
          items {
            id
            groupID
            userID
            group {
              id
              name
              createdAt
              updatedAt
              owner
            }
            user {
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        groups {
          items {
            id
            groupID
            userID
            group {
              id
              name
              createdAt
              updatedAt
              owner
            }
            user {
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGroupUsers = /* GraphQL */ `
  query ListGroupUsers(
    $filter: ModelGroupUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        userID
        group {
          id
          name
          users {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        user {
          id
          name
          groups {
            items {
              id
              groupID
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
