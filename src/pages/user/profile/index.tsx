import HoverablePhoto from "@/components/Profile/HovearblePhoto";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { apiBaseUrl } from "@/config";
import { Toaster, toast } from "sonner";
import { useUserStore } from "@/stores/userStore";
import { User } from "@/types";
import Button from "@/components/Button/Button";
import Spinner from "@/components/Loading/Spinner";
import { InputField } from "@/components/Form/InputField";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { TEditPromoError } from "@/types/error";
import { regexToNumber } from "@/utils/formValidation/isNumber";

const UserProfile = () => {
  const { user, error, isLoading, getUser } = useUserStore();
  const [onHover, setOnHover] = useState<boolean>(false);
  const [strPhoto, setStrPhoto] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editForm, setEditForm] = useState<Partial<User>>({
    fname: "",
    email: "",
    password: "",
    phoneNumber: "",
    photo: "",
  });
  const [isDataChange, setIsDataChange] = useState<boolean>(false);
  const [isError, setIsError] = useState<TEditPromoError>({
    fname: false,
    email: false,
    phoneNumber: false,
    password: false,
    photo: false,
  });

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
      if (user && user.id) {
        console.log("in");
        const response = await axios.patch(
          `${apiBaseUrl}/users/${user.id}`,
          editForm
        );
        if (response.status != 200) {
          throw new Error(`Something bad happened, ${response.statusText}`);
        }
        toast.success("Save successfull");
        return response.data;
      }
    } catch (error) {
      toast.error("Update failed, there is something wrong.");
      console.error(error);
    }
  };

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!isDataChange) {
      setIsDataChange(true);
    }
    if (e.target.name === "photo") {
      const fileSelected = e.target.files?.[0];
      if (fileSelected) {
        const formData = new FormData();
        formData.append("file", fileSelected);
        formData.append("upload_preset", "shourier");
        const postResult = await postCloudinary(formData);
        setStrPhoto(postResult.secure_url);
        value = postResult.secure_url;
      }
    }

    if (e.target.name === "phoneNumber" && value.length <= 12) {
      value = regexToNumber(value);
      setEditForm((prevData) => {
        return {
          ...prevData,
          [e.target.name]: value,
        };
      });
      return;
    }

    if (e.target.name !== "phoneNumber") {
      setEditForm((prevData) => {
        return {
          ...prevData,
          [e.target.name]: value,
        };
      });
    }
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleOnSave = async () => {
    await patchUser();
    setIsEditMode(false);
    if (user && user.id) {
      getUser(user.id);
    }
  };

  useEffect(() => {
    if (user && user.photo) {
      setStrPhoto(user.photo);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setEditForm({
        fname: user.fname,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        photo: user.photo,
      });
    }
  }, [user]);

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="flex flex-col items-center relative">
        <div className="bg-primary w-full h-44"></div>

        {error && (
          <div>Error, something bad happened. Please refresh the page</div>
        )}
        {isLoading && <Spinner />}

        {user && (
          <div className="flex flex-col items-center gap-10 px-[5%] lg:px-[12%] py-12 top-6 w-full">
            {strPhoto !== "" ? (
              <div className="border-2 border-primary rounded-full absolute top-20">
                <HoverablePhoto
                  name="photo"
                  id="photo"
                  photoSrc={strPhoto}
                  onHover={onHover}
                  setOnHover={setOnHover}
                  handleOnChangeFiles={handleOnChange}
                  isEditable={isEditMode}
                />
              </div>
            ) : (
              <div className="w-[180px] h-[180px] bg-white rounded-full relative">
                <Spinner />
              </div>
            )}
            <div className="flex flex-col w-full lg:w-4/5 mt-20">
              <div className="flex flex-col md:flex-row md:gap-4">
                <InputField
                  type="text"
                  name="fname"
                  label="Full Name"
                  value={editForm.fname!}
                  onChange={handleOnChange}
                  disabled={!isEditMode}
                />
                <InputField
                  type="text"
                  name="phoneNumber"
                  label="Phone Number"
                  value={editForm.phoneNumber!}
                  onChange={handleOnChange}
                  disabled={!isEditMode}
                />
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <InputField
                  type="text"
                  name="email"
                  label="Email Address"
                  value={editForm.email!}
                  onChange={handleOnChange}
                  disabled={!isEditMode}
                />
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  value={editForm.password!}
                  onChange={handleOnChange}
                  disabled={!isEditMode}
                  showEye={isEditMode}
                  isPassword={true}
                />
              </div>
              <div className="border border-solid border-primary p-4 rounded-xl mt-2">
                <div className="flex flex-col gap-2 relative">
                  <p className="text-sm">My Referral Code</p>
                  <div className="w-full border border-solid border-gray-200 p-3 rounded-lg bg-gray-100">
                    <p className="font-semibold text-gray-500">
                      {user.refCode!}
                    </p>
                  </div>
                  <DocumentDuplicateIcon
                    width={24}
                    height={24}
                    className="absolute right-3 bottom-4 text-gray-600"
                  />
                </div>
              </div>
            </div>

            {!isEditMode ? (
              <div>
                <Button variants="primary" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 ">
                <div>
                  <Button
                    variants="primary"
                    onClick={handleOnSave}
                    disabled={!isDataChange}
                  >
                    Save Changes
                  </Button>
                </div>
                <div>
                  <Button
                    variants="borderedError"
                    onClick={() => setIsEditMode(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
