import { Shipping, ShippingDetail, User } from "@/types";
import formatDate from "@/utils/formatter/formatDate";
import { printCategory } from "@/utils/printCategory";
import React, { useState } from "react";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import { formatToRupiah } from "@/utils/formatter/formatToRupiah";

type TMyShippingCard = {
  shippingDetail: ShippingDetail;
  userData: User | Partial<User>;
  index: number;
  handleReview: (idx: number, newReview: number) => Promise<void>;
};

const MyShippingCard = ({
  shippingDetail,
  index,
  userData,
  handleReview,
}: TMyShippingCard) => {
  const [selectedRating, setSelectedRating] = useState<number>(
    shippingDetail.review
  );

  return (
    <div className="bg-white drop-shadow-sm rounded-xl text-sm md:text-base w-full sm:w-[600px] md:w-[700px] lg:w-[800px] p-10 border border-solid border-gray-200">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <table>
            <tbody>
              <tr>
                <td className="font-semibold">Shipping ID</td>
                <td>: {shippingDetail.id}</td>
              </tr>
              <tr>
                <td className="font-semibold"> Sender</td>
                <td>: {userData.fname}</td>
              </tr>
              <tr>
                <td className="font-semibold">Receiver</td>
                <td>: {shippingDetail.receiver}</td>
              </tr>
              <tr>
                <td className="font-semibold">Shipping Date</td>
                <td>: {formatDate(shippingDetail.createdAt)}</td>
              </tr>
              <tr>
                <td className="font-semibold">Category</td>
                <td>: {printCategory(shippingDetail.category)}</td>
              </tr>
              <tr>
                <td className="font-semibold">Weight</td>
                <td>: {shippingDetail.weight} KG</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-[20%] gap-4">
          <div className="flex flex-col">
            <p className="font-semibold">Status:</p>
            {shippingDetail.status === "Pending" && (
              <div className="text-white text-center">
                <p className="bg-orange-500 py-0.5 rounded-full">
                  {shippingDetail.status}
                </p>
              </div>
            )}
            {shippingDetail.status === "On Delivery" && (
              <div className="text-white text-center">
                <p className="bg-green-500 py-0.5 rounded-full">
                  {shippingDetail.status}
                </p>
              </div>
            )}
            {shippingDetail.status === "Finished" && (
              <div className="text-white text-center">
                <p className="bg-gray-400 py-0.5 rounded-full">
                  {shippingDetail.status}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Total Cost:</p>
            <p>{formatToRupiah(shippingDetail.costAfter)}</p>
          </div>
          {shippingDetail.status === "Finished" &&
            shippingDetail.review != 0 && (
              <div>
                <p className="font-semibold">Review:</p>
                <Rating
                  name={`rating-${shippingDetail.id}`}
                  review={shippingDetail.review}
                  isReadOnly={true}
                />
              </div>
            )}
          {shippingDetail.status === "Finished" &&
            shippingDetail.review === 0 && (
              <div className="relative">
                <p className="font-semibold">Review:</p>
                <Rating
                  name={`rating-${shippingDetail.id}`}
                  review={shippingDetail.review}
                  selectedRating={selectedRating}
                  setSelectedRating={setSelectedRating}
                />
                <div className="mt-2 absolute">
                  <Button
                    variants="primaryBorderedTextSm"
                    onClick={() => handleReview(index, selectedRating)}
                  >
                    Submit Review
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MyShippingCard;
