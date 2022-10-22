/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventStore = /* GraphQL */ `
  subscription OnCreateEventStore($owner: String) {
    onCreateEventStore(owner: $owner) {
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
export const onUpdateEventStore = /* GraphQL */ `
  subscription OnUpdateEventStore($owner: String) {
    onUpdateEventStore(owner: $owner) {
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
export const onDeleteEventStore = /* GraphQL */ `
  subscription OnDeleteEventStore($owner: String) {
    onDeleteEventStore(owner: $owner) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String) {
    onCreateGroup(owner: $owner) {
      id
      userId
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String) {
    onUpdateGroup(owner: $owner) {
      id
      userId
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String) {
    onDeleteGroup(owner: $owner) {
      id
      userId
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      groupId
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      groupId
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      groupId
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
      id
      name
      groupIds
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
      id
      name
      groupIds
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
      id
      name
      groupIds
      owner
      createdAt
      updatedAt
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
      Project_id
      category
      startDatetime
      endDatetime
      owner
      createdAt
      updatedAt
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
      Project_id
      category
      startDatetime
      endDatetime
      owner
      createdAt
      updatedAt
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
      Project_id
      category
      startDatetime
      endDatetime
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      content
      Ticket_id
      User_name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      content
      Ticket_id
      User_name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      content
      Ticket_id
      User_name
      owner
      createdAt
      updatedAt
    }
  }
`;
