import { PAGES } from "@/shared/constants/routes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-white">Welcome to Simple Bank!</h1>
      <div className="flex gap-4">
        <Link className="px-5 py-2.5 bg-white rounded-2xl font-semibold hover:bg-white/85" href={PAGES.LOGIN}>Login</Link>
        <Link className="px-5 py-2.5 bg-white rounded-2xl font-semibold hover:bg-white/85" href={PAGES.REGISTER}>Register</Link>
      </div>
    </div>
  );
}
