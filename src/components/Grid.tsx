import React, { useState, useRef, useEffect } from 'react';
import { Image } from './Image';
import { useScreenResize } from '../utils/handlers';
import { masonryColumns } from '../utils/masonry';
import {
  Photos,
  PhotosSearch,
  fetchPhotos,
  fetchPhotosSearch,
} from '../actions';
import { Image as ImageRef } from '../actions';

type ContainerGridProps = React.PropsWithChildren<{
  photosArray: any;
  screenWidths: number[];
  imageWidths: number[];
  minColumns: number;
  rowGap: number;
  columnGap: number;
}>;
export function ContainerGrid({
  photosArray,
  rowGap,
  columnGap,
  minColumns,
  screenWidths,
  imageWidths,
}: ContainerGridProps) {
  //to ensure the blurhash gets the same width/height as the image (blurhash width/height are specified rigidly by javascript only)
  const [maxImageWidth, setMaxImageWidth] = useState(
    imageWidths[imageWidths.length - 1]
  );
  const [currentImageWidth, setCurrentImageWidth] = useState(
    imageWidths[imageWidths.length - 1]
  );
  const [columns, setColumns] = useState([]);
  const [numberOfColumns, setNumberOfColumns] = useState(
    imageWidths.length - 1
  );

  const gridRef = useRef<HTMLInputElement | null>();
  let [screenWidth] = useScreenResize(100);

  useEffect(() => {
    for (let i = 0; i < screenWidths.length; i++) {
      if (screenWidth < screenWidths[i]) {
        setNumberOfColumns(i + minColumns);
        setMaxImageWidth(imageWidths[i]);
        break;
      }
      setNumberOfColumns(screenWidths.length - 1);
      setMaxImageWidth(screenWidths[screenWidths.length - 1]);
    }
  }, [screenWidth, imageWidths, screenWidths, minColumns]);

  useEffect(() => {
    if (photosArray && photosArray.length !== 0) {
      setColumns(
        masonryColumns({
          photosArray,
          numberOfColumns,
          IMAGE_WIDTH: maxImageWidth,
          ROW_GAP: rowGap,
        })
      );
    }
  }, [photosArray, numberOfColumns, rowGap, maxImageWidth]);

  useEffect(() => {
    if (gridRef.current) {
      const newWidth = gridRef.current.clientWidth / columns.length - columnGap;
      if (newWidth > maxImageWidth) {
        setCurrentImageWidth(maxImageWidth);
      } else {
        setCurrentImageWidth(newWidth);
      }
    }
  }, [columnGap, screenWidth, columns, maxImageWidth]);

  if (photosArray === undefined || photosArray.length === 0) {
    return null;
  }

  return (
    <div className="grid" style={{ gap: columnGap }} ref={gridRef}>
      {columns.map((column, index) => {
        return (
          <div className="grid-container" key={index}>
            {column.map((image: ImageRef) => {
              return (
                <Image
                  key={image.id}
                  image={image}
                  IMAGE_WIDTH={currentImageWidth}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
