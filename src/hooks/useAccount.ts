import { fetcher } from '@/lib/fetcher';
import useSWR, { mutate } from 'swr';

export default function useAccount() {
    const { data, error, isLoading } = useSWR('/api/account', fetcher);

    const refresh = () => mutate('/api/account');

    return {
        account: data,
        isLoading,
        isError: error,
        refresh
    };
}