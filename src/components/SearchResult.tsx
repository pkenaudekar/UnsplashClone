import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
//import fetchPhotos from '../utils/fetchPhotos';
//import fetchPhotosSearch from '../utils/fetchPhotosSearch';
import { ContainerGrid } from './Grid';
import { removeDulpicateImages } from '../utils/lib';
import data from '../utils/data';
import { useInfiniteScroll } from '../utils';
import { ModalProvider } from './useModal';
import { StoreState } from '../reducers';
import {
  Photos,
  PhotosSearch,
  fetchPhotos,
  fetchPhotosSearch,
} from '../actions';

interface SearchResultProps {
  photos?: Photos[];
  searchPhotos?: PhotosSearch[];
  fetchPhotos(photoEndpoint: string, pageNo: number): any;
  fetchPhotosSearch(
    endpoint: string,
    pageNo: number,
    query: string | undefined,
    orderByLatest: string | boolean
  ): any;
}

const SearchResult = (props: SearchResultProps): JSX.Element => {
  const { photos, searchPhotos } = props;
  const location: any = useLocation();

  //const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  //const [search, setSearch] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [photosArray, setPhotosArray] = useState<
    Photos[] | PhotosSearch[] | undefined
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
  useEffect(() => {
    setSearchTextString(location.state.term);
    //console.log('SEARCH TERM ' + location.state.term);
    let searchText = 'car';
    const getPhotos = async (searchText?: string | null) => {
      console.log('searchText ' + searchText);
      let nextPhotos: Photos[] | PhotosSearch[] | undefined;
      if (searchText === null) {
        await props.fetchPhotos(photoEndpoint, pageNo);
        nextPhotos = photos;
      } else {
        await props.fetchPhotosSearch(
          searchEndpoint,
          pageNo,
          searchText,
          false
        );
        nextPhotos = searchPhotos;
      }
      if (pageNo === 1) {
        if (nextPhotos && nextPhotos.length === 0) {
          setErrorMessage("Couldn't find any photos");
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

    getPhotos(searchText);
  }, [pageNo, searchTextString, forceRender]);

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
  return { photos: state.photos, searchPhoto: state.searchPhoto };
};

export default connect(mapStateToProps, { fetchPhotos, fetchPhotosSearch })(
  SearchResult
);
