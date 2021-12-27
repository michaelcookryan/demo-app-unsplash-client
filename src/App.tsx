import React, { useState, useEffect, useCallback } from "react";
import { createApi } from "unsplash-js";

import CardList from "./Components/CardList/CardList";
import Pagination from "./Components/Pagination/Pagination";
import SearchBox from "./Components/SearchBox/SearchBox";

import "./App.scss";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [queryType, setQueryType] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [noMatches, setNoMatches] = useState("");

  const api = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  });

  // load some photos on initial landing
  useEffect(() => {
    if (queryType?.length === 0) {
      api.photos
        .list({ perPage: 9 })
        .then((result) => {
          const { results } = result.response;

          if (results?.length > 0) {
            setPhotos(results);
            setNoMatches("");
          }
        })
        .catch((err) => {
          console.log("something went wrong!", err);
        });
    }
  }, []);

  // get photos based on keyword entered by user
  useEffect(() => {
    if (queryType?.length > 0) {
      let mounted = true;
      api.search
        .getPhotos({ query: queryType, page: 1, perPage: 30 })
        .then((result) => {
          if (mounted) {
            setPhotos(result.response.results);
            setNoMatches("");
          }
        })
        .catch((err) => {
          console.log("something went wrong!", err);
        });
      return () => {
        mounted = false;
      };
    }
  }, [queryType]);

  // load assembly of photos
  useEffect(() => {
    const endOffset = itemOffset + 9;

    setCurrentItems(photos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(photos.length / 9));

    if (photos?.length === 0 && queryType?.length > 0) {
      setNoMatches("No matches found.");
    }
  }, [itemOffset, photos]);

  // enter keyword
  const handleChange = useCallback((e: any) => {
    const searchField = e.target.value;
    setQueryType(searchField);
  }, []);

  // adjust range of photos
  const handlePageClick = useCallback(
    (e: any) => {
      if (photos?.length > 0) {
        const newOffset = (e.selected * 9) % photos.length;
        setItemOffset(newOffset);
      }
    },
    [photos]
  );

  return (
    <div className='App'>
      <SearchBox placeholder='search photos' handleChange={handleChange} />
      {photos?.length > 0 && <CardList photoList={currentItems} />}
      {currentItems?.length === 0 && <h1>{noMatches}</h1>}
      {photos?.length >= 8 && (
        <Pagination
          initialPage={0}
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      )}
      <div id='container'></div>
    </div>
  );
};

export default App;
