import useAxios from "axios-hooks";
import { useMemo } from "react";
import { apiUrl } from "../config/env";

export function useRate() {

  const [{ data }] = useAxios(`${apiUrl}/rate`);

  const rate = useMemo<number>(() => data || 1, [data]);

  return [rate]
}
