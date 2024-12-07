import React, { Suspense, lazy } from 'react'
import SafeComponent from '../../../Error/SafeComponent'
import useStore from 'portal/store'

// External component
const Header = lazy(() => import('header/Header'))

// External component - MFE
export default function ExternalHeader() {
    const { count, increment } = useStore()

    return (
        <>

            <Suspense fallback={<p>loading...</p>}>
                <SafeComponent>
                    <Header />
                </SafeComponent>
            </Suspense>

            <div>
                {count} from store
                <button onClick={increment}>increment</button>
            </div>
        </>
    )
}
