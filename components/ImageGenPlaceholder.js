export default function ImageGenPlaceholder() {
    return (
        <div className="shadow-sm rounded-md overflow-hidden bg-white border-2 border-white">
            <div className="bg-slate-200 w-full h-[200px] animate-pulse"></div>
            <div className="p-3">
                <div className="bg-slate-200 w-full h-5 rounded-md animate-pulse"></div>
                <div className="bg-slate-200 w-1/4 h-5 rounded-md animate-pulse mt-3"></div>
            </div>
        </div>
    )
}