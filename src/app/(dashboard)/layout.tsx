import Header from "@/components/layout/Header"
import Navigation from "@/components/layout/Navigation"
import Breadcrumb from "@/components/ui/Breadcrumb";
import ClientPrefetchWrapper from "@/components/ui/ClientPrefetchWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClientPrefetchWrapper>
            <div className="min-h-full flex">
                <Navigation />
                <div className="flex flex-col min-h-full w-full">
                    <Header />
                    <main className="flex-1 flex flex-col gap-8 p-8 max-w-[900px] mx-auto w-full">
                        <Breadcrumb />
                        {children}
                    </main>
                </div>
            </div>
        </ClientPrefetchWrapper>
    );
}