import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white rounded-xl py-2 px-2 self-end flex items-center gap-2">

                Cencle
            </button>
        </div>
    )
}

export default BackButton