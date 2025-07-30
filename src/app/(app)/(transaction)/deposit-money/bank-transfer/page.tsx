import TransactionCheck from "@/components/ui/TransactionCheck";

export default function Page() {
    return (
        <TransactionCheck
            title="Bank Transfer"
            description="Make Bank Transfer to The Account Details Below"
            amount="100.00"
        />
    );
}