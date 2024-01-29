import React, { ChangeEventHandler } from "react";
import Image from "next/image";

type THoverablePhoto = {
  photoSrc: string;
  name: string;
  id: string;
  onHover: boolean;
  isEditable?: boolean;
  setOnHover: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnChangeFiles: ChangeEventHandler<HTMLInputElement>;
};

const HoverablePhoto = ({
  isEditable = true,
  onHover,
  name,
  id,
  setOnHover,
  photoSrc,
  handleOnChangeFiles,
}: THoverablePhoto) => {
  return (
    <div
      className="w-[180px] h-[180px] bg-white rounded-full relative"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {onHover && isEditable && (
        <div className="w-[180px] h-[180px] bg-black/50 rounded-full absolute z-10">
          <label
            htmlFor={name}
            className="w-full h-full rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <p>Change photo</p>
            <input
              type="file"
              accept="image/*"
              name={name}
              id={id}
              className="w-full h-full"
              onChange={handleOnChangeFiles}
              hidden
            />
          </label>
        </div>
      )}
      <Image
        src={photoSrc}
        alt="Profile picture"
        fill
        sizes="100%"
        className="rounded-full object-cover"
        priority
      />
    </div>
  );
};

export default HoverablePhoto;
