import { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.tile = 'count' + { count }
    }, [count])
    return (
        <div>

        </div>
    )
}

export default useDocumentTitle
