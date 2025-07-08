import React from 'react'

const FundTransferStatus = () => {
    const fundTransferStatus = [
        {
            parameter: "requestId",
            dataType: "string",
            description: "Unique value to identify the fund transfer request"
        },
        {
            parameter: "beneficiaryName	",
            dataType: "string",
            description: "Returns the beneficiaryName for the requestId"
        },
        {
            parameter: "accountNo",
            dataType: "string",
            description: "Returns the accountNo for the requestId"
        },
        {
            parameter: "ifscCode",
            dataType: "string",
            description: "Returns the ifscCode for the requestId"
        },
        {
            parameter: "amount",
            dataType: "number",
            description: "Returns the amount for the requestId"
        },
        {
            parameter: "mode",
            dataType: "string",
            description: "Returns the mode for the requestId"
        },
        {
            parameter: "purpose",
            dataType: "string",
            description: "Returns the purpose for the requestId"
        },
        {
            parameter: "utrNumber",
            dataType: "string",
            description: "Unique transaction reference number returned by bank for the fund transfer"
        },
        {
            parameter: "referenceNo",
            dataType: "string",
            description: "Reference number generated for the fund transfer."
        },
        {
            parameter: "statusCode",
            dataType: "string",
            description: "Returns the fund transfer statusCode"
        },
        {
            parameter: "status",
            dataType: "string",
            description: "Returns the fund transfer status, such as initiated, success and failure."
        },
        {
            parameter: "errorDescription",
            dataType: "string",
            description: "Returns error description for the FAILURE/ ERROR / RETURNED_FROM_BENEFICIARY statuses Empty for other statuses"
        },
    ]
    // ---
    const response = {
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
    const response_failure = {
        code: 200,
        message: "success",
        data: {
            requestId: "pfin202008260002",
            referenceNo: "PFBAgMlRcOO8nC86ccMj8awdL92eqR",
            beneficiaryName: "Demo Company",
            accountNo: "900900900900",
            ifscCode: "UTIB0002951",
            amount: 5000,
            fee: 3.50,
            tax: 0.63,
            totalFee: 4.13,
            mode: "IMPS",
            purpose: "Payout",
            utrNumber: "CB0001997620",
            statusCode: "SUCCESS",
            status: "Success",
            errorDescription: ""
        }
    }
    // /-----------fund list----------
    const fundStatusList = [
        {
            status_code: 'READY',
            status: 'ready',
            meaning: 'In queue not yet initiated'
        },
        {
            status_code: 'INITIATED',
            status: 'initiated',
            meaning: 'Payment Initiated'
        },
        {
            status_code: 'FAILURE',
            status: 'failure',
            meaning: 'Fund transfer failed'
        },
        {
            status_code: 'ERROR',
            status: 'error',
            meaning: 'Fund transfer error'
        },
        {
            status_code: 'SUCCESS',
            status: 'success	',
            meaning: 'Fund transfer completed successfully'
        },
        {
            status_code: 'PENDING',
            status: 'pending',
            meaning: 'Temporary status, it may change'
        },
        {
            status_code: 'INSUFFICIENT_BALANCE',
            status: 'Insufficient balance',
            meaning: 'Unable to process the transaction due to Insufficient balance'
        },
        {
            status_code: 'RETURNED_FROM_BENEFICIARY',
            status: 'Returned from beneficiary',
            meaning: 'Amount returned from beneficiary'
        },
    ]

    return (
        <div>
            <div>
                <h2 className='text-xl text-gray-800'>Fund Transfer Status API</h2>
                <p>Get the fund transfer status by requestId.</p>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                    <li>URL: /status/{`{requestId}`}</li>
                    <li>Method: GET</li>
                </ul>
                <h2 className='text-xl text-gray-700'>Request</h2>
                <h2 className='text-xl text-gray-500 mb-4'>N/A</h2>
                <table className='w-full'>
                    <thead className='bg-gradient-to-r from-gray-600 to-gray-800 text-white text-left'>
                        <th className='px-4 py-2 border border-gray-600'>Parameters</th>
                        <th className='px-6 py-2 border border-gray-600'>DataType</th>
                        <th className='px-4 py-2 border border-gray-600'>Description</th>
                    </thead>
                    {fundTransferStatus.map((item, indx) => (
                        <tr key={indx} className='text-left bg-gray-200'>
                            <td className='px-4 py-2 border border-gray-300'>{item.parameter}</td>
                            <td className='px-6 py-2 border border-gray-300'>{item.dataType}</td>
                            <td className='px-4 py-2 border border-gray-300'>{item.description}
                            </td>
                        </tr>
                    ))}


                </table>

            </div>
            {/* ---------------------response-success----------------- */}
            <h2 className='text-2xl text-gray-700'>Response - SUCCESS</h2>
            <div className="mt-5 bg-[#1e2b28] text-blue-300 p-6 rounded-xl font-mono shadow-lg overflow-x-auto max-w-full">
                <pre className="whitespace-pre-wrap text-sm">
                    {JSON.stringify(response_failure, null, 2)}
                </pre>
            </div>
            {/* --------Response - FAILURE--------------------- */}
            <h2 className='text-2xl text-gray-700 mt-4'>Response - FAILURE</h2>

            <div className="mt-5 bg-[#1e2b28] text-blue-300 p-6 rounded-xl font-mono shadow-lg overflow-x-auto max-w-full">
                <pre className="whitespace-pre-wrap text-sm">
                    {JSON.stringify(response, null, 2)}
                </pre>
            </div>
            {/* ------------Fund Transfer status list----------- */}
            <h2 className='text-2xl text-gray-700 mt-4'>Fund Transfer Status List</h2>
            <table className='w-full mt-5'>
                <thead className='bg-gradient-to-r from-gray-500 to-gray-800 text-white text-left font-semibold'>
                    <th className='px-4 py-2 border border-gray-600'>status_code</th>
                    <th className='px-6 py-2 border border-gray-600'>Status</th>
                    <th className='px-4 py-2 border border-gray-600'>Meaning</th>
                </thead>
                {fundStatusList.map((item, indx) => (
                    <tr key={indx} className='text-left bg-gray-200'>
                        <td className='px-4 py-2 border border-gray-300'>{item.status_code}</td>
                        <td className='px-6 py-2 border border-gray-300'>{item.status}</td>
                        <td className='px-4 py-2 border border-gray-300'>{item.meaning}
                        </td>
                    </tr>
                ))}


            </table>
            <p>Note: Failure, Success,Insufficient balance and returned from beneficiary are final statuses.</p>
        </div >
    )
}

export default FundTransferStatus