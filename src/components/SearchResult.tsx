import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Path, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
//import fetchPhotos from '../utils/fetchPhotos';
//import fetchPhotosSearch from '../utils/fetchPhotosSearch';
import { ContainerGrid } from './Grid';
import { removeDulpicateImages } from '../utils/lib';
import data from '../utils/data';
import { useInfiniteScroll } from '../utils';
import { ModalProvider } from './useModal';
import { StoreState } from '../reducers';
import ErrorMessage from './ErrorMessage';

import {
  Photos,
  PhotosSearch,
  fetchPhotos,
  fetchPhotosSearch,
} from '../actions';

interface SearchResultProps {
  photos?: Photos[];
  searchPhoto: any;
  fetchPhotos(photoEndpoint: string, pageNo: number): any;
  fetchPhotosSearch(
    endpoint: string,
    pageNo: number,
    query: string | undefined,
    orderByLatest: string | boolean
  ): any;
}

interface Location extends Path {
  state: { term?: string; pageNo?: number };
  pathname: string;
  search: string;
  hash: string;
  key: string;
}
const SearchResult = (props: SearchResultProps): JSX.Element => {
  const { photos, searchPhoto } = props;
  const location: Location = useLocation();

  //const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  //const [search, setSearch] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [photosArray, setPhotosArray] = useState<
    Photos[] | PhotosSearch | undefined
  >([]);
  const [searchTextString, setSearchTextString] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [forceRender, setForceRender] = useState('true');
  const infiniteLoadRef = useRef(null);

  //const [images, search] = useImages('');
  const photoEndpoint = '/topics/fashion/photos';
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
  let nextPhotos: any;

  useEffect(() => {
    setForceRender('true');
    setPhotosArray([]);
    setPageNo(1);
    setErrorMessage(null);
  }, [location.state.term]);
  useEffect(() => {
    setSearchTextString(location.state.term);

    console.log('SEARCH TERM ' + location.state.term);
    console.log('SearchTextString ' + searchTextString);
    let searchText: string;
    const getPhotos = async (searchText?: string | null) => {
      //const getPhotos = async () => {
      //let nextPhotos: any;
      if (searchText === null) {
        //if (searchTextString === null) {
        await props.fetchPhotos(photoEndpoint, pageNo);
        console.log('searchText-if ' + searchText);
        //console.log('photos.state ' + JSON.stringify(photos));
        //console.log('searchPhoto.state ' + JSON.stringify(state.searchPhoto));
        nextPhotos = photos;
      } else {
        // await props.fetchPhotosSearch(        searchEndpoint,          pageNo,          searchText,          false        );
        await props.fetchPhotosSearch(
          searchEndpoint,
          pageNo,
          searchText,
          false
        );
        console.log('searchText-else ' + searchText); //console.log('photos.state ' + JSON.stringify(state.photos));
        //console.log('searchPhoto ' + JSON.stringify(searchPhoto));
        nextPhotos = searchPhoto.results;
      }
      if (pageNo === 1) {
        if (nextPhotos && nextPhotos.length === 0) {
          setErrorMessage("Couldn't find any match");
          setPhotosArray([]);
        } else {
          setErrorMessage(null);
        }
        setPhotosArray(nextPhotos);
        setForceRender('false');
        setPageNo(pageNo + 1);
        window.scrollTo(0, 0);
      } else {
        setPhotosArray((prevPhotos) =>
          removeDulpicateImages(prevPhotos, nextPhotos)
        );
      }

      fetching.current = false;
    };

    //getPhotos(searchText);
    getPhotos(location.state.term);
  }, [pageNo, forceRender]);

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
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="search-header">Search Results</h1>
        </div>
      </div>
      <div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
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

const mapStateToProps = (
  state: StoreState
): { photos: Photos[]; searchPhoto: PhotosSearch[] } => {
  //console.log('photos.state ' + JSON.stringify(state.photos));
  //console.log('searchPhoto.state ' + JSON.stringify(state.searchPhoto));
  return { photos: state.photos, searchPhoto: state.searchPhoto };
};

export default connect(mapStateToProps, { fetchPhotos, fetchPhotosSearch })(
  SearchResult
);
