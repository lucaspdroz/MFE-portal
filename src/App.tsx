import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import SafeComponent from './Error/SafeComponent'
import './index.css'

const Header = lazy(() => import('header/Header'))

import useStore from 'portal/store'

const App = () => {
  const { count, increment } = useStore()

  return (
    <div className="posrtal" >
      <Suspense fallback={<p>loading...</p>}>
        <SafeComponent>
          <Header />
        </SafeComponent>
      </Suspense>

      <div>Name: portal</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>

      <div>
        {count} from store
        <button onClick={increment}>increment</button>
      </div>
    </div>
  )
}



const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)