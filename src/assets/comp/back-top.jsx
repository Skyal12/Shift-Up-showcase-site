export default function BackTop() {
  return (
    <div className="back-top fixed z-20 bottom-[-1%] right-20">
      <button
        className="bg-gray-800 w-16 h-12 text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
