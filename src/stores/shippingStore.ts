import { apiBaseUrl } from "@/config";
import { ShippingDetail, User } from "@/types";
import getErrorMessage from "@/utils/getErrorMessage";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TShippingStore = {
  savedShippingForm: ShippingDetail | null;
  saveShippingForm: (shippingForm: ShippingDetail | null) => void;
};

export const useShippingStore = create<TShippingStore>()(
  persist(
    (set) => ({
      savedShippingForm: null,
      saveShippingForm: (shippingForm: ShippingDetail | null) =>
        set({ savedShippingForm: shippingForm }),
    }),
    {
      name: "newShipping",
      skipHydration: true,
    }
  )
);
