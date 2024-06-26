import moment from 'moment';

export default function VocabGenResultCard({ result }) {
    const { wordList, zhWordList } = result.payload;
    const wordItems = wordList.map((word, idx) => {
        return (
            <div className="p-3 border-2 border-slate-300 rounded-md" key={idx}>
                <h3 className="text-lg font-bold text-slate-700">{word}</h3>
                <p className="text-slate-400 mt-3">{zhWordList[idx]}</p>
            </div>
        )
    })
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl my-3">
            <h3 className="text-lg">
                {result.title} <span className="py-2 px-4 bg-slate-200 font-semibold rounded-lg inline-block ml-2">{result.language}</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-3">
                {wordItems}
            </div>
            <p className="mt-3 text-right text-slate-500">
                Created At: {moment(result.createdAt).format("YYYY/MM/DD HH:mm:ss")}
            </p>
        </div>
    )
}