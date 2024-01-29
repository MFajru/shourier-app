import React from "react";

const SummaryCard = () => {
  return (
    <div className="bg-white px-8 py-6 w-full flex flex-col gap-8 rounded-3xl drop-shadow">
      <h3 className="text-2xl font-semibold">Shipping Cost</h3>
      <div className="flex flex-col font-medium gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-lg">Shipping Cost</p>
            <p className="text-xs text-gray-400">YES</p>
          </div>
          <p className="text-lg">Rp 10.000,00</p>
        </div>
        <div className="flex justify-between text-lg">
          <p>Promo Code</p>
          <p>PROMODISKON</p>
        </div>
        <div className="flex justify-between text-lg">
          <p>Promo Discount</p>
          <p className="text-red-500">-Rp 5.000,00</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 text-lg">
            <p>Add On</p>
            <p className="text-xs text-gray-400">Wooden Package</p>
          </div>
          <p className="text-lg">Rp 25.000,00</p>
        </div>
      </div>
      <div className="flex justify-between font-semibold border-t border-black pt-6">
        <p className="text-semibold">Grand Total</p>
        <p className="text-xl">Rp 40.000,00</p>
      </div>
    </div>
  );
};

export default SummaryCard;
