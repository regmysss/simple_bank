interface DepositMethodItemProps {
    depositMethod: {
        label: string;
        value: string;
        defaultChecked?: boolean;
    };
}


export default function DepositMethodItem({ depositMethod }: DepositMethodItemProps) {
    return (
        <label className="bg-white p-4 rounded-sm flex items-center justify-between gap-2 cursor-pointer">
            {depositMethod.label}
            <input
                className="size-5"
                type="radio"
                name="payment-method"
                value={depositMethod.value}
                defaultChecked={depositMethod.defaultChecked}
            />
        </label>
    )
}
