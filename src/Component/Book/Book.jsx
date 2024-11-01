import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Book = ({ book }) => {
  const { bookId, bookName, tags, category, rating, image, author } = book;
  return (
    <div className="card shadow-xl p-6 lg:w-9/12 lg:mx-auto">
      <figure className="py-6 bg-[#F3F3F3]">
        <img src={image} alt="Shoes" className="rounded-xl h-[190px]" />
      </figure>
      <div className="card-body p-0 mt-6">
        <div className="flex gap-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[#23BE0A] text-sm bg-[#f4fcf3] rounded-3xl px-4 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title font-bold text-2xl">{bookName}</h2>
        <p className="border-dashed border-b-[2px] pb-3">By : {author}</p>
        <div className="flex justify-between">
          <div>
            <p>{category}</p>
          </div>
          <div className="flex gap-2">
            <p>{rating}</p>
            <CiStar className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <Link to={`book/${bookId}`}>
          <button className="btn w-full bg-[#23BE0A] text-white">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};
