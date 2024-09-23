"use client";

const ShowTagsGallery = ({ selectedTag }: { selectedTag: string | null }) => {
  return (
    <div className="mx-24 my-8">
      {selectedTag ? (
        <div className="p-4 bg-white shadow-md rounded-lg border">
          <span className="text-sm font-medium text-gray-700">Selected Tag: {selectedTag}</span>
        </div>
      ) : (
        <span className="text-gray-500">No tag selected.</span>
      )}
    </div>
  );
};

export default ShowTagsGallery;

