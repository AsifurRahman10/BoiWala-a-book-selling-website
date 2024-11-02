import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setWishListData, setDataToLS } from "../../Utility/HandleDb";

export const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const allBooks = useLoaderData();
  const book = allBooks.find((item) => id === item.bookId);
  const {
    rating,
    category,
    author,
    bookName,
    yearOfPublishing,
    publisher,
    tags,
    image,
    review,
    totalPages,
  } = book;

  const handleMarkAsRead = (id) => {
    setDataToLS(id);
  };
  const handleWishlist = (id) => {
    setWishListData(id);
  };
  return (
    <div className="flex flex-col lg:flex-row my-10 gap-4">
      <div className="flex-1">
        <img
          className="rounded-2xl lg:w-9/12 mx-auto md:h-[600px]"
          src={image}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="font-bold text-4xl">{bookName}</h2>
        <p>By : {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <p className="">
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="flex gap-3">
          <p className="font-bold">tag : </p>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[#23BE0A] text-sm bg-[#f4fcf3] rounded-3xl px-4 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <hr />
        <div>
          <div className="flex w-1/2 justify-between">
            <p>Number of Pages:</p>
            <p>{totalPages}</p>
          </div>
          <div className="flex w-1/2 justify-between">
            <p>Publisher:</p>
            <p>{publisher}</p>
          </div>
          <div className="flex w-1/2 justify-between">
            <p>Year of Publishing:</p>
            <p>{yearOfPublishing}</p>
          </div>
          <div className="flex w-1/2 justify-between">
            <p>Rating:</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="bg-transparent btn border-2 hover:bg-[#50B1C9] px-8"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishlist(id)}
            className="bg-transparent btn border-2 hover:bg-[#50B1C9] px-8"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
