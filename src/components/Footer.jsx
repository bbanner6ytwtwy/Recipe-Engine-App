import React from 'react'

export default function Footer() {
    const day = new Date();
    const year = day.getFullYear();
    console.log(year)
    return (
        <div className="bg-foot">
            <div className="body fs-6 p-3 text-light opacity-75 text-center foot" style={{"font-family": 'Lora'}}>@copyright {year} AKintunde</div>
        </div>
    )
}
