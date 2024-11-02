import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { SiPowerpages } from "react-icons/si";

export const ListedBook = ({ alreadyReadBook }) => {
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
  } = alreadyReadBook;
  return (
    <div className="border-2 p-4 rounded-lg">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="rounded-lg">
          <img
            src={image}
            className="lg:h-[250px] h-full w-full lg:px-10 bg-[#f3f3f3] lg:py-2 rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex gap-3">
            <div className="space-x-2">
              <span className="font-bold">Tag</span>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[#23BE0A] text-sm bg-[#f4fcf3] rounded-3xl px-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-3xl lg:text-base" />
              <p>Year of publish : {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <div className="flex items-center gap-2">
              <BsPeople />
              <p>Publisher : {publisher}</p>
            </div>
            <div className="flex items-center gap-2">
              <SiPowerpages />
              <p>Page {totalPages}</p>
            </div>
          </div>
          <div className="border-t-2 pt-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-[#328EFF] bg-[#e0eeff] px-4 rounded-3xl">
                Category: {category}
              </span>
              <span className="text-[#FFAC33] bg-[#fff3df] px-4 rounded-3xl">
                Rating: {rating}
              </span>
              <span className="text-white bg-[#23BE0A] px-4 rounded-3xl">
                View Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
