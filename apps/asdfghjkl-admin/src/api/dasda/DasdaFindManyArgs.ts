import { DasdaWhereInput } from "./DasdaWhereInput";
import { DasdaOrderByInput } from "./DasdaOrderByInput";

export type DasdaFindManyArgs = {
  where?: DasdaWhereInput;
  orderBy?: Array<DasdaOrderByInput>;
  skip?: number;
  take?: number;
};
