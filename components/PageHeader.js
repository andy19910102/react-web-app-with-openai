import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PageHeader({ title, icon }) {
    return (
        <header className="py-10 text-center">
            <h1 className="text-3xl font-bold text-slate-700">
                <FontAwesomeIcon icon={icon} /> {title}
            </h1>
        </header>
    )
}