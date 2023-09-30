import { Dasda as TDasda } from "../api/dasda/Dasda";

export const DASDA_TITLE_FIELD = "id";

export const DasdaTitle = (record: TDasda): string => {
  return record.id?.toString() || String(record.id);
};
