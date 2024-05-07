import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { SnackProvider } from './contexts/SnackContext'

import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'
import { Normalize } from 'styled-normalize'

export default function App() {

  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
