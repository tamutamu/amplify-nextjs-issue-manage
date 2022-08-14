/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTicketInput = {
  id?: string | null,
  title: string,
  content: string,
  coverImage?: string | null,
  status: TicketStatus,
  startDatetime?: string | null,
  endDatetime?: string | null,
};

export enum TicketStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETE = "COMPLETE",
}


export type ModelTicketConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  status?: ModelTicketStatusInput | null,
  startDatetime?: ModelStringInput | null,
  endDatetime?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
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

export type ModelTicketStatusInput = {
  eq?: TicketStatus | null,
  ne?: TicketStatus | null,
};

export type Ticket = {
  __typename: "Ticket",
  id: string,
  title: string,
  content: string,
  coverImage?: string | null,
  status: TicketStatus,
  comments?: ModelCommentConnection | null,
  startDatetime?: string | null,
  endDatetime?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  post?: Ticket | null,
  createdAt: string,
  updatedAt: string,
  ticketCommentsId?: string | null,
  owner?: string | null,
};

export type UpdateTicketInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
  status?: TicketStatus | null,
  startDatetime?: string | null,
  endDatetime?: string | null,
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

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  ticketCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  status?: ModelTicketStatusInput | null,
  startDatetime?: ModelStringInput | null,
  endDatetime?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  ticketCommentsId?: ModelIDInput | null,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
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
      post?:  {
        __typename: "Ticket",
        id: string,
        title: string,
        content: string,
        coverImage?: string | null,
        status: TicketStatus,
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
        startDatetime?: string | null,
        endDatetime?: string | null,
        createdAt: string,
        updatedAt: string,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
    status: TicketStatus,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        post?:  {
          __typename: "Ticket",
          id: string,
          title: string,
          content: string,
          coverImage?: string | null,
          status: TicketStatus,
          comments?:  {
            __typename: "ModelCommentConnection",
            nextToken?: string | null,
          } | null,
          startDatetime?: string | null,
          endDatetime?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        ticketCommentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    startDatetime?: string | null,
    endDatetime?: string | null,
    createdAt: string,
    updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
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
    post?:  {
      __typename: "Ticket",
      id: string,
      title: string,
      content: string,
      coverImage?: string | null,
      status: TicketStatus,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          post?:  {
            __typename: "Ticket",
            id: string,
            title: string,
            content: string,
            coverImage?: string | null,
            status: TicketStatus,
            startDatetime?: string | null,
            endDatetime?: string | null,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          ticketCommentsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      startDatetime?: string | null,
      endDatetime?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ticketCommentsId?: string | null,
    owner?: string | null,
  } | null,
};
