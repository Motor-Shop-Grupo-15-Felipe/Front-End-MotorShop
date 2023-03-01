import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify'
import Router from './routes'
import { theme } from './styles/theme'

const App = () => (
  <ChakraProvider theme={theme}>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Router />
  </ChakraProvider>
)

export default App