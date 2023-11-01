import AllRoutes from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AllRoutes />
      </QueryClientProvider>
    </>
  )
}

export default App
