import type { ITransaction } from "../types/transactions";

export const HISTORY = [
    {
        id: 1,
        date: "2024-06-01",
        description: "Sent to Alice",
        amount: -200,
        type: "transfer",
        isSuccessful: true,
    },
    {
        id: 2,
        date: "2024-06-02",
        description: "Received from Bob",
        amount: 500,
        type: "deposit",
        isSuccessful: true,
    },
    {
        id: 4,
        date: "2024-06-04",
        description: "Transfer to Charlie",
        amount: -300,
        type: "transfer",
        isSuccessful: false,
    },
] as ITransaction[];