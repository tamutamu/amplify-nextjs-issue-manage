/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventStoreInput = {
  id?: string | null,
  seq: number,
  event?: EventInput | null,
  status?: EventStoreStatus | null,
  resultStatus?: EventStoreStatus | null,
  owner?: string | null,
};

export type EventInput = {
  type: string,
  args: string,
};

export enum EventStoreStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETE = "COMPLETE",
}


export type ModelEventStoreConditionInput = {
  status?: ModelEventStoreStatusInput | null,
  resultStatus?: ModelEventStoreStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEventStoreConditionInput | null > | null,
  or?: Array< ModelEventStoreConditionInput | null > | null,
  not?: ModelEventStoreConditionInput | null,
};

export type ModelEventStoreStatusInput = {
  eq?: EventStoreStatus | null,
  ne?: EventStoreStatus | null,
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

export type EventStore = {
  __typename: "EventStore",
  id: string,
  seq: number,
  event?: Event | null,
  status?: EventStoreStatus | null,
  resultStatus?: EventStoreStatus | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Event = {
  __typename: "Event",
  type: string,
  args: string,
};

export type UpdateEventStoreInput = {
  id: string,
  seq: number,
  event?: EventInput | null,
  status?: EventStoreStatus | null,
  resultStatus?: EventStoreStatus | null,
  owner?: string | null,
};

export type DeleteEventStoreInput = {
  id: string,
  seq: number,
};

export type CreateGroupInput = {
  id?: string | null,
  userId: string,
  name: string,
  owner?: string | null,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  userId: string,
  name: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  id: string,
  userId: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteGroupInput = {
  id: string,
  userId: string,
};

export type CreateUserInput = {
  id?: string | null,
  groupId: string,
  name: string,
  owner?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  groupId: string,
  name: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  groupId: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteUserInput = {
  id: string,
  groupId: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  groupIds?: Array< string | null > | null,
  owner?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  groupIds?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  groupIds?: Array< string | null > | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  groupIds?: Array< string | null > | null,
  owner?: string | null,
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
  Project_id: string,
  category: EnumCategory,
  startDatetime?: string | null,
  endDatetime?: string | null,
  owner?: string | null,
};

export enum EnumTicketStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETE = "COMPLETE",
}


export enum EnumCategory {
  ISSUE = "ISSUE",
  TASK = "TASK",
  TODO = "TODO",
}


export type ModelTicketConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  status?: ModelEnumTicketStatusInput | null,
  Project_id?: ModelStringInput | null,
  category?: ModelEnumCategoryInput | null,
  startDatetime?: ModelStringInput | null,
  endDatetime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
};

export type ModelEnumTicketStatusInput = {
  eq?: EnumTicketStatus | null,
  ne?: EnumTicketStatus | null,
};

export type ModelEnumCategoryInput = {
  eq?: EnumCategory | null,
  ne?: EnumCategory | null,
};

export type Ticket = {
  __typename: "Ticket",
  id: string,
  title: string,
  content: string,
  coverImage?: string | null,
  status: EnumTicketStatus,
  Project_id: string,
  category: EnumCategory,
  startDatetime?: string | null,
  endDatetime?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTicketInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
  status?: EnumTicketStatus | null,
  Project_id?: string | null,
  category?: EnumCategory | null,
  startDatetime?: string | null,
  endDatetime?: string | null,
  owner?: string | null,
};

export type DeleteTicketInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  Ticket_id: string,
  User_name: string,
  owner?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  Ticket_id?: ModelStringInput | null,
  User_name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  Ticket_id: string,
  User_name: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  Ticket_id?: string | null,
  User_name?: string | null,
  owner?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateCounterInput = {
  id?: string | null,
  count: number,
  owner?: string | null,
};

export type ModelCounterConditionInput = {
  count?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCounterConditionInput | null > | null,
  or?: Array< ModelCounterConditionInput | null > | null,
  not?: ModelCounterConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Counter = {
  __typename: "Counter",
  id: string,
  count: number,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCounterInput = {
  id: string,
  count?: number | null,
  owner?: string | null,
};

export type DeleteCounterInput = {
  id: string,
};

export type CreateGroupLockInput = {
  groupId: string,
  eventId: string,
};

export type ModelGroupLockConditionInput = {
  and?: Array< ModelGroupLockConditionInput | null > | null,
  or?: Array< ModelGroupLockConditionInput | null > | null,
  not?: ModelGroupLockConditionInput | null,
};

export type GroupLock = {
  __typename: "GroupLock",
  groupId: string,
  eventId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateGroupLockInput = {
  groupId: string,
  eventId: string,
};

export type DeleteGroupLockInput = {
  groupId: string,
  eventId: string,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelEventStoreFilterInput = {
  id?: ModelIDInput | null,
  seq?: ModelIntInput | null,
  status?: ModelEventStoreStatusInput | null,
  resultStatus?: ModelEventStoreStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEventStoreFilterInput | null > | null,
  or?: Array< ModelEventStoreFilterInput | null > | null,
  not?: ModelEventStoreFilterInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEventStoreConnection = {
  __typename: "ModelEventStoreConnection",
  items:  Array<EventStore | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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
  groupIds?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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
  Project_id?: ModelStringInput | null,
  category?: ModelEnumCategoryInput | null,
  startDatetime?: ModelStringInput | null,
  endDatetime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  Ticket_id?: ModelStringInput | null,
  User_name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelCounterFilterInput = {
  id?: ModelIDInput | null,
  count?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCounterFilterInput | null > | null,
  or?: Array< ModelCounterFilterInput | null > | null,
  not?: ModelCounterFilterInput | null,
};

export type ModelCounterConnection = {
  __typename: "ModelCounterConnection",
  items:  Array<Counter | null >,
  nextToken?: string | null,
};

export type ModelGroupLockFilterInput = {
  groupId?: ModelIDInput | null,
  eventId?: ModelStringInput | null,
  and?: Array< ModelGroupLockFilterInput | null > | null,
  or?: Array< ModelGroupLockFilterInput | null > | null,
  not?: ModelGroupLockFilterInput | null,
};

export type ModelGroupLockConnection = {
  __typename: "ModelGroupLockConnection",
  items:  Array<GroupLock | null >,
  nextToken?: string | null,
};

export type IncrementCountMutationVariables = {
  id?: string | null,
};

export type IncrementCountMutation = {
  incrementCount?: number | null,
};

export type CreateEventStoreMutationVariables = {
  input: CreateEventStoreInput,
  condition?: ModelEventStoreConditionInput | null,
};

export type CreateEventStoreMutation = {
  createEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventStoreMutationVariables = {
  input: UpdateEventStoreInput,
  condition?: ModelEventStoreConditionInput | null,
};

export type UpdateEventStoreMutation = {
  updateEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventStoreMutationVariables = {
  input: DeleteEventStoreInput,
  condition?: ModelEventStoreConditionInput | null,
};

export type DeleteEventStoreMutation = {
  deleteEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCounterMutationVariables = {
  input: CreateCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type CreateCounterMutation = {
  createCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCounterMutationVariables = {
  input: UpdateCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type UpdateCounterMutation = {
  updateCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCounterMutationVariables = {
  input: DeleteCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type DeleteCounterMutation = {
  deleteCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupLockMutationVariables = {
  input: CreateGroupLockInput,
  condition?: ModelGroupLockConditionInput | null,
};

export type CreateGroupLockMutation = {
  createGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupLockMutationVariables = {
  input: UpdateGroupLockInput,
  condition?: ModelGroupLockConditionInput | null,
};

export type UpdateGroupLockMutation = {
  updateGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupLockMutationVariables = {
  input: DeleteGroupLockInput,
  condition?: ModelGroupLockConditionInput | null,
};

export type DeleteGroupLockMutation = {
  deleteGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetEventStoreQueryVariables = {
  id: string,
  seq: number,
};

export type GetEventStoreQuery = {
  getEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventStoresQueryVariables = {
  id?: string | null,
  seq?: ModelIntKeyConditionInput | null,
  filter?: ModelEventStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEventStoresQuery = {
  listEventStores?:  {
    __typename: "ModelEventStoreConnection",
    items:  Array< {
      __typename: "EventStore",
      id: string,
      seq: number,
      event?:  {
        __typename: "Event",
        type: string,
        args: string,
      } | null,
      status?: EventStoreStatus | null,
      resultStatus?: EventStoreStatus | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
  userId: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  id?: string | null,
  userId?: ModelStringKeyConditionInput | null,
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
      userId: string,
      name: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
  groupId: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  groupId?: ModelStringKeyConditionInput | null,
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
      groupId: string,
      name: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
      groupIds?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
      Project_id: string,
      category: EnumCategory,
      startDatetime?: string | null,
      endDatetime?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
      Ticket_id: string,
      User_name: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCounterQueryVariables = {
  id: string,
};

export type GetCounterQuery = {
  getCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCountersQueryVariables = {
  id?: string | null,
  filter?: ModelCounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCountersQuery = {
  listCounters?:  {
    __typename: "ModelCounterConnection",
    items:  Array< {
      __typename: "Counter",
      id: string,
      count: number,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupLockQueryVariables = {
  groupId: string,
  eventId: string,
};

export type GetGroupLockQuery = {
  getGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGroupLocksQueryVariables = {
  groupId?: string | null,
  eventId?: ModelStringKeyConditionInput | null,
  filter?: ModelGroupLockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupLocksQuery = {
  listGroupLocks?:  {
    __typename: "ModelGroupLockConnection",
    items:  Array< {
      __typename: "GroupLock",
      groupId: string,
      eventId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventStoreSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEventStoreSubscription = {
  onCreateEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventStoreSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEventStoreSubscription = {
  onUpdateEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventStoreSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEventStoreSubscription = {
  onDeleteEventStore?:  {
    __typename: "EventStore",
    id: string,
    seq: number,
    event?:  {
      __typename: "Event",
      type: string,
      args: string,
    } | null,
    status?: EventStoreStatus | null,
    resultStatus?: EventStoreStatus | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    userId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    groupId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    groupIds?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Project_id: string,
    category: EnumCategory,
    startDatetime?: string | null,
    endDatetime?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Ticket_id: string,
    User_name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCounterSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCounterSubscription = {
  onCreateCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCounterSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCounterSubscription = {
  onUpdateCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCounterSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCounterSubscription = {
  onDeleteCounter?:  {
    __typename: "Counter",
    id: string,
    count: number,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupLockSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGroupLockSubscription = {
  onCreateGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupLockSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGroupLockSubscription = {
  onUpdateGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupLockSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGroupLockSubscription = {
  onDeleteGroupLock?:  {
    __typename: "GroupLock",
    groupId: string,
    eventId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
