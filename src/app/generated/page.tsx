// "use client"
import Space from "@/components/elements/Space/Space"
import InputKeywords from '@/components/elements/InputKeywords/InputKeywords';
import ShowTags from '@/components/elements/ShowTags/ShowTags';
import ShowTagsGallery from "@/components/elements/ShowTagsGallery/ShowTagsGallery";
// import ViewOneMovie from "@/components/elements/ViewOneMovie/ViewOneMovie";
import ViewOneMovie from "../components/ViewOneMovie";
import { useState } from "react";



function Page() {
  // const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <div>
      <Space />
      <InputKeywords />
      {/* ShowTags に選択されたタグを設定する関数を渡す */}
      {/* <ShowTags setSelectedTag={setSelectedTag} /> */}
      {/* ShowTagsGallery に選択されたタグ情報を渡す */}
      {/* <ShowTagsGallery selectedTag={selectedTag} /> */}
      
      {/* ViewOneMovieはSSRでしか機能しない */}
      <ViewOneMovie />
    </div>
  );
}

export default Page;
