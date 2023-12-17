import React, { useContext } from "react";
import Modal from "../Modal";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type WriteFormType = {
  title: string;
  shortDescription: string;
  mainBody: string;
};

const writeFormschema = z.object({
  title: z.string().min(20),
  shortDescription: z.string().min(60),
  mainBody: z.string().min(100),
});

const WriteFormModal = () => {
  const { isWriteModalOpen, setIsWriteModalOpen } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteFormType>({
    resolver: zodResolver(writeFormschema),
  });

  const onSubmit = (data: WriteFormType) => console.log({ data });

  return (
    <Modal
      isOpen={isWriteModalOpen}
      onClose={() => {
        setIsWriteModalOpen(false);
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="text"
          id="title"
          className="h-full w-full rounded-xl border border-gray-300 p-4 px-4 py-2 outline-none focus:border-gray-600"
          placeholder="Title"
          {...register("title", { required: true })}
        />

        {errors.title && (
          <div className="sm mb-10 w-full text-left text-sm text-red-500">
            {errors.title.message}
          </div>
        )}
        <input
          type="text"
          id="shortDescription"
          className="h-full w-full rounded-xl border border-gray-300 p-4 px-4 py-2 outline-none focus:border-gray-600"
          placeholder="Short Description"
          {...register("shortDescription", { required: true })}
        />
        {errors.shortDescription && (
          <div className="sm mb-10 w-full text-left text-sm text-red-500">
            {errors.shortDescription.message}
          </div>
        )}
        <textarea
          id="mainBody"
          cols={10}
          rows={10}
          className="h-full w-full rounded-xl border border-gray-300 p-4 px-4 py-2 outline-none focus:border-gray-600"
          placeholder="Main Body"
          {...register("mainBody", { required: true })}
        />

        {errors.mainBody && (
          <div className="sm mb-10 w-full text-left text-sm text-red-500">
            {errors.mainBody.message}
          </div>
        )}
        <div className="flex w-full justify-end">
          <button
            className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default WriteFormModal;
