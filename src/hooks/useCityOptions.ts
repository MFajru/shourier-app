import { Address } from "@/types";
import { useEffect, useState } from "react";
import { useCustomSWR } from "./useCustomSWR";
import { TCity, TCityResult } from "@/types/api";

const useCityOptions = (addressData: Address) => {
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const city = useCustomSWR<TCityResult>(
    addressData.provinceId != ""
      ? `/api/getCity?province=${addressData.provinceId}`
      : null
  );
  useEffect(() => {
    if (city.data) {
      const cityName = city.data.rajaongkir.results.map(
        (value: TCity) => value.city_name
      );

      setCityOptions(cityName);
    }
  }, [city.data]);
  return { cityOptions, city };
};

export default useCityOptions;
