import React, { useState, useRef } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {
  CreateEventStoreMutation,
  CreateEventStoreMutationVariables,
  CreateTicketInput,
  EnumCategory,
  EnumTicketStatus,
  Ticket,
} from "../../src/API";
import { createEventStore } from "../../src/graphql/mutations";
import { API } from "aws-amplify";

const CreatePost: NextPage = () => {
  const [ticket, setTicket] = useState<CreateTicketInput>({
    id: uuid(),
    title: "",
    content: "",
    status: EnumTicketStatus.PENDING,
    Project_id: "-1",
    category: EnumCategory.ISSUE,
  });
  const router = useRouter();
  const [image, setImage] = useState<File>();
  const imageFileInput = useRef<HTMLInputElement>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTicket(() => ({
      ...(ticket as CreateTicketInput),
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewTicket() {
    // if (!title || !content || !ticket) return;
    // const id = uuid();
    // ticket.id = id;

    if (image) {
      const filename = `${image.name}_${uuid()}`;
      ticket!.coverImage = filename;
      //   await Storage.put(filename, image);
    }

    const res = (await API.graphql({
      query: createEventStore,
      variables: {
        input: {
          seq: 1,
          event: {
            type: "CreateTicket",
            args: JSON.stringify(ticket),
          },
        },
      } as CreateEventStoreMutationVariables,
    })) as { data: CreateEventStoreMutation; errors: any[] };

    console.log(res);

    router.push("/");
  }
  async function uploadImage() {
    imageFileInput.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files != null) {
      const fileUploaded = e.target.files[0];
      if (!fileUploaded) return;
      setImage(fileUploaded);
    }
  }

  return (
    <div>
      <h1>Create new Ticket</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={ticket!.title}
      />
      {image && <img src={URL.createObjectURL(image)} />}
      <SimpleMDE
        value={ticket!.content}
        onChange={(value) => setTicket({ ...ticket!, content: value })}
      />
      <input
        type="file"
        ref={imageFileInput}
        className="absolute w-0 h-0"
        onChange={handleChange}
      />
      <button
        type="button"
        className="bg-green-600 text-white 
        font-semibold px-8 py-2 rounded-lg mr-2"
        onClick={uploadImage}
      >
        Upload Cover Image
      </button>
      <div>
        <button
          type="button"
          className="mb-4 bg-blue-600 text-white 
     font-semibold px-8 py-2 rounded-lg"
          onClick={createNewTicket}
        >
          Create Post
        </button>{" "}
      </div>
    </div>
  );
};

export default CreatePost;
