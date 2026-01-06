import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          📝 Todo App
        </h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
