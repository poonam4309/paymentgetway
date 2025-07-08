import React from 'react'

const AvailableBalApi = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Fund Transfer API Document v1.0</h1>
            {/* ------------------------------------------------------------------------- */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                    I Payment  API is organized around REST. Our API has predictable
                    resource‑oriented URLs, accepts JSON request and returns response, and
                    uses standard HTTP response codes, authentication, and verbs.
                </p>
                <p className="mb-4">
                    You can use our API in the sandbox and production environment. We
                    provide two different API URLs and tokens for sandbox and
                    production&nbsp;(Live).
                </p>
                <p className="mb-4">
                    Pass API token and content‑type for all the requests in header; the token
                    will be shared with you via email.
                </p>

                <ul className="list-disc ml-6 mb-6 space-y-1">
                    <li>
                        <span className="font-semibold">content‑type:</span>
                        <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">application/json</code>
                    </li>
                    <li>
                        <span className="font-semibold">authorization:</span>
                        <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">Bearer &lt;Token&gt;</code>
                    </li>
                </ul>
            </div>
            {/* ----------------------------------------------------------------------------------- */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">HTTP Status Code</h2>
                <p>
                    Always check the HTTP status code; for successful requests we return
                    HTTP status&nbsp;200. In case of any error in request we return
                    HTTP status&nbsp;400 — assume that if you are receiving&nbsp;400 the
                    request is not accepted.
                </p>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Available Balance API</h2>
                <p>Get the current available balance from the Ezypayment Payout account.</p>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                    <li className="mt-4">URL: /balance</li>
                    <li>Method: GET</li>
                </ul>
            </div>
            {/* --------------------------------------------------------- */}
            <h2 className="text-2xl font-semibold mb-4">Request</h2>
            <p className='text-xl'>N/A</p>
            {/* ------------------------------------------------------ */}
            <h2 className="text-2xl font-semibold mb-4">Response</h2>
            <table className='w-full'>
                <thead className='bg-gradient-to-r from-gray-600 to-gray-800 text-white '>
                    <th className='px-2 py-2 border border-gray-600'>Parameters</th>
                    <th className='px-2 py-2 border border-gray-600'>DataType</th>
                    <th className='px-2 py-2 border border-gray-600'>Description</th>
                </thead>
                <tr className='text-center bg-gray-300'>
                    <td className='px-2 py-2 border border-gray-400'>availableBalance	</td>
                    <td className='px-2 py-2 border border-gray-400'>number</td>
                    <td className='px-2 py-2 border border-gray-400'>Returns the available balance
                    </td>
                </tr>
            </table>
            {/* ------------------ */}
            <div>
                <h2 className='text-gray-500 text-2xl mt-5'>Example</h2>
                <h2 className="text-2xl font-semibold mt-4">Request</h2>
                <p className='text-xl text-gray-500'>N/A</p>
            </div>
            {/* -----------------Response----------- */}
            <h2 className='text-gray-800 text-2xl mt-5'>Response</h2>
            <div className="bg-[#2e3733] text-white p-6 rounded-xl font-mono text-sm shadow-lg  my-10 ">
                <pre className='space-y-4'>
                    {`{
  `}
                    <span className="text-red-400">"code"</span>: <span className="text-green-400">200</span>,{'\n'}
                    <span className="text-red-400">  "message"</span>: <span className="text-blue-300">"success"</span>,{'\n'}
                    <span className="text-red-400">  "data"</span>: {'{'}{'\n'}
                    <span className="text-red-400">    "availableBalance"</span>: <span className="text-green-400">7015773.70</span>{'\n'}
                    {'}'}{'\n'}
                    {'}'}
                </pre>
            </div>

        </div>
    )
}

export default AvailableBalApi