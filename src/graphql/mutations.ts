/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createGroupUsers = /* GraphQL */ `
  mutation CreateGroupUsers(
    $input: CreateGroupUsersInput!
    $condition: ModelGroupUsersConditionInput
  ) {
    createGroupUsers(input: $input, condition: $condition) {
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
export const updateGroupUsers = /* GraphQL */ `
  mutation UpdateGroupUsers(
    $input: UpdateGroupUsersInput!
    $condition: ModelGroupUsersConditionInput
  ) {
    updateGroupUsers(input: $input, condition: $condition) {
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
export const deleteGroupUsers = /* GraphQL */ `
  mutation DeleteGroupUsers(
    $input: DeleteGroupUsersInput!
    $condition: ModelGroupUsersConditionInput
  ) {
    deleteGroupUsers(input: $input, condition: $condition) {
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
