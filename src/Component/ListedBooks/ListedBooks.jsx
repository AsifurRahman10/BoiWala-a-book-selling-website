import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData, getWishLstStoreData } from "../../Utility/HandleDb";
import { ListedBook } from "../ListedBook/ListedBook";

export const ListedBooks = () => {
  const [alreadyReadBooks, setAlreadyReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");
  const allBookData = useLoaderData();
  useEffect(() => {
    const alreadyReadBooks = getStoredData();
    const getReadBooksData = allBookData.filter((books) =>
      alreadyReadBooks.includes(books.bookId)
    );
    setAlreadyReadBooks(getReadBooksData);

    const wishlistBooks = getWishLstStoreData();
    const getWishlistBookData = allBookData.filter((books) =>
      wishlistBooks.includes(books.bookId)
    );
    setWishlist(getWishlistBookData);
  }, []);

  const handleSorting = (sortOrder) => {
    setSort(sortOrder);
    if (sortOrder === "rating") {
      const copyBooks = [...alreadyReadBooks].sort(
        (a, b) => b.rating - a.rating
      );
      setAlreadyReadBooks(copyBooks);
    } else if (sortOrder === "No-Of-Page") {
      const copyBooks = [...alreadyReadBooks].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setAlreadyReadBooks(copyBooks);
    }
  };
  return (
    <div className="my-8">
      <div className="text-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white px-8"
          >
            {sort ? `Sort  by : ${sort}` : "Sort  by"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSorting("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSorting("No-Of-Page")}>
              <a>Number of pages</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5">
            {alreadyReadBooks.map((alreadyReadBook) => (
              <ListedBook
                key={alreadyReadBook.bookId}
                alreadyReadBook={alreadyReadBook}
              ></ListedBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-5">
            {wishlist.map((alreadyReadBook) => (
              <ListedBook
                key={alreadyReadBook.bookId}
                alreadyReadBook={alreadyReadBook}
              ></ListedBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
