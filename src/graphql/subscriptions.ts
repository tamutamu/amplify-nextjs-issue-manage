/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String) {
    onCreateGroup(owner: $owner) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String) {
    onUpdateGroup(owner: $owner) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String) {
    onDeleteGroup(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateGroupUsers = /* GraphQL */ `
  subscription OnCreateGroupUsers($owner: String) {
    onCreateGroupUsers(owner: $owner) {
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
export const onUpdateGroupUsers = /* GraphQL */ `
  subscription OnUpdateGroupUsers($owner: String) {
    onUpdateGroupUsers(owner: $owner) {
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
export const onDeleteGroupUsers = /* GraphQL */ `
  subscription OnDeleteGroupUsers($owner: String) {
    onDeleteGroupUsers(owner: $owner) {
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
