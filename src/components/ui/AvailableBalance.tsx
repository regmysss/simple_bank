import { Eye } from 'lucide-react'

export default function AvailableBalance({ balance }: { balance: string }) {
    const formatedBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(balance));

    return (
        <div
            className="flex flex-col gap-3 text-white text-right"
        >
            <div className="flex items-center justify-end gap-2 text-lg">
                <Eye />
                <p>Available Balance</p>
            </div>
            <p className="font-bold text-3xl">{formatedBalance}</p>
        </div>
    )
}