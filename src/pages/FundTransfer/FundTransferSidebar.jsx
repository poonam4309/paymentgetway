import React from 'react'

const FundTransferSidebar = ({active, setActive, sectionRefs }) => {
    const navItems = [
        { id: 'available-balance', label: 'Available Balance API', className: "bg-[#123d88]" },
        { id: 'fund-transfer', label: 'Fund Transfer API' },
        { id: 'fund-transfer-status', label: 'Fund Transfer Status API' },
        { id: 'fund-transfer-webhook', label: 'Fund Transfer Webhook' },
        { id: 'api-success-error-messages', label: 'API Success and Error Messages' },
        { id: 'postman-collection', label: 'Postman Collection' },
    ];
    const handleClick = (id) => {
        setActive(id);
        sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <div className='sticky top-18'>
            {/* Sidebar */}
            <h2 className="text-2xl font-semibold p-6 text-gray-600">Fund Transfer APIs</h2>

            <aside className="w-72 bg-white shadow-lg rounded px-2 ">
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleClick(item.id)}
                                className={`cursor-pointer px-6 py-2 mb-1 transition-colorstext-white font-semibold ${item.id === active ? 'bg-[#123d88] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default FundTransferSidebar