import LineChart from "@/components/Chart/LineChart";
import AdminLayout from "@/components/Layout/AdminLayout";
import { apiBaseUrl } from "@/config";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import { Shipping } from "@/types";
import { Earnings } from "@/types/chart";
import { ChartDataset } from "chart.js";
import moment from "moment";
import React, { useEffect, useState } from "react";

const EarningReports = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [netIncomeNumber, setNetIncomeNumber] = useState<number[]>([]);
  const [grossIncomeNumber, setGrossIncomeNumber] = useState<number[]>([]);
  const [discountAmountNumber, setDiscountAmountNumber] = useState<number[]>(
    []
  );
  const [netIncomePerMonth, setNetIncomePerMonth] = useState<Earnings>({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  });
  const [grossIncomePerMonth, setGrossIncomePerMonth] = useState<Earnings>({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  });
  const [discountAmountPerMonth, setDiscountAmountPerMonth] =
    useState<Earnings>({
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    });

  const shipping = useCustomSWR<Shipping[]>(`${apiBaseUrl}/shipping`);

  useEffect(() => {
    if (shipping.data) {
      const tempNetIncome = {
        january: 0,
        february: 0,
        march: 0,
        april: 0,
        may: 0,
        june: 0,
        july: 0,
        august: 0,
        september: 0,
        october: 0,
        november: 0,
        december: 0,
      };
      const tempGrossIncome = {
        january: 0,
        february: 0,
        march: 0,
        april: 0,
        may: 0,
        june: 0,
        july: 0,
        august: 0,
        september: 0,
        october: 0,
        november: 0,
        december: 0,
      };
      const tempDiscountAmount = {
        january: 0,
        february: 0,
        march: 0,
        april: 0,
        may: 0,
        june: 0,
        july: 0,
        august: 0,
        september: 0,
        october: 0,
        november: 0,
        december: 0,
      };
      for (const ship of shipping.data) {
        for (const detail of ship.shippingDetails) {
          const month = moment(detail.createdAt)
            .format("MMMM")
            .toLowerCase() as keyof Earnings;
          tempNetIncome[month] += detail.costAfter;
          tempGrossIncome[month] += detail.costBefore;
          tempDiscountAmount[month] += detail.discountAmount;
        }
      }
      setNetIncomePerMonth(tempNetIncome);
      setGrossIncomePerMonth(tempGrossIncome);
      setDiscountAmountPerMonth(tempDiscountAmount);
    }
  }, [shipping.data]);

  useEffect(() => {
    if (netIncomePerMonth && grossIncomePerMonth && discountAmountPerMonth) {
      const tempNetIncome = [];
      const tempGrossIncome = [];
      const tempDiscountAmount = [];
      for (const key in netIncomePerMonth) {
        tempNetIncome.push(netIncomePerMonth[key as keyof Earnings]);
        tempGrossIncome.push(grossIncomePerMonth[key as keyof Earnings]);
        tempDiscountAmount.push(discountAmountPerMonth[key as keyof Earnings]);
      }

      setNetIncomeNumber(tempNetIncome);
      setGrossIncomeNumber(tempGrossIncome);
      setDiscountAmountNumber(tempDiscountAmount);
    }
  }, [netIncomePerMonth, grossIncomePerMonth, discountAmountPerMonth]);

  return (
    <AdminLayout>
      <h1 className="uppercase font-semibold text-2xl text-black pt-14">
        Earning Reports by Month
      </h1>
      <div className="h-[600px] mt-12">
        <LineChart
          datasets={[
            {
              label: "Net Income",
              data: netIncomeNumber,
              borderColor: "green",
              backgroundColor: "green",
            },
            {
              label: "Gross Income",
              data: grossIncomeNumber,
              borderColor: "blue",
              backgroundColor: "blue",
            },
            {
              label: "Discount Amount",
              data: discountAmountNumber,
              borderColor: "red",
              backgroundColor: "red",
            },
          ]}
          labels={months}
          chartTitle="Earning per Month Chart"
        />
      </div>
    </AdminLayout>
  );
};

export default EarningReports;
