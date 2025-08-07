'use client';
import useAccount from "@/hooks/useAccount";


export default function ClientPrefetchWrapper({ children }: { children: React.ReactNode }) {
    const { account, isLoading } = useAccount();

    if (isLoading || !account) {
        return <div className="p-8 text-center">Завантаження акаунта...</div>;
    }

    return <>{children}</>;
}
