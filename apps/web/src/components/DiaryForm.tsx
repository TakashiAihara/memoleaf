import React from "react";
import {
  Box,
  Button,
  flexbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { api } from "~/utils/api";

type FormData = {
  title: string;
  content: string;
};

export const DiaryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const utils = api.useContext();
  const { mutate, error } = api.diary.create.useMutation({
    async onSuccess() {
      await utils.diary.all.invalidate();
    },
    async onError() {
      console.log(error);
    },
  });

  const onSubmit = ({ title, content }: FormData) => {
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }
    mutate({ title, content });
  };

  return (
    <Box
      maxW={"4xl"}
      minW="xl"
      textAlign={"center"}
      margin={"auto"}
      marginBottom={"12"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.title || errors.content)}>
          <FormLabel>Title</FormLabel>
          <Input {...register("title", { required: "Title is required." })} />
          <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>

          <FormLabel>Content</FormLabel>
          <Textarea
            {...register("content", { required: "Content is required." })}
            size="lg"
            minHeight={500}
          />
          <FormErrorMessage>{errors?.content?.message}</FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default DiaryForm;
