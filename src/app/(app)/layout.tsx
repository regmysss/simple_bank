import Header from "@/components/layout/Header"
import Navigation from "@/components/layout/Navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex">
            <Navigation />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-5 overflow-y-auto">
                    <div className="max-w-[900px] mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}