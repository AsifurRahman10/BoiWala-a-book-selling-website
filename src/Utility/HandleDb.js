export const getStoredData = () => {
    const storedDataStr = localStorage.getItem('read-list');
    if (storedDataStr) {
        const storeData = JSON.parse(storedDataStr);
        return storeData;
    }
    else {
        return [];
    }
}

export const setDataToLS = (id) => {
    const data = getStoredData();
    if (data.includes(id)) {
        console.log('hello');
    }
    else {
        data.push(id);
        const idStr = JSON.stringify(data);
        localStorage.setItem('read-list', idStr)
    }
}

export const getWishLstStoreData = () => {
    const wishlistData = localStorage.getItem('wish-list');
    if (wishlistData) {
        const wishlistDataInt = JSON.parse(wishlistData);
        return wishlistDataInt;
    }
    else {
        return [];
    }

}
export const setWishListData = (id) => {
    const data = getWishLstStoreData();
    if (data.includes(id)) {
        return alert('already available in wishlist');
    }
    else {
        data.push(id);
        const dataStr = JSON.stringify(data);
        localStorage.setItem('wish-list', dataStr);
    }
}

