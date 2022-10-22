/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventStore = /* GraphQL */ `
  query GetEventStore($id: ID!) {
    getEventStore(id: $id) {
      id
      seq
      event {
        type
        args
      }
      status
      resultStatus
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listEventStores = /* GraphQL */ `
  query ListEventStores(
    $id: ID
    $filter: ModelEventStoreFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEventStores(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        seq
        event {
          type
          args
        }
        status
        resultStatus
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!, $userId: String!) {
    getGroup(id: $id, userId: $userId) {
      id
      userId
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $id: ID
    $userId: ModelStringKeyConditionInput
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroups(
      id: $id
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!, $groupId: String!) {
    getUser(id: $id, groupId: $groupId) {
      id
      groupId
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $groupId: ModelStringKeyConditionInput
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      groupId: $groupId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        groupId
        name
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
      groupIds
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
        groupIds
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
      Project_id
      category
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
        Project_id
        category
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
      Ticket_id
      User_name
      createdAt
      updatedAt
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
        Ticket_id
        User_name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
