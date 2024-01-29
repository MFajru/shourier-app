import MyShippingCard from "@/components/Card/MyShippingCard";
import Spinner from "@/components/Loading/Spinner";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { useUserStore } from "@/stores/userStore";
import { Shipping, ShippingDetail } from "@/types";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Button from "@/components/Button/Button";
import { useRouter } from "next/router";

const MyShipping = () => {
  const router = useRouter();
  const userId = Cookies.get("userId");
  const { user, isLoading, error } = useUserStore();

  const shipping = useCustomSWR<Shipping>(
    userId ? `${apiBaseUrl}/shipping/${parseInt(userId) - 1}` : null
  );
  const patchShipping = async (newShippingDetails: ShippingDetail[]) => {
    try {
      if (userId) {
        const response = await axios.patch(
          `${apiBaseUrl}/shipping/${parseInt(userId) - 1}`,
          {
            shippingDetails: newShippingDetails,
          }
        );
        if (response.status != 200) {
          throw new Error(`Something bad happened, ${response.status}`);
        }
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnSubmitReview = async (idx: number, newReview: number) => {
    if (shipping.data) {
      const existData = shipping.data.shippingDetails;
      const newShippingDetails = existData;
      const updateShippingDetail = existData[idx];
      const updated = {
        ...updateShippingDetail,
        review: newReview,
      };
      newShippingDetails[idx] = updated;
      await patchShipping(newShippingDetails);
      shipping.mutate();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-primary w-full py-12 px-[5%] lg:px-[12%]">
        <h1 className="text-3xl font-semibold text-white">My Shipping List</h1>
      </div>
      <div className="py-10 flex flex-col gap-8 px-[5%] lg:px-[12%] items-center">
        <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[800px] flex justify-end">
          <div>
            <Button
              variants="primary"
              onClick={() => router.push("/user/shipping/newShipping")}
            >
              New Shipping
            </Button>
          </div>
        </div>
        {error != "" && (
          <div>Error when getting the data, please refresh the page</div>
        )}
        {isLoading && <Spinner />}
        {user &&
          shipping.data &&
          shipping.data.shippingDetails.map((detail, idx) => (
            <div key={detail.id} className="w-full sm:w-fit">
              <MyShippingCard
                index={idx}
                shippingDetail={detail}
                userData={user}
                handleReview={handleOnSubmitReview}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyShipping;
