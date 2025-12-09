import Image from "next/image";
import React from "react";
import { X } from "lucide-react";

type TImangePreviewer = {
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  imagePreview: string[];
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
};

const ImagePreviewer = ({
  setImageFiles,
  imagePreview,
  setImagePreview,
  className,
}: TImangePreviewer) => {
  const handleRemove = (index: number) => {
    setImageFiles((prev) => prev.filter((_, idx) => idx !== index));
    setImagePreview((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className={className}>
      {imagePreview.map((preview, index) => (
        <div
          key={index}
          className="relative w-36 h-36 rounded-md overflow-hidden border border-dashed border-gray-300"
        >
          <Image
            width={500}
            height={500}
            src={preview}
            alt={`Preview ${index + 1}`}
            className="object-cover w-full h-full"
          />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="bg-red-300 hover:bg-red-400 absolute -top-0 -right-0 w-6 h-6 p-0 rounded-full size-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreviewer;
