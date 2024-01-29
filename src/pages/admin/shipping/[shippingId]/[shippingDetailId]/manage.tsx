import Button from "@/components/Button/Button";
import { InputField } from "@/components/Form/InputField";
import SelectField from "@/components/Form/SelectField";
import AdminLayout from "@/components/Layout/AdminLayout";
import Rating from "@/components/Rating/Rating";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { Shipping, ShippingDetail, User } from "@/types";
import formatDate from "@/utils/formatter/formatDate";
import { formatToRupiah } from "@/utils/formatter/formatToRupiah";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const EditShipping = () => {
  const [shippingStatus, setShippingStatus] = useState("");
  const router = useRouter();

  const specShipping = useCustomSWR<Shipping>(
    router.query.shippingId
      ? `${apiBaseUrl}/shipping/${router.query.shippingId}`
      : null
  );

  const specUser = useCustomSWR<User>(
    specShipping.data
      ? `${apiBaseUrl}/users/${specShipping.data?.userId}`
      : null
  );

  const patchShipping = async (updatedArr: ShippingDetail[]) => {
    try {
      const response = await axios.patch(
        `${apiBaseUrl}/shipping/${router.query.shippingId}`,
        {
          shippingDetails: updatedArr,
        }
      );
      if (response.status != 200) {
        throw new Error(`Something bad happened, ${response.statusText}`);
      }
      toast.success("Save successfull");
      return response.data;
    } catch (error) {
      toast.error("Save failed, there is something wrong");
      console.error(error);
    }
  };

  const handleOnSave = async (existData: ShippingDetail[], idx: number) => {
    const tempData = existData;
    const updateShippingDetail = existData[idx];
    if (shippingStatus != "") {
      const updated = {
        ...updateShippingDetail,
        status: shippingStatus,
        updatedAt: new Date().toISOString(),
      };
      tempData[idx] = updated;
      await patchShipping(tempData);
      setTimeout(() => {
        router.replace("/admin/shipping");
      }, 1000);
    }
  };

  const handleOnStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShippingStatus(e.target.value);
  };

  return (
    <AdminLayout>
      <Toaster position="top-center" richColors />
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Detail & Edit Status of Shipping {router.query.shippingDetailId}
      </h1>
      <div className="flex flex-col">
        {specShipping.error && <div>error</div>}
        {specShipping.isLoading ? (
          <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : (
          <div>
            {specShipping.data &&
              specShipping.data.shippingDetails.map((detail, idx) =>
                detail.id === router.query.shippingDetailId ? (
                  <div key={detail.id}>
                    <div className="w-full flex mt-5 items-center gap-20">
                      <div className="flex items-center gap-4">
                        <p className="font-semibold">Shipping Status:</p>
                        <div className="w-40">
                          <SelectField
                            id="status"
                            name="status"
                            variants="small"
                            value={
                              shippingStatus === ""
                                ? detail.status
                                : shippingStatus
                            }
                            options={["Pending", "On Delivery", "Finished"]}
                            onChange={handleOnStatus}
                          />
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <p className="font-semibold">Review:</p>
                        <Rating
                          review={detail.review}
                          isReadOnly={true}
                          name={`rating-${detail.id}`}
                        />
                      </div>
                    </div>

                    <table className="w-full border-separate border-spacing-y-2">
                      <tbody>
                        <tr>
                          <td className="font-semibold text-xl mt-2">
                            Shipping Info
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Shipping ID</td>
                          <td>: {detail.id}</td>

                          <td className="font-semibold">Shipping Date</td>
                          <td>: {formatDate(detail.createdAt)}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Sender Name</td>
                          <td>: {specUser.data?.fname}</td>
                          <td className="font-semibold">Sender Phone Number</td>
                          <td>: {specUser.data?.phoneNumber}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Receiver Name</td>
                          <td>: {detail.receiver}</td>
                          <td className="font-semibold">
                            Receiver Phone Number
                          </td>
                          <td>: {detail.receiverPhone}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Origin</td>
                          <td>: {detail.origin}</td>
                          <td className="font-semibold">Destination</td>
                          <td>: {detail.destination}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Origin Full Address</td>
                          <td>: {detail.originFull}</td>
                          <td className="font-semibold">
                            Destination Full Address
                          </td>
                          <td>: {detail.destinationFull}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold mt-4 text-xl">
                            Package Info
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Length</td>
                          <td>: {detail.length} CM</td>
                          <td className="font-semibold">Width</td>
                          <td>: {detail.width} CM</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Height</td>
                          <td>: {detail.height} CM</td>
                          <td className="font-semibold">Weight</td>
                          <td>: {detail.weight} KG</td>
                        </tr>
                        <tr>
                          <td className="font-semibold mt-4 text-xl">
                            Additional Info
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Delivery Category</td>
                          <td>
                            :{" "}
                            {detail.category === "1"
                              ? "OKE"
                              : detail.category === "2"
                              ? "Reguler"
                              : "YES"}
                          </td>
                          <td className="font-semibold">Add On</td>
                          <td>
                            :{" "}
                            {detail.addOn === "1"
                              ? "Wooden Package"
                              : "Bubble Wrap"}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Delivery Cost</td>
                          <td>: {detail.categoryCost}</td>
                          <td className="font-semibold">Add On Cost</td>
                          <td>: {detail.addOnCost}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold mt-4 text-xl">
                            Cost Summary
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Sub Cost</td>
                          <td>: {formatToRupiah(detail.costBefore)}</td>
                          <td className="font-semibold">Promo Code</td>
                          <td>: {detail.promoUsed}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Total Discount</td>
                          <td>: {formatToRupiah(detail.discountAmount)}</td>
                          <td className="font-semibold">Total Cost</td>
                          <td>: {formatToRupiah(detail.costAfter)}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex justify-start w-full mt-16">
                      <div className="flex gap-2 w-28">
                        {shippingStatus === "" ||
                        shippingStatus === detail.status ? (
                          <Button disabled>Save</Button>
                        ) : (
                          <Button
                            variants="primary"
                            onClick={() =>
                              specShipping.data &&
                              handleOnSave(
                                specShipping.data.shippingDetails,
                                idx
                              )
                            }
                          >
                            Save
                          </Button>
                        )}
                        <Button onClick={() => router.back()}>Go Back</Button>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default EditShipping;
