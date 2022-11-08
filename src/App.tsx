import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

export function App() {
	return (
		<QueryClientProvider client={client}>
			<div className="flex-1 items-center justify-center flex flex-col bg-slate-900">
				<Outlet />
			</div>
		</QueryClientProvider>
	)
}
