import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    // API call to create or update blog
  };

  return (
    <div className="p-4">
      <input
        className="text-2xl w-full border-b"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default BlogEditor;
