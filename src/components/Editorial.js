import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

//import useImages from '../hooks/useImages';
import unsplash from '../api/unsplash';
import fetchPhotos from '../utils/fetchPhotos';
import fetchPhotosSearch from '../utils/fetchPhotosSearch';
import { ContainerGrid } from './Grid.js';
import { removeDulpicateImages } from '../utils/lib';
import data from '../utils/data';
import { useInfiniteScroll } from '../utils';
import { ModalProvider } from './useModal.js';

const Editorial = () => {
  //const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  //const [search, setSearch] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  //const [images, search] = useImages('');
  const [photosArray, setPhotosArray] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const infiniteLoadRef = useRef(null);

  //const [images, search] = useImages('');
  const photoEndpoint = '/photos';
  const searchEndpoint = '/search/photos';

  const screenWidths = [
    data.SCREEN_WIDTH_1COLUMN,
    data.SCREEN_WIDTH_2COLUMNS,
    data.SCREEN_WIDTH_3COLUMNS,
  ];

  const imageWidths = [
    data.IMAGE_WIDTH_1COLUMN,
    data.IMAGE_WIDTH_2COLUMNS,
    data.IMAGE_WIDTH_3COLUMNS,
  ];

  let fetching = useRef(true);
  useEffect(() => {
    const getPhotos = async (searchText) => {
      let nextPhotos;
      if (searchText === null) {
        nextPhotos = await fetchPhotos(photoEndpoint, pageNo);
      } else {
        nextPhotos = await fetchPhotosSearch(
          searchEndpoint,
          pageNo,
          searchText,
          false
        );
      }
      if (pageNo === 1) {
        if (nextPhotos && nextPhotos.length === 0) {
          setErrorMessage("Couldn't find any photos");
          setPhotosArray([]);
          setPhotosArray([]);
        } else {
          setErrorMessage(null);
        }
        setPhotosArray(nextPhotos);
        window.scrollTo(0, 0);
      } else {
        setPhotosArray((prevPhotos) =>
          removeDulpicateImages(prevPhotos, nextPhotos)
        );
      }

      fetching.current = false;
    };

    getPhotos(searchText);
  }, [pageNo, searchText]);

  const updatePage = useCallback(() => {
    if (!fetching.current) {
      fetching.current = true;
      setPageNo((prevPage) => {
        return prevPage + 1;
      });
    }
  }, []);

  useInfiniteScroll(infiniteLoadRef, updatePage);
  /*
  const searchImage = async () => {
    const response = await unsplash.get('/topics/health/photos', {
      params: { per_page: 30, page: pageNo },
    });

    setImages(response.data);
  };
*/

  return (
    <div className="container-fluid">
      <div className="image-section">
        <img
          src="images/photo-1639975721105-98fc58c37822.jpg"
          alt=""
          className="img-fluid"
          width="100%"
          height="auto"
        />
        <div className="image-section-description">
          <span className="Fu4vG">Unsplash</span>
          <h1 className="o4ViM">
            The internet’s source of&nbsp;
            <Link className="H4eZF" to="/license">
              freely-usable images
            </Link>
            .
          </h1>
          <p className="eIg8I">Powered by creators everywhere.</p>
          <div className="d-flex flex-row ujgWJ">
            <div className="d-flex flex-row H4eZF">
              <Link
                className="H4eZF"
                title="View the photo by Stephen Leonardi"
                to="/photos/qLYWxmIT7IU"
              >
                Photo of the Day
              </Link>
              &nbsp;by&nbsp;
              <Link className="H4eZF" to="/@stephenleo1982">
                Stephen Leonardi
              </Link>
            </div>
            <div className="d-flex flex-row qDYfA">
              &nbsp;Read more about the&nbsp;
              <Link className="H4eZF" to="/license">
                Unsplash License
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ minHeight: 1600 }}>
          <ModalProvider>
            <ContainerGrid
              photosArray={photosArray}
              screenWidths={screenWidths}
              imageWidths={imageWidths}
              minColumns={1}
              rowGap={data.ROW_GAP}
              columnGap={data.COLUMN_GAP}
            />
          </ModalProvider>
        </div>

        <div style={{ height: 10 }} ref={infiniteLoadRef}></div>
      </div>
    </div>
  );
};

export default Editorial;
