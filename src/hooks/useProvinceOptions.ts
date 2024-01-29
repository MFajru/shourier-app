import { useEffect, useState } from "react";
import { useCustomSWR } from "./useCustomSWR";
import { TProvince, TProvinceResult } from "@/types/api";

const useProvinceOptions = () => {
  const [provinceOptions, setProvinceOptions] = useState<string[]>([]);

  const province = useCustomSWR<TProvinceResult>("/api/getProvince");
  useEffect(() => {
    if (province.data) {
      const provName = province.data.rajaongkir.results.map(
        (value: TProvince) => value.province
      );

      setProvinceOptions(provName);
    }
  }, [province.data]);
  return { provinceOptions, province };
};

export default useProvinceOptions;
