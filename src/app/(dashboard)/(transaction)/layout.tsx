export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-[380px] size-full flex items-center mx-auto">
            {children}
        </section>
    );
}