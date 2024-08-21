import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import unsplash from '../api/unsplash';
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

interface EditorialProps {
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

const Editorial = (props: EditorialProps): JSX.Element => {
  const { photos, searchPhotos } = props;
  //const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  //const [search, setSearch] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  //const [images, search] = useImages('');
  const [photosArray, setPhotosArray] = useState<
    Photos[] | PhotosSearch[] | undefined
  >([]);
  const [searchText, setSearchText] = useState(null);
  const [forceRender, setForceRender] = useState('true');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    const getPhotos = async (searchText?: string | null) => {
      let nextPhotos: any;
      if (searchText === null) {
        //nextPhotos = await props.fetchPhotos(photoEndpoint, pageNo);
        await props.fetchPhotos(photoEndpoint, pageNo);
        nextPhotos = photos;
      } else {
        //nextPhotos = await fetchPhotosSearch(searchEndpoint,pageNo,searchText,false);
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

    getPhotos(searchText);
  }, [pageNo, searchText, forceRender]);

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
            <div className="d-flex flex-row H4eZF oPX6y">
              <Link
                className="H4eZF"
                title="View the photo by Stephen Leonardi"
                to="/photos/qLYWxmIT7IU"
              >
                Photo of the Day
              </Link>
              &nbsp;by&nbsp;
              <Link className="H4eZF " to="/@stephenleo1982">
                Stephen Leonardi
              </Link>
            </div>
            <div className="d-flex flex-row qDYfA oPX6y">
              &nbsp;Read more about the&nbsp;
              <Link className="H4eZF" to="/license">
                Unsplash License
              </Link>
            </div>
          </div>
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
  return { photos: state.photos, searchPhoto: state.searchPhoto };
};

export default connect(mapStateToProps, { fetchPhotos, fetchPhotosSearch })(
  Editorial
);
