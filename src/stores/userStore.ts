import { apiBaseUrl } from "@/config";
import { User } from "@/types";
import getErrorMessage from "@/utils/getErrorMessage";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  user: Partial<User> | null;
  error: string;
  isLoading: boolean;
  getUser: (userId: string | number) => Promise<void>;
  resetUserStore: () => void;
};

const initialState = {
  user: null,
  error: "",
  isLoading: false,
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,
      user: null,
      error: "",
      isLoading: false,
      getUser: async (userId: string | number) => {
        set({ isLoading: true });
        try {
          const response = await axios.get(`${apiBaseUrl}/users/${userId}`);
          if (response.status != 200) {
            throw new Error(`Something bad happened, ${response.statusText}`);
          }
          const result = response.data as User;
          set({
            user: {
              id: result.id,
              email: result.email,
              fname: result.fname,
              password: result.password,
              phoneNumber: result.phoneNumber,
              photo: result.photo,
              balance: result.balance,
              totalSpent: result.totalSpent,
              refCode: result.refCode,
            },
          });
        } catch (error) {
          set({ error: getErrorMessage(error) });
          console.error(error);
        } finally {
          set({ isLoading: false });
        }
      },
      resetUserStore: () => set(initialState),
    }),
    {
      name: "userInfo",
      skipHydration: true,
    }
  )
);
