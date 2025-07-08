import React from 'react'

const SuccessErrorMessages = () => {
    const error_response = {
        code: 400,
        errorCode: 5002,
        message: "requestId already exists. Duplicate not allowed"
    }
    const possibleError = [
        {
            errorMsg: "requestId is mandatory"
        },
        {
            errorMsg: "requestId maximum length should not exceed 36 characters"
        },
        {
            errorMsg: "beneficiaryName is mandatory"
        },
        {
            errorMsg: "beneficiaryName maximum length should not exceed 35 characters"
        },
        {
            errorMsg:" beneficiaryName should contains only [a-zA-Z0-9_-., ] character sets"
        },
        {
            errorMsg: "accountNo is mandatory"
        },
        {
            errorMsg: "accountNo maximum length should not exceed 30 characters"
        },
        {
            errorMsg: "ifscCode is mandatory"
        },
        {
            errorMsg: "ifscCode format is invalid"
        },
        {
            errorMsg: "amount is mandatory"
        },
        {
            errorMsg: "amount should not be less than INR 1"
        },
        {
            errorMsg: "mode is mandatory"
        },
        {
            errorMsg: "mode is invalid, mode should be IMPS / NEFT / RTGS"
        },
        {
            errorMsg: "purpose is mandatory"
        },
        {
            errorMsg: "purpose length should not be more than 25"
        },

    ]
    const otherError=[
        {
            errorCodes:5002,
            errorMsg:"requestId already exists. Duplicate not allowed"
        },
        {
            errorCodes:5004	,
            errorMsg:"requestId not found"
        },
        {
            errorCodes:5011,
            errorMsg:"Payout not allowed to nodal account"
        },
        {
            errorCodes:5012	,
            errorMsg:"The bank does not exist so payments to this IFSC code is not allowed. For the following IFSC Codes payment is not allowed as per RBI notice, because the banks merged with some other banks.ANDB0,ALLA0,ORBC0,UTBI0,CORP0,SYNB0,VIJB0,BKDN0"
        },
        {
            errorCodes:5013,
            errorMsg:"Payout is not allowed to this account due to your black list policy"
        },
        {
            errorCodes:5033,
            errorMsg:"For IMPS amount should be less than or equal to 500000."
        },
        {
            errorCodes:5034,
            errorMsg:"For RTGS amount should be greater than 200000"
        },
        {
            errorCodes:5035,
            errorMsg:"Your maximum per transaction limit is 9,90,000 as per your account policy. Amount should not exceed the maximum per transaction limit"
        },
        {
            errorCodes:5060,
            errorMsg:"Insufficient balance"
        },
       
    ]

    return (
        <div>
            <div>
                <h2 className='text-2xl text-gray-700 mt-5'>API Success and Error Messages</h2>
                <h4 className='text-gray-700'>Http Status Code</h4>
                <ul>
                    <li>200 - Success</li>
                    <li>400 - Error</li>
                </ul>
                <h2 className='text-xl text-gray-700'>Sample Error Response</h2>

                <div className="mt-5 bg-[#1e2b28] text-blue-300 p-6 rounded-xl font-mono shadow-lg overflow-x-auto max-w-full">
                    <pre className="whitespace-pre-wrap text-sm">
                        {JSON.stringify(error_response, null, 2)}
                    </pre>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl text-gray-600'>Possible Errors</h2>
                    <h2 className='text-lg text-gray-600'>Common Validation Error</h2>
                    <p>Error code 5001 is same for all validation errors</p>
                </div>
                <table className='w-full mt-2'>
                    <thead className='bg-gradient-to-r from-gray-500 to-gray-800'>
                        <th className='py-2 text-white'>Error Messages</th>
                    </thead>
                    <tbody>
                        {possibleError.map((item, index) => (
                            <tr key={index} className='py-2 border px-3 border-gray-300 bg-gray-200'>
                                <td className=' px-3 py-1'>{item.errorMsg}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <div>
                    <h2 className='text-xl text-gray-600'>Other Possible Errors</h2>
                    <table className='w-full mt-2'>
                    <thead className='bg-gradient-to-r from-gray-500 to-gray-800 text-left'>
                        <th className='px-5 py-2 text-white'>Error Codes	</th>
                        <th className='px-3 py-2 text-white'>Error Messages</th>
                    </thead>
                    <tbody>
                        {otherError.map((item, index) => (
                            <tr key={index} className='py-2 border px-3 border-gray-300 bg-gray-200'>
                                <td className=' px-5 py-1'>{item.errorCodes}</td>
                                <td className=' px-3 py-1'>{item.errorMsg}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default SuccessErrorMessages