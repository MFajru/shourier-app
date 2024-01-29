import Modal from "@/components/Modal/Modal";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { User } from "@/types";
import AdminLayout from "@/components/Layout/AdminLayout";
import Spinner from "@/components/Loading/Spinner";
import HoverablePhoto from "@/components/Profile/HovearblePhoto";
import axios from "axios";
import Button from "@/components/Button/Button";
import { Toaster, toast } from "sonner";

const AdminProfile = () => {
  const userId = Cookie.get("userId");
  const [onHover, setOnHover] = useState<boolean>(false);
  const [strPhoto, setStrPhoto] = useState<string>("");

  const user = useCustomSWR<User>(`${apiBaseUrl}/users/${userId}`);

  const postCloudinary = async (formData: FormData) => {
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgvshxgo4/image/upload",
        formData
      );
      if (response.status != 200) {
        throw new Error(
          `Something went wrong, failed to change photo ${response.statusText}`
        );
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const patchUser = async () => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/users/${userId}`, {
        photo: strPhoto,
      });
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Save successfull");
      return response.data;
    } catch (error) {
      toast.error("Update failed, there is something wrong.");
      console.error(error);
    }
  };

  const handleOnSave = async () => {
    await patchUser();
    user.mutate();
  };

  const handleOnChangeFiles = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileSelected = e.target.files?.[0];

    if (fileSelected) {
      const formData = new FormData();
      formData.append("file", fileSelected);
      formData.append("upload_preset", "shourier");
      const postResult = await postCloudinary(formData);
      setStrPhoto(postResult.secure_url);
    }
  };

  useEffect(() => {
    if (user.data) {
      setStrPhoto(user.data.photo);
    }
  }, [user.data]);

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Profile Page
      </h1>
      {user.error && (
        <div>Error, something bad happened. Please refresh the page</div>
      )}
      {user.isLoading && <Spinner />}
      {user.data && (
        <div className="flex flex-col mt-24 items-center gap-10">
          {strPhoto !== "" && (
            <div className="border-2 border-primary rounded-full">
              <HoverablePhoto
                name="photo"
                id="photo"
                photoSrc={strPhoto}
                onHover={onHover}
                setOnHover={setOnHover}
                handleOnChangeFiles={handleOnChangeFiles}
              />
            </div>
          )}
          {strPhoto != user.data.photo && (
            <div className="relative">
              <div className="absolute -right-8 -top-5">
                <Button onClick={handleOnSave} variants="primarySmall">
                  Save
                </Button>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full items-center">
              <h3 className="text-lg font-semibold">Email Address:</h3>
              <p>{user.data.email}</p>
            </div>
            <div className="flex flex-col w-full items-center">
              <h3 className="text-lg font-semibold">Full Name</h3>
              <p>{user.data.fname}</p>
            </div>
            <div className="flex flex-col w-full items-center">
              <h3 className="text-lg font-semibold">Phone Number</h3>
              <p>{user.data.phoneNumber}</p>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProfile;
