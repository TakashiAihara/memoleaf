import { api } from "~/utils/api";
import DiaryCard from "./DiaryCard";

export const Diaries: React.FC = () => {
  const diaries = api.diary.all.useQuery();

  return (
    <div className="flex w-full flex-wrap gap-4">
      {diaries.data ? (
        diaries.data?.length === 0 ? (
          <p>No diaries found</p>
        ) : (
          diaries.data?.map((diary) => (
            <DiaryCard key={diary.id} diary={diary} />
          ))
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Diaries;
