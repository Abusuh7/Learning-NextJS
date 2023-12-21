"use client";

import { useState, useEffect } from "react";

export default function Users() {
  const [post, setPost] = useState([]); //state for storing post
  const [loading, setLoading] = useState(true); // loader for fetching data
  const [error, setError] = useState(""); //error if any while fetching data

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setPost([]);
        setLoading(false);
        setError("Something went wrong!");
      });
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <table className="border-collapse border w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item) => (
              <tr key={item.id} className="border">
                <td className="border p-2 font-bold capitalize">
                  {item.title}
                </td>
                <td className="border p-2">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error ? error : null}
    </div>
  );
}
