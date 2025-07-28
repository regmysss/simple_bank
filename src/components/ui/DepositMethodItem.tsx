interface DepositMethodItemProps {
    label: string;
    defaultChecked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function DepositMethodItem(props: DepositMethodItemProps) {
    const { label, ...rest } = props;

    return (
        <label className="bg-white p-4 rounded-sm flex items-center justify-between gap-2 cursor-pointer">
            {label}
            <input
                className="size-5"
                type="radio"
                name="payment-method"
                {...rest}
            />
        </label>
    )
}
