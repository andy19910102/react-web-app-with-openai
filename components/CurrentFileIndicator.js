export default function CurrentFileIndicator({ filePath }) {
    return (
        <div className="container mx-auto">
            <div className="bg-slate-100 border-2 w-fit border-slate-300 rounded-lg mt-4 py-2 px-3 text-md">
                You are now at
                <span className="ml-2 font-semibold text-indigo-500">
                    {filePath}
                </span>
            </div>
        </div>
    );
}