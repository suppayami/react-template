import { useTranslation } from 'react-i18next'

export const HomeView = () => {
	const [translate] = useTranslation()

	return (
		<div className="bg-gray-700 text-white shadow-lg shadow-slate-700 p-4 rounded gap-2 flex flex-col items-center justify-center">
			<h1 className="font-bold text-xl">{translate('home.title')}</h1>
			<p className="text-lg text-white/70">{translate('home.description')}</p>
		</div>
	)
}
