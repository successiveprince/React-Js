import { useEffect, useState } from "react";

function Github() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com")
      .then((response) => response.json())
      .then((data) => setValue(data));
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Github Page</h1>
      <p className="text-lg text-gray-700">
        This is the Github page component. You can add your Github-related
        content here.
      </p>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <pre className="text-sm text-gray-800">
          {value ? JSON.stringify(value, null, 2) : "Loading..."}
        </pre>
      </div>
    </div>
  );
}

export default Github;
