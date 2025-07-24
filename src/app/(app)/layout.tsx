import Header from "@/components/layout/Header"
import Navigation from "@/components/layout/Navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#F9FAFB] h-screen flex">
            <Navigation />
            <div className="flex-1 flex flex-col">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}