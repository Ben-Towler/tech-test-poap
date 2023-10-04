import { api } from "@/app/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CollectionData } from "../common/types";

type Props = {
  address: string;
  enabled: boolean;
}

const getActionsScan = (address: string) => api.get<Promise<CollectionData[]>>(`/actions/scan/${address}`).then(res => res.data);

export const useGetActionsScan = ({ address, enabled }: Props) => (
  useQuery({
    queryKey: ['actions', address],
    queryFn: () => getActionsScan(address),
    enabled,
    retry: (failureCount, error: AxiosError) =>  error.response?.status !== 400 && failureCount < 5 ? true : false
  })
);
