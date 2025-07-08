import React from 'react'

export const FundTransferWebhook = () => {
    const fundTransferWebhook = [
        {
            parameter: "tranType",
            dataType: "string",
            description: "Returns DEBIT / CREDIT / RECREDIT For fund transfer status DEBIT - For every debit transaction CREDIT - For every credit transaction, After loading funds via virtual account, RECREDIT - For every failure transaction after the re-credit, recredit webhook will fire"
        },
        {
            parameter: "requestId",
            dataType: "string",
            description: "Unique value to identify the fund transfer request"
        },
        {
            parameter: "referenceNo",
            dataType: "string",
            description: "Reference number generated for the fund transfer."
        },
        {
            parameter: "beneficiaryName",
            dataType: "string",
            description: "Returns the beneficiaryName for the requestId"
        },
        {
            parameter: "amount",
            dataType: "number",
            description: "Returns the amount for the requestId"
        },
        {
            parameter: "fee",
            dataType: "number",
            description: "Fee for the transaction"
        },
        {
            parameter: "tax",
            dataType: "number",
            description: "Fee for the transaction"
        },
        {
            parameter: "tax",
            dataType: "number",
            description: "Tax for the transaction fee"
        },
        {
            parameter: "totalFee",
            dataType: "number",
            description: "Sum of fee and tax"
        },
        {
            parameter: "mode",
            dataType: "string",
            description: "Returns the mode for the requestId"
        },
        {
            parameter: "purpose	",
            dataType: "string",
            description: "Returns the purpose for the requestId"
        },
        {
            parameter: "utrNumber",
            dataType: "string",
            description: "Unique transaction reference number returned by bank for the fund transfer"
        },
        {
            parameter: "statusCode",
            dataType: "string",
            description: "Returns the fund transfer statusCode as SUCCESS"
        },
        {
            parameter: "status",
            dataType: "string",
            description: "Returns the fund transfer status as Success"
        },
        {
            parameter: "errorDescription",
            dataType: "string",
            description: "N/A"
        },
        {
            parameter: "attemptCount",
            dataType: "number",
            description: "Number of times the webhook invoked"
        },
    ]
    const request = {
        code: 200,
        message: "success",
        data: {
            requestId: "pfin202008260003",
            referenceNo: "PFBAgMlRcO08nC86ccMj8bwdL92eqR",
            beneficiaryName: "Demo Company",
            accountNo: "900900900900",
            ifscCode: "UTIB0002952",
            amount: 3000,
            fee: 10,
            tax: 1.8,
            totalFee: 11.8,
            mode: "IMPS",
            purpose: "Payout",
            utrNumber: "",
            statusCode: "RETURNED_FROM_BENEFICIARY",
            status: "Returned from beneficiary",
            errorDescription: "RETURN - ACCOUNT CLOSED",
        },
    };
    return (
        <div>
            <h2 className='text-2xl text-gray-800 mt-6'>Fund Transfer Webhook</h2>
            <p>Our system will call your webhook url and post the payment status when payment is transferred. In case your webhook does not respond, our system will call your url for maximum four times in a 15 minutes interval if all four attempts failed, you will receive email notification about the issue.</p>

            <div>
                <h2 className='text-xl text-gray-800'>Payment Success Case</h2>
                <table className='w-full'>
                    <thead className='bg-gradient-to-r from-gray-500 to-gray-800 text-white text-left'>
                        <th className='px-4 py-2 border border-gray-600'>Parameters</th>
                        <th className='px-6 py-2 border border-gray-600'>DataType</th>
                        <th className='px-4 py-2 border border-gray-600'>Description</th>
                    </thead>
                    {fundTransferWebhook.map((item, indx) => (
                        <tr key={indx} className='text-left bg-gray-200'>
                            <td className='px-4 py-2 border border-gray-300'>{item.parameter}</td>
                            <td className='px-6 py-2 border border-gray-300'>{item.dataType}</td>
                            <td className='px-4 py-2 border border-gray-300'>{item.description}
                            </td>
                        </tr>
                    ))}


                </table>

            </div>
            {/*  -------------------*/}
            <div className='space-y-3'>
                <h2 className='text-xl text-gray-800 py-5'>Payment Non Success Case</h2>
                <table className='w-full'>
                    <thead className='bg-gradient-to-r from-gray-500 to-gray-800 text-white text-left'>
                        <th className='px-4 py-2 border border-gray-600'>Parameters</th>
                        <th className='px-6 py-2 border border-gray-600'>DataType</th>
                        <th className='px-4 py-2 border border-gray-600'>Description</th>
                    </thead>
                    {fundTransferWebhook.map((item, indx) => (
                        <tr key={indx} className='text-left bg-gray-200'>
                            <td className='px-4 py-2 border border-gray-300'>{item.parameter}</td>
                            <td className='px-6 py-2 border border-gray-300'>{item.dataType}</td>
                            <td className='px-4 py-2 border border-gray-300'>{item.description}
                            </td>
                        </tr>
                    ))}


                </table>

            </div>
            {/* ----------------------- */}
            <h2 className='text-2xl text-gray-500 mt-6'>Example 1</h2>
            <h2 className='text-2xl text-gray-800'>Success Case</h2>
            <h2 className='text-xl text-gray-800'>Request</h2>

            {/* ----------------------------------------------- */}
            <div className="mt-5 bg-[#1e2b28] text-blue-300 p-6 rounded-xl font-mono shadow-lg overflow-x-auto max-w-full">
                <pre className="whitespace-pre-wrap text-sm">
                    {JSON.stringify(request, null, 2)}
                </pre>
            </div>

        </div>

    )
}
export default FundTransferWebhook;