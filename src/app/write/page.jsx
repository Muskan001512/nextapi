"use client"
import Image from "next/image";
import React from 'react'
import styles from "./write.module.css"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useState } from 'react';

const write  = () => {

  const {  status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'authenticated') {
    router.push('/');
  }
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(''); // Declare title state
  const [catSlug, setCatSlug] = useState(''); // Declare catSlug state
  const [value, setValue] = useState(''); // Declare value state
  const [file, setFile] = useState(null); // Declare file state

  const handleSubmit = () => {
    // Implement your logic to handle form submission
    console.log('Title:', title);
    console.log('Category Slug:', catSlug);
    console.log('Content:', value);
    console.log('File:', file);
    // Add further logic as needed
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default write
