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

export const DEPOSIT_MONEY_ATM_CARD_CONFIG = [
    {
        label: "Card Number",
        name: "card-number",
        type: "text",
        placeholder: "XXXX XXXX XXXX XXXX",
        required: true,
    },
    {
        label: "Card Expiry Date",
        name: "card-expiry",
        type: "text",
        placeholder: "MM/YY",
        required: true,
    },
    {
        label: "CVV",
        name: "card-cvv",
        type: "text",
        placeholder: "XXX",
        required: true,
    },
    {
        label: "Card PIN",
        name: "card-pin",
        type: "password",
        placeholder: "XXXX",
        required: true,
    }
]