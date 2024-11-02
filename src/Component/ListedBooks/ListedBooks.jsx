import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredData,
  getWishLstStoreData,
  setWishListData,
} from "../../Utility/HandleDb";
import { ListedBook } from "../ListedBook/ListedBook";

export const ListedBooks = () => {
  const [alreadyReadBooks, setAlreadyReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
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
  return (
    <div className="my-8">
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
