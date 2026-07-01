import React from 'react'

const EmptyState = ({ message="No Data Found" }) => {
    return (
        <>
            <div>
                {message}
            </div>
        </>
    )
}

export default EmptyState