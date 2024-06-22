export default function ImageGenCard({ imageURL, prompt }) {
    return (
        <div className="shadow-sm rounded-md overflow-hidden bg-white">
            <img src={imageURL} alt={prompt} />
            <div className="p-3">
                <h3 className="text-md">{prompt}</h3>
            </div>
        </div>
    )
}