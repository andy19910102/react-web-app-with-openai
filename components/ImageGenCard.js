import Image from "next/image";

export default function ImageGenCard({ imageURL, prompt }) {
    return (
        <div className="shadow-sm rounded-md overflow-hidden bg-white">
            <Image
                src={imageURL}
                alt={prompt}
                width={1024}
                height={1024}
                className="w-full"
            />
            <div className="p-3">
                <h3 className="text-md">{prompt}</h3>
            </div>
        </div>
    )
}