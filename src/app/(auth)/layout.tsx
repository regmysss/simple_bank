export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#2754C8] to-[#110F72] px-4">
            {children}
        </main>
    );
}