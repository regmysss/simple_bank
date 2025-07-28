export const SEND_MONEY_CONFIG = [
    {
        label: "Amount to Send (USD)",
        currencySymbol: true,
        name: "send-amount",
        type: "number",
        placeholder: "0.00",
        required: true,
    },
    {
        label: "Recipient Account Number",
        currencySymbol: false,
        name: "recipient-account",
        type: "text",
        placeholder: "0000000000",
        required: true,
    },
    {
        label: "Remark",
        currencySymbol: false,
        name: "remark",
        type: "text",
        placeholder: "Remark",
        required: false,
    }
]