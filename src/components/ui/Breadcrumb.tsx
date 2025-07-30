'use client'
import formatSegment from "@/utils/formatSegment";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Breadcrumb() {
    const pathname = usePathname();
    const router = useRouter();

    const segments = pathname.split('/').filter(Boolean).map(formatSegment);

    if (segments.length === 1)
        return <h2 className="text-black text-lg font-medium">{segments[0]}</h2>

    return (
        <section className="flex items-center gap-4">
            <button
                className="text-gray-700 cursor-pointer"
                onClick={() => router.back()}
            >
                <ChevronLeft />
            </button>
            <h2 className="flex items-center gap-4 text-lg">
                {
                    segments.map((segment, index) => (
                        <Fragment key={index}>
                            <span

                                className={index < segments.length - 1 ? "text-gray-500 font-light" : "text-black font-medium"}
                            >
                                {segment}
                            </span>
                            {
                                index < segments.length - 1 &&
                                <span className="text-gray-500">•</span>
                            }
                        </Fragment>
                    ))
                }
            </h2>
        </section>
    )
}