import { Controller, useFormContext } from "react-hook-form";
import { ForumInitialTypes } from "../../pages/forum/types";

export const QuestionCard = () => {
  const { control } = useFormContext<ForumInitialTypes>();

  return (
    <div>
      <Controller
        control={control}
        name="question"
        render={({ field }) => <input {...field} type="text" />}
      />
    </div>
  );
};
