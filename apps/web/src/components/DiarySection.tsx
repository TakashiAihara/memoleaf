import Diaries from "./Diaries";
import DiaryForm from "./DiaryForm";

export const DiarySection: React.FC = () => {
  return (
    <div className="w-full">
      <DiaryForm />
      <Diaries />
    </div>
  );
};

export default DiarySection;
