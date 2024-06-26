export default function VocabGenResultPlaceholder() {
    const wordList = [1, 2, 3, 4, 5]
    const wordItems = wordList.map(word => {
        return (
            <div className="p-3 border-2 bg-slate-200 animate-pulse rounded-md" key={word}>
                <h3 className="text-lg font-bold text-slate-700"></h3>
                <p className="text-slate-400 mt-3"></p>
            </div>
        )
    })
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl my-2">
            <h3 className="text-lg">
                <span className="p-2 bg-slate-200 rounded-lg inline-block w-[100px] h-[30px] animate-pulse mr-2"></span>
                <span className="p-2 bg-slate-200 rounded-lg inline-block w-[60px] h-[30px] animate-pulse"></span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-3">
                {wordItems}
            </div>

        </div>
    )
}