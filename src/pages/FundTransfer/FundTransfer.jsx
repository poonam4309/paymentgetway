import { useRef, useState } from 'react';
import React from 'react';
import AvailableBalApi from './AvailableBalApi';
import FundTransferSidebar from './FundTransferSidebar';
import FundTransferApi from './FundTransferApi';
import FundTransferStatus from './FundTransferStatus';
import { FundTransferWebhook } from './FundTransferWebhook';
import SuccessErrorMessages from './SuccessErrorMessages';
import PostmanCollection from './PostmanCollection';

export default function FundTransfer() {
    const [active, setActive] = useState('available-balance');

    const sectionRefs = {
        'available-balance': useRef(null),
        'fund-transfer': useRef(null),
        'fund-transfer-status':useRef(null),
        'fund-transfer-webhook': useRef(null),
        'api-success-error-messages': useRef(null),
        'postman-collection': useRef(null)
    }

    return (
        <div className="min-h-screen flex bg-[#f2f2f2] gap-5">
            <div className='p-2'>
                <FundTransferSidebar
                    active={active}
                    setActive={setActive}
                    sectionRefs={sectionRefs}
                />
            </div>
            {/* Main content */}
            <main className="flex-1 p-10">
                <div ref={sectionRefs['available-balance']}> <AvailableBalApi /></div>
                {/* -----------------------Fund Transfer APi-------------------- */}
                <div ref={sectionRefs['fund-transfer']}> <FundTransferApi /></div>
                {/* ----------------------fund transfer status---------- */}
                <div ref={sectionRefs['fund-transfer-status']}><FundTransferStatus /></div>
                {/* ---------------Fund Transfer Webhook---------------- */}
                <div ref={sectionRefs['fund-transfer-webhook']}><FundTransferWebhook /></div>
                {/* -----------API Success and Error Messages----------- */}
                <div ref={sectionRefs['api-success-error-messages']}><SuccessErrorMessages /></div>
                {/* ---------------Postman Collection------------------ */}
                <div ref={sectionRefs['postman-collection']}>  <PostmanCollection /> </div>
            </main>
        </div>
    );
}
