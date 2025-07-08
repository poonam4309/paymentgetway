import React from 'react'

const FundTransferApi = () => {
    const requestData = [
        {
            parameter: "requestId",
            range: "Max 36",
            datatype: "string",
            required: "Y",
            description: "Unique identifier to identify request, it should be unique to avoid duplicate transactions"
        },
        {
            parameter: "beneficiaryName",
            range: "Max 35",
            datatype: "string",
            required: "Y",
            description: "Beneficiary name. Regular expression:[a-zA-Z0-9_-., ]"
        },
        {
            parameter: "accountNo",
            range: "Max 30",
            datatype: "string",
            required: "Y",
            description: "Beneficiary account number"
        },
        {
            parameter: "ifscCode",
            range: "Exact 11 characters",
            datatype: "string",
            required: "Y",
            description: "Beneficiary ifsc code"
        },
        {
            parameter: "amount",
            range: "Minimum 1	",
            datatype: "number",
            required: "Y",
            description: "Amount to be transferred, Minimum and maximum amount vary by mode IMPS - Min 1 & Max 5,00,000 NEFT - Min 1 & Max 250,000,000 RTGS - Min 2,00,000 & Max 250,000,000"
        },
        {
            parameter: "mode",
            range: "IMPS/NEFT/RTGS	",
            datatype: "string",
            required: "Y",
            description: "Only the three modes allowed"
        },
        {
            parameter: "purpose",
            range: "Max 25	",
            datatype: "string",
            required: "Y",
            description: "Purpose of the fund transfer. E.g payout, refund,reward, etc…"
        }
    ];
    const responseData = [
        {
            parameter: "requestId",
            range: "Max 36",
            datatype: "string",
            required: "Y",
            description: "Unique identifier to identify request, it should be unique to avoid duplicate transactions"
        },
        {
            parameter: "beneficiaryName",
            datatype: "string",
            description: "Beneficiary name. Regular expression:[a-zA-Z0-9_-., ]"
        },
        {
            parameter: "accountNo",

            datatype: "string",

            description: "Beneficiary account number"
        },
        {
            parameter: "ifscCode",

            datatype: "string",

            description: "Beneficiary ifsc code"
        },
        {
            parameter: "amount",

            datatype: "number",

            description: "Amount to be transferred, Minimum and maximum amount vary by mode IMPS - Min 1 & Max 5,00,000 NEFT - Min 1 & Max 250,000,000 RTGS - Min 2,00,000 & Max 250,000,000"
        },
        {
            parameter: "mode",
            datatype: "string",
            description: "Only the three modes allowed"
        },
        {
            parameter: "purpose",
            datatype: "string",
            description: "Purpose of the fund transfer. E.g payout, refund,reward, etc…"
        }
    ];

    const failureCase = [
        {
            code: '400',
            errorCode: '5060',
            message: 'Insufficient balance'
        },

    ]
    const validationRes = [
        {
            code: '400',
            errorCode: '5001',
            message: 'accountNo is required'
        },
    ]
    return (
        <>
            <div>
                <div>
                    {/* -----------------------Fund Transfer APi-------------------- */}
                    <div>
                        <h2 className='text-gray-800 text-2xl mt-5'>Fund Transfer API</h2>
                        <p>Initiate the fund transfer to the given account number</p>
                        <ul className="list-disc ml-6 mb-6 space-y-1">
                            <li>URL: /transfer</li>
                            <li>Method: POST</li>
                        </ul>
                    </div>
                    {/* ------------Request----------------- */}
                    <div>
                        <h2 className='text-2xl text-gray-700 mb-4'>Request</h2>
                        <table className='w-full'>
                            <thead className='text-white bg-gradient-to-r from-gray-600 to-gray-800'>
                                <tr className='text-left'>
                                    <th className='px-3 py-2 border border-gray-600'>Parameters</th>
                                    <th className='px-4 py-2 border border-gray-600'>Range</th>
                                    <th className='px-4 py-2 border border-gray-600'>Datatype</th>
                                    <th className='px-4 py-2 border border-gray-600'>Required</th>
                                    <th className='px-4 py-2 border border-gray-600 w-sm'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requestData.map((item, index) => (
                                    <tr key={index} className='bg-gray-200 '>
                                        <td className='px-3 py-2 border border-gray-300'>{item.parameter}</td>
                                        <td className='px-4 py-2 border border-gray-300'>{item.range}</td>
                                        <td className='px-4 py-2 border border-gray-300'>{item.datatype}</td>
                                        <td className='px-4 py-2 border border-gray-300'>{item.required}</td>
                                        <td className='px-4 py-2 border border-gray-300'>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* ---------Response------------------ */}
                <div>
                    {/* -----------------------Fund Transfer APi-------------------- */}
                    <div>
                        <h2 className='text-gray-800 text-2xl mt-5'>Fund Transfer API</h2>
                        <p>Initiate the fund transfer to the given account number</p>
                        <ul className="list-disc ml-6 mb-6 space-y-1">
                            <li>URL: /transfer</li>
                            <li>Method: POST</li>
                        </ul>
                    </div>
                    {/* ------------Request----------------- */}
                    <div>
                        <h2 className='text-2xl text-gray-700 mb-4'>Request</h2>
                        <table className='w-full'>
                            <thead className='text-white bg-gradient-to-r from-gray-600 to-gray-800'>
                                <tr className='text-left'>
                                    <th className='px-3 py-2 border border-gray-600'>Parameters</th>
                                    <th className='px-4 py-2 border border-gray-600'>Datatype</th>
                                    <th className='px-4 py-2 border border-gray-600 w-sm'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {responseData.map((item, index) => (
                                    <tr key={index} className='bg-gray-200 '>
                                        <td className='px-3 py-2 border border-gray-300'>{item.parameter}</td>
                                        <td className='px-4 py-2 border border-gray-300'>{item.datatype}</td>
                                        <td className='px-4 py-2 border border-gray-300'>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* -------------------Success Case request--------- */}
                <div>
                    <h2 className='text-2xl mb-4'>Example</h2>
                    <h2 className='text-xl'>Request</h2>
                    <div className="bg-[#2e3733] text-white p-6 rounded-xl font-mono text-sm shadow-lg  my-5 ">
                        <pre className='space-y-4'>
                            {`{
`}
                            <span className="text-red-400">"requestId"</span>: <span className="text-[#99c2f0]">pfin202008260002</span>,{'\n'}
                            <span className="text-red-400">"beneficiaryName"</span>: <span className="text-[#99c2f0]">Demo Company</span>,{'\n'}
                            <span className="text-red-400">"requestId"</span>: <span className="text-[#99c2f0]">pfin202008260002</span>,{'\n'}

                            <span className="text-red-400">"accountNo"</span>: <span className="text-[#99c2f0]">900900900900</span>,{'\n'}
                            <span className="text-red-400">"ifscCode"</span>: <span className="text-[#99c2f0]">UTIB0002951</span>,{'\n'}
                            <span className="text-red-400">"amount"</span>: <span className="text-[#99c2f0]">5000</span>,{'\n'}
                            <span className="text-red-400">"mode"</span>: <span className="text-[#99c2f0]">IMPS</span>,{'\n'}
                            <span className="text-red-400">"purpose"</span>: <span className="text-[#99c2f0]">Payout</span>,{'\n'}


                            {'}'}
                        </pre>
                    </div>
                </div>
                {/* --------------------response------------------------ */}
                <div className="bg-[#2e3733] text-white p-6 rounded-xl font-mono text-sm shadow-lg 
                 my-5 ">
                    <pre className='space-y-4'>
                        {`{
  `}
                        <span className="text-red-400">"code"</span>: <span className="text-green-400">200</span>,{'\n'}
                        <span className="text-red-400">  "message"</span>: <span className="text-blue-300">"success"</span>,{'\n'}

                        <span className="text-red-400">  "data"</span>: {'{'}{'\n'}
                        <span className="text-red-400">    "requestId"</span>: <span className="text-[#99c2f0]">pfin202008260002</span>{'\n'}

                        <span className="text-red-400">    "referenceNo"</span>: <span className="text-[#99c2f0]">PFBAgMlRcOO8nC86ccMj8awdL92eqR</span>{'\n'}

                        <span className="text-red-400">    "beneficiaryName"</span>: <span className="text-[#99c2f0]">Demo Company</span>{'\n'}

                        <span className="text-red-400">    "accountNo"</span>: <span className="text-[#99c2f0]">900900900900</span>{'\n'}

                        <span className="text-red-400">    "ifscCode"</span>: <span className="text-[#99c2f0]">UTIB0002951</span>{'\n'}
                        <span className="text-red-400">    "amount"</span>: <span className="text-green-400">5000</span>{'\n'}
                        <span className="text-red-400">    "fee"</span>: <span
                            className="text-green-400">3.50</span>{'\n'}

                        <span className="text-red-400">    "tax"</span>: <span className="text-green-400">0.63</span>{'\n'}
                        <span className="text-red-400">    "totalFee"</span>: <span className="text-green-400">4.13</span>{'\n'}
                        <span className="text-red-400">    "mode"</span>: <span className="text-[#99c2f0]">IMPS</span>{'\n'}
                        <span className="text-red-400">    "purpose"</span>: <span className="text-[#99c2f0]">Payout</span>{'\n'}
                        {'}'}{'\n'}
                        {'}'}
                    </pre>
                </div>
                {/* ------------------Failure Case------------ */}
                <div>
                    <h2 className='text-2xl text-gray-700'>Failure Case</h2>
                    <p className='text-xl text-gray-700'>Insufficient balance Response</p>

                    <div className="bg-[#2e3733] text-white p-6 rounded-xl font-mono text-sm shadow-lg  my-5 ">
                        <pre className='space-y-4'>
                            {`{
`}                         {failureCase.map((item, indx) => (
                                <div key={indx}>
                                    <span className="text-red-400">"code"</span>: <span className="text-[#99c2f0]">{item.code}</span>,{'\n'}
                                    <span className="text-red-400">"errorCode"</span>: <span className="text-[#99c2f0]">{item.errorCode}</span>,{'\n'}
                                    <span className="text-red-400">"message"</span>: <span className="text-[#99c2f0]">{item.message}</span>,{'\n'}
                                </div>
                            ))}
                            {'}'}
                        </pre>
                    </div>

                </div>
                {/* ------------------------- */}
                <div>
                    {/* <h2 className='text-2xl text-gray-700'>Failure Case</h2> */}
                    <p className='text-xl text-gray-700'>Other Common validation Response</p>

                    <div className="bg-[#2e3733] text-white p-6 rounded-xl font-mono text-sm shadow-lg  my-5 ">
                        <pre className='space-y-4'>
                            {`{
`}                         {validationRes.map((item, indx) => (
                                <div key={indx}>
                                    <span className="text-red-400">"code"</span>: <span className="text-[#99c2f0]">{item.code}</span>,{'\n'}
                                    <span className="text-red-400">"errorCode"</span>: <span className="text-[#99c2f0]">{item.errorCode}</span>,{'\n'}
                                    <span className="text-red-400">"message"</span>: <span className="text-[#99c2f0]">{item.message}</span>,{'\n'}
                                </div>
                            ))}
                            {'}'}
                        </pre>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FundTransferApi