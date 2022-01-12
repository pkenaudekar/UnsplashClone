import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos, fetchPhotosSearch } from '../actions';
import { connect } from 'react-redux';
//import unsplash from '../api/unsplash';
//import fetchPhotos from '../utils/fetchPhotos';
//import fetchPhotosSearch from '../utils/fetchPhotosSearch';
import { ContainerGrid } from './Grid.js';
import { removeDulpicateImages } from '../utils/lib';
import data from '../utils/data';
import { useInfiniteScroll } from '../utils';
import { ModalProvider } from './useModal.js';
const ThreeDRenders = (props) => {
  const { photos, searchPhotos } = props;
  //const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  //const [search, setSearch] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  //const [images, search] = useImages('');

  const [photosArray, setPhotosArray] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [forceRender, setForceRender] = useState('true');
  const infiniteLoadRef = useRef(null);

  //const [images, search] = useImages('');
  const photoEndpoint = '/topics/3d-renders/photos';
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
        //nextPhotos = await props.fetchPhotos(photoEndpoint, pageNo);
        await props.fetchPhotos(photoEndpoint, pageNo);
        nextPhotos = photos;
      } else {
        //nextPhotos = await fetchPhotosSearch(searchEndpoint,pageNo,searchText,false);
        await fetchPhotosSearch(searchEndpoint, pageNo, searchText, false);
        nextPhotos = searchPhotos;
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
      <div className="d-flex flex-row detail-section">
        <div className="col detail-section-left">
          <h1 className="detail-header">3D Renders</h1>
          <h2 className="detail-content">
            For the first time ever, Unsplash is accepting a new category of
            images outside of photography. Submit your 3-dimensional images,
            designed in the software of your choice, rendered into JPEG images.
            <br />
            <br />
            <p className="detail-para">
              Learn more&nbsp;
              <Link to="">here</Link>.
            </p>
          </h2>
        </div>
        <div className="col detail-section-right">
          <div className="row justify-content-center stats-section">
            <div className="col-4 card stats-section-card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-lightning-charge"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"></path>
                      </svg>
                      &nbsp;&nbsp;Status
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm"
                      disabled
                    >
                      Open
                    </button>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                      </svg>
                      &nbsp;&nbsp;Curator
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-emoji-sunglasses"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-image"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path>
                      </svg>
                      &nbsp;&nbsp;Contribution
                    </div>
                    <div>1.3k</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                      </svg>
                      &nbsp;&nbsp;Top Contributors
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-emoji-sunglasses-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-emoji-wink-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z" />
                      </svg>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="btn btn-dark"
              style={{
                fontSize: '0.9vw',
              }}
            >
              Submit to <strong>3D Renders</strong>
            </button>
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

const mapStateToProps = (state) => {
  return { photos: state.photos, searchPhoto: state.searchPhoto };
};

export default connect(mapStateToProps, { fetchPhotos, fetchPhotosSearch })(
  ThreeDRenders
);
