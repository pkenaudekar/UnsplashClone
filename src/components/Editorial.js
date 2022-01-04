import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageCardList from './ImageCardList';
import useImages from '../hooks/useImages';
import unsplash from '../api/unsplash';
const Editorial = () => {
  //const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState(null);
  //const [images, search] = useImages('');

  useEffect(() => {
    searchImage(search);
  }, [search]);

  const searchImage = async (term) => {
    const response = await unsplash.get('/photos', {
      params: { query: term, per_page: 12 },
    });

    setImages(response.data);
  };

  return (
    <div className="container-fluid">
      <div className="image-section">
        <img
          src="images/photo-1639975721105-98fc58c37822.jpg"
          alt=""
          className="img-fluid"
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

      <div className="">
        <ImageCardList images={images} />
      </div>
    </div>
  );
};

export default Editorial;
