  export default function Button({ children, ...rest }) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded rounded-xl shadow-xl border-2 border-white"
        {...rest}
      >
        {children}
      </button>
    );
  }
