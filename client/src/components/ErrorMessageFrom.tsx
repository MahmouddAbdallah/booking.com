import React from 'react'
import { FieldError } from 'react-hook-form'
interface ErrorMessageFromProps {
    errors: FieldError | undefined;
    message: string | undefined;
}
const ErrorMessageFrom: React.FC<ErrorMessageFromProps> = ({ errors, message }) => {
    return (
        <div>
            {
                errors && <div>
                    <span className="text-red-500 font-semibold text-sm">
                        {message}
                    </span>
                </div>
            }
        </div>
    )
}

export default ErrorMessageFrom