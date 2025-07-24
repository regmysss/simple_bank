import { Home, ArrowBigUp, ArrowBigDown, History } from "lucide-react";
import { PAGES } from "./routes";

export const NAVIGATION = [
    {
        name: "Home",
        icon: Home,
        link: PAGES.HOME,
    },
    {
        name: "Deposit Money",
        icon: ArrowBigDown,
        link: PAGES.DEPOSIT_MONEY,
    },
    {
        name: "Send Money",
        icon: ArrowBigUp,
        link: PAGES.SEND_MONEY,
    },
    {
        name: "History",
        icon: History,
        link: PAGES.HISTORY,
    },
]