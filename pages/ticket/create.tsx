import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { createTicket } from "../../src/graphql/mutations";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CreateTicketInput, Ticket, TicketStatus } from "../../src/API";

const initialState = { id: "", title: "", content: "", coverImage: "" };
function CreatePost() {
  const [ticket, setTicket] = useState<CreateTicketInput>({
    title: "",
    content: "",
    status: TicketStatus.PENDING,
  });
  const { title, content, status } = ticket as CreateTicketInput;
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
    if (!title || !content || !ticket) return;
    // const id = uuid();
    // ticket.id = id;

    if (image) {
      const filename = `${image.name}_${uuid()}`;
      ticket.coverImage = filename;
      //   await Storage.put(filename, image);
    }

    // await API.graphql({
    //   query: createTicket,
    //   variables: { input: ticket },
    //   authMode: "AMAZON_COGNITO_USER_POOLS",
    // });
    const ret = await fetch("/api/createTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
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
      <button
        type="button"
        className="mb-4 bg-blue-600 text-white 
     font-semibold px-8 py-2 rounded-lg"
        onClick={createNewTicket}
      >
        Create Post
      </button>{" "}
    </div>
  );
}

export default withAuthenticator(CreatePost);
