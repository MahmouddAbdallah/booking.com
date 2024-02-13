import React from 'react'
interface ErrorMessageProps {
    condition: boolean;
    message: string
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ condition, message }) => {
    return (
        <div>
            {
                condition && <div>
                    <span className="text-red-500 font-semibold text-sm">
                        {message}
                    </span>
                </div>
            }
        </div>
    )
}

export default ErrorMessage