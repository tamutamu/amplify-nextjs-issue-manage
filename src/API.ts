/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  users?: ModelGroupUsersConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelGroupUsersConnection = {
  __typename: "ModelGroupUsersConnection",
  items:  Array<GroupUsers | null >,
  nextToken?: string | null,
};

export type GroupUsers = {
  __typename: "GroupUsers",
  id: string,
  groupID: string,
  userID: string,
  group: Group,
  user: User,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  groups?: ModelGroupUsersConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  groups?:  Array<Group | null > | null,
  tickets?: ModelTicketConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type Ticket = {
  __typename: "Ticket",
  id: string,
  title: string,
  content: string,
  coverImage?: string | null,
  status: EnumTicketStatus,
  comments?: ModelCommentConnection | null,
  project?: Project | null,
  category: EnumCategory,
  startDatetime?: string | null,
  endDatetime?: string | null,
  createdAt: string,
  updatedAt: string,
  projectTicketsId?: string | null,
  owner?: string | null,
};

export enum EnumTicketStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETE = "COMPLETE",
}


export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  ticket?: Ticket | null,
  createdAt: string,
  updatedAt: string,
  ticketCommentsId?: string | null,
  owner?: string | null,
};

export enum EnumCategory {
  ISSUE = "ISSUE",
  TASK = "TASK",
  TODO = "TODO",
}


export type UpdateProjectInput = {
  id: string,
  name?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateTicketInput = {
  id?: string | null,
  title: string,
  content: string,
  coverImage?: string | null,
  status: EnumTicketStatus,
  category: EnumCategory,
  startDatetime?: string | null,
  endDatetime?: string | null,
  projectTicketsId?: string | null,
};

export type ModelTicketConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  status?: ModelEnumTicketStatusInput | null,
  category?: ModelEnumCategoryInput | null,
  startDatetime?: ModelStringInput | null,
  endDatetime?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
  projectTicketsId?: ModelIDInput | null,
};

export type ModelEnumTicketStatusInput = {
  eq?: EnumTicketStatus | null,
  ne?: EnumTicketStatus | null,
};

export type ModelEnumCategoryInput = {
  eq?: EnumCategory | null,
  ne?: EnumCategory | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTicketInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
  status?: EnumTicketStatus | null,
  category?: EnumCategory | null,
  startDatetime?: string | null,
  endDatetime?: string | null,
  projectTicketsId?: string | null,
};

export type DeleteTicketInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  ticketCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  ticketCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  ticketCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateGroupUsersInput = {
  id?: string | null,
  groupID: string,
  userID: string,
};

export type ModelGroupUsersConditionInput = {
  groupID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelGroupUsersConditionInput | null > | null,
  or?: Array< ModelGroupUsersConditionInput | null > | null,
  not?: ModelGroupUsersConditionInput | null,
};

export type UpdateGroupUsersInput = {
  id: string,
  groupID?: string | null,
  userID?: string | null,
};

export type DeleteGroupUsersInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  status?: ModelEnumTicketStatusInput | null,
  category?: ModelEnumCategoryInput | null,
  startDatetime?: ModelStringInput | null,
  endDatetime?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
  projectTicketsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  ticketCommentsId?: ModelIDInput | null,
};

export type ModelGroupUsersFilterInput = {
  id?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelGroupUsersFilterInput | null > | null,
  or?: Array< ModelGroupUsersFilterInput | null > | null,
  not?: ModelGroupUsersFilterInput | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateGroupUsersMutationVariables = {
  input: CreateGroupUsersInput,
  condition?: ModelGroupUsersConditionInput | null,
};

export type CreateGroupUsersMutation = {
  createGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupUsersMutationVariables = {
  input: UpdateGroupUsersInput,
  condition?: ModelGroupUsersConditionInput | null,
};

export type UpdateGroupUsersMutation = {
  updateGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupUsersMutationVariables = {
  input: DeleteGroupUsersInput,
  condition?: ModelGroupUsersConditionInput | null,
};

export type DeleteGroupUsersMutation = {
  deleteGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  id?: string | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  id?: string | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTicketsQueryVariables = {
  id?: string | null,
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  id?: string | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      ticket?:  {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      ticketCommentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupUsersQueryVariables = {
  id: string,
};

export type GetGroupUsersQuery = {
  getGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGroupUsersQueryVariables = {
  filter?: ModelGroupUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupUsersQuery = {
  listGroupUsers?:  {
    __typename: "ModelGroupUsersConnection",
    items:  Array< {
      __typename: "GroupUsers",
      id: string,
      groupID: string,
      userID: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        groups?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelGroupUsersConnection",
      items:  Array< {
        __typename: "GroupUsers",
        id: string,
        groupID: string,
        userID: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        user:  {
          __typename: "User",
          id: string,
          name: string,
          groups?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        },
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    groups?:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: EnumTicketStatus,
        comments?:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            ticketCommentsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        project?:  {
          __typename: "Project",
          id: string,
          name: string,
          groups?:  Array< {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          tickets?:  {
            __typename: "ModelTicketConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        category: EnumCategory,
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
        projectTicketsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    id: string,
    title: string,
    content: string,
    coverImage?: string | null,
    status: EnumTicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        ticket?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      groups?:  Array< {
        __typename: "Group",
        id: string,
        name: string,
        users?:  {
          __typename: "ModelGroupUsersConnection",
          items:  Array< {
            __typename: "GroupUsers",
            id: string,
            groupID: string,
            userID: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items:  Array< {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: EnumTicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          project?:  {
            __typename: "Project",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          category: EnumCategory,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          projectTicketsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTicketsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    ticket?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: EnumTicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          ticket?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        groups?:  Array< {
          __typename: "Group",
          id: string,
          name: string,
          users?:  {
            __typename: "ModelGroupUsersConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items:  Array< {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: EnumTicketStatus,
            category: EnumCategory,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            projectTicketsId?: string | null,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTicketsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateGroupUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGroupUsersSubscription = {
  onCreateGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGroupUsersSubscription = {
  onUpdateGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGroupUsersSubscription = {
  onDeleteGroupUsers?:  {
    __typename: "GroupUsers",
    id: string,
    groupID: string,
    userID: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelGroupUsersConnection",
        items:  Array< {
          __typename: "GroupUsers",
          id: string,
          groupID: string,
          userID: string,
          group:  {
            __typename: "Group",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          user:  {
            __typename: "User",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          },
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
