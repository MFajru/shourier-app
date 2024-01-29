import Button from "@/components/Button/Button";
import SelectField from "@/components/Form/SelectField";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { formatToRupiah } from "@/utils/formatter/formatToRupiah";
import Spinner from "@/components/Loading/Spinner";
import { useCustomSWR } from "@/hooks/useCustomSWR";
import {
  TCity,
  TCityResult,
  TCostResult,
  TProvince,
  TProvinceResult,
} from "@/types/api";
import { useRouter } from "next/router";

type TCheckCost = {
  originProvince: string;
  orProvinceName: string;
  originCity: string;
  orCityName: string;
  desProvince: string;
  desProvinceName: string;
  desCity: string;
  desCityName: string;
  weight: number;
};

type TCityOptions = {
  originCity: string[];
  desCity: string[];
};

export default function Home() {
  const userId = Cookies.get("userId");
  const router = useRouter();
  const [provinceOptions, setProvinceOptions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState<TCityOptions>({
    originCity: [],
    desCity: [],
  });
  const [checkCost, setCheckCost] = useState<TCheckCost>({
    originProvince: "",
    orProvinceName: "",
    originCity: "",
    orCityName: "",
    desProvince: "",
    desProvinceName: "",
    desCity: "",
    desCityName: "",
    weight: 1000,
  });
  const [estStartingCost, setEstStartingCost] = useState<number>(0);

  const { user, isLoading, error } = useUserStore();

  const province = useCustomSWR<TProvinceResult>("/api/getProvince");
  const originCity = useCustomSWR<TCityResult>(
    checkCost.originProvince != ""
      ? `/api/getCity?province=${checkCost.originProvince}`
      : null
  );
  const desCity = useCustomSWR<TCityResult>(
    checkCost.desProvince != ""
      ? `/api/getCity?province=${checkCost.desProvince}`
      : null
  );
  const estCost = useCustomSWR<TCostResult>(
    checkCost.originCity != "" && checkCost.desCity != ""
      ? `/api/getCost?origin=${checkCost.originCity}&destination=${checkCost.desCity}&weight=${checkCost.weight}`
      : null
  );

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name.includes("Province") && province.data) {
      const selectProvince = province.data.rajaongkir.results.find(
        (value: TProvince) => {
          return value.province === e.target.value;
        }
      );
      if (selectProvince) {
        setCheckCost((prevData) => {
          return {
            ...prevData,
            [e.target.id]: selectProvince.province,
            [e.target.name]: selectProvince.province_id,
          };
        });
        setCheckCost((prevData) => {
          let id = "orCityName";
          let name = "originCity";
          if (e.target.name.includes("des")) {
            name = "desCity";
            id = "desCityName";
          }
          return {
            ...prevData,
            [id]: "",
            [name]: "",
          };
        });
      }
    }
    if (e.target.name.includes("City") && (originCity.data || desCity.data)) {
      let selectCity = {} as TCity | undefined;
      if (
        e.target.name.includes("origin") &&
        originCity.data &&
        originCity.data.rajaongkir.results.length != 0
      ) {
        selectCity = originCity.data.rajaongkir.results.find((value: TCity) => {
          return value.city_name === e.target.value;
        });
      }

      if (
        e.target.name.includes("des") &&
        desCity.data &&
        desCity.data.rajaongkir.results.length != 0
      ) {
        selectCity = desCity.data.rajaongkir.results.find((value: TCity) => {
          return value.city_name === e.target.value;
        });
      }

      if (selectCity) {
        setCheckCost((prevData) => {
          return {
            ...prevData,
            [e.target.id]: selectCity?.city_name,
            [e.target.name]: selectCity?.city_id,
          };
        });
      }
    }
  };

  useEffect(() => {
    estCost.mutate();
  }, [checkCost, estCost]);

  useEffect(() => {
    console.log(estCost.data);
    console.log(checkCost);
    if (estCost.data) {
      if (estCost.data.rajaongkir.results[0].costs.length != 0) {
        setEstStartingCost(
          estCost.data.rajaongkir.results[0].costs[0].cost[0].value
        );
      } else {
        setEstStartingCost(0);
      }
    }
  }, [estCost.data]);

  useEffect(() => {
    if (province.data) {
      const provName = province.data.rajaongkir.results.map(
        (value: TProvince) => value.province
      );

      setProvinceOptions(provName);
    }
  }, [province.data]);

  useEffect(() => {
    if (originCity.data) {
      const cityName = originCity.data.rajaongkir.results.map(
        (value: TCity) => value.city_name
      );

      setCityOptions((prevData) => {
        return {
          ...prevData,
          originCity: cityName,
        };
      });
    }
    if (desCity.data) {
      const cityName = desCity.data.rajaongkir.results.map(
        (value: TCity) => value.city_name
      );

      setCityOptions((prevData) => {
        return {
          ...prevData,
          desCity: cityName,
        };
      });
    }
  }, [originCity.data, desCity.data]);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="px-[5%] lg:px-[12%]">
      <div className="flex flex-col pt-16 items-center justify-center gap-8 md:gap-20 px-8 md:px-[10%] lg:px-[8%]">
        <h1 className="text-4xl sm:text-[40px] text-center">
          Send package anywhere in Indonesia
        </h1>
        <form className="flex flex-col gap-4 w-full">
          <h3 className="text-2xl">Check Your Estimated Shipping Cost</h3>
          <div>
            <p className="text-xl font-semibold">Origin</p>
            <div className="flex flex-col md:flex-row md:gap-4">
              <SelectField
                id="orProvinceName"
                name="originProvince"
                placeholder="Choose origin province"
                options={provinceOptions}
                value={checkCost.orProvinceName ? checkCost.orProvinceName : ""}
                onChange={handleOnChange}
                err=""
              />

              <SelectField
                id="orCityName"
                name="originCity"
                placeholder="Choose origin city"
                options={cityOptions.originCity}
                value={checkCost.orCityName ? checkCost.orCityName : ""}
                onChange={handleOnChange}
                err=""
              />
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">Destination</p>
            <div className="flex flex-col md:flex-row md:gap-4">
              <SelectField
                id="desProvinceName"
                name="desProvince"
                options={provinceOptions}
                value={
                  checkCost.desProvinceName ? checkCost.desProvinceName : ""
                }
                placeholder="Choose destination province"
                onChange={handleOnChange}
                err=""
              />
              <SelectField
                id="desCityName"
                name="desCity"
                options={cityOptions.desCity}
                value={checkCost.desCityName ? checkCost.desCityName : ""}
                placeholder="Choose destination city"
                onChange={handleOnChange}
                err=""
              />
            </div>
          </div>

          {checkCost.originCity != "" &&
          checkCost.desCity != "" &&
          !estCost.isLoading &&
          estStartingCost === 0 ? (
            <p className="text-center text-red-500">Shipping not supported</p>
          ) : (
            <p className="text-primary text-center">
              Estimated Starting Cost: {formatToRupiah(estStartingCost)}
            </p>
          )}
          <div className="mt-10 w-full">
            <Button
              variants="primary"
              textSize="medium"
              onClick={() => router.push("/user/shipping/newShipping")}
            >
              Send a package now!
            </Button>
          </div>
        </form>
      </div>
      {error != "" ? (
        <div className="text-center">
          There is something wrong when fetching the data, please refresh the
          page
        </div>
      ) : (
        <div className="w-full flex flex-col items-center mt-14 px-8 md:px-[20%]">
          <div className="bg-white border-4 border-solid border-primary rounded-3xl flex flex-col items-center w-full sm:w-[500px] px-8 py-6 gap-4">
            <div className="flex flex-col items-center">
              <p className="text-[28px]">Your Balance</p>
              {user === null ? (
                <p className="font-bold">
                  <Link href={"/auth/login"} className="text-primary underline">
                    Login
                  </Link>{" "}
                  to see your balance.
                </p>
              ) : isLoading ? (
                <Spinner />
              ) : (
                <p className="text-[28px] font-bold">
                  {user.balance && formatToRupiah(user.balance)}
                </p>
              )}
            </div>
            {user && (
              <Link href={"/user/topUp"} className="text-primary underline">
                Top up Balance
              </Link>
            )}
          </div>
        </div>
      )}

      {/* <div className="absolute bg-primary w-full h-[150px] bottom-0 z-0"></div> */}
    </div>
  );
}
