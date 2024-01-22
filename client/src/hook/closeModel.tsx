import { RefObject, useCallback, useEffect } from 'react';

function useCloseModal(ref: RefObject<HTMLDivElement>, onClose: () => void) {
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onClose();
        }
    }, [onClose, ref])
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);
}

export default useCloseModal;

