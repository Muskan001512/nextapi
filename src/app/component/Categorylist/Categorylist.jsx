"use client"
import React, { useState, useEffect } from "react";
import styles from "./Categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories", {
          cache: "no-store",
        });
  
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
  
        const result = await res.json();
        console.log("Data from API:", result);
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : (
        <div className={styles.categories}>
        {data.map((item) => (
  <Link href={`/blog?cat=${item.slug}`} key={item._id}>
    {item.img && (
      <Image
        src={item.img}
        alt=""
        width={32}
        height={32}
        className={styles.image}
      />
    )}
    {item.title}
  </Link>
))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;


