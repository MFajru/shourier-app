export type TProvince = {
  province_id: string;
  province: string;
};

export type TCity = {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
};

export type TProvinceResult = {
  rajaongkir: {
    query: {
      province: string;
      id: string;
    };
    status: {
      code: number;
      description: string;
    };
    results: {
      province_id: string;
      province: string;
    }[];
  };
};

export type TCityResult = {
  rajaongkir: {
    query: {
      province: string;
    };
    status: {
      code: number;
      description: string;
    };
    results: {
      city_id: string;
      province_id: string;
      province: string;
      type: string;
      city_name: string;
      postal_code: string;
    }[];
  };
};

export type TCostResult = {
  rajaongkir: {
    query: {
      province: string;
    };
    status: {
      code: number;
      description: string;
    };
    origin_details: {
      city_id: string;
      province_id: string;
      province: string;
      type: string;
      city_name: string;
      postal_code: string;
    };
    destination_details: {
      city_id: string;
      province_id: string;
      province: string;
      type: string;
      city_name: string;
      postal_code: string;
    };
    results: {
      code: string;
      name: string;
      costs: {
        service: string;
        description: string;
        cost: {
          value: number;
          etd: string;
          note: string;
        }[];
      }[];
    }[];
  };
};
