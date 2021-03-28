import React from 'react'

export default function Overlay() {
return (
<div>
    <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
        <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">Invoice # 35RD87</h4>
        <p className="text-gray-600 text-xs leading-3 font-normal">Assigned to: Josh Rollins</p>
        <div className="mt-4 flex items-center">
            <span className="text-gray-600">
                <svg className="feather feather-user" xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                </svg>
            </span>
            <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">Specter Consultancy</p>
        </div>
        <div className="mt-3 flex items-center">
            <span className="text-gray-600">
                <svg className="feather feather-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1={12} y1={1} x2={12} y2={23} />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            </span>
            <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">2,354 USD</p>
        </div>
        <button
            className="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-xs pl-3 cursor-pointer hover:opacity-90">
            View Invoice
            <svg xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right" width={16} height={16}
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={5} y1={12} x2={19} y2={12} />
                <line x1={13} y1={18} x2={19} y2={12} />
                <line x1={13} y1={6} x2={19} y2={12} />
            </svg>
        </button>
    </div>
</div>
)
}