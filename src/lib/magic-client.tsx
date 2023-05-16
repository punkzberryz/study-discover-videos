import { Magic } from "magic-sdk";

const createMagic = (): Magic | null => {
  if (typeof window !== "undefined")
    return new Magic(`${process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY}`, {
      network: "mainnet",
    });
  return null;
};
export const magic = createMagic();
