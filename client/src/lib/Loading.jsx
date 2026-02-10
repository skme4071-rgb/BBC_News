export default function Users({ text, messgae, children }) {

    return (
        <div className="text-center py-20">
            <div className="loading-spinner mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold mb-2">{text}</h2>
            <p className="text-gray-600">
                {messgae  ?? children}
            </p>
        </div>
    );
}
