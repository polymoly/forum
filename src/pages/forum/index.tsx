import { FormProvider, useForm } from "react-hook-form";
import { ForumInitialTypes, forumInitialValues } from "./types";

const Forum = () => {
  return <div></div>;
};

const Provider = () => {
  const methods = useForm<ForumInitialTypes>({
    defaultValues: forumInitialValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Forum />
    </FormProvider>
  );
};

export { Provider as Forum };
