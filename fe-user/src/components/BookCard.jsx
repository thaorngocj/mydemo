export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-4 group">
      
      <div className="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
        {book.coverImage ? (
          <img 
            src={book.coverImage}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>

      <div className="flex justify-between items-center mt-3">
        <p className="text-red-500 font-bold">
          {book.price?.toLocaleString()} VND
        </p>
        {book.isHot && (
          <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
            Hot
          </span>
        )}
      </div>

    </div>
  );
}