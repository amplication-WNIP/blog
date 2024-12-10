import { Sdfghjk as TSdfghjk } from "../api/sdfghjk/Sdfghjk";

export const SDFGHJK_TITLE_FIELD = "id";

export const SdfghjkTitle = (record: TSdfghjk): string => {
  return record.id?.toString() || String(record.id);
};
