import { Photos, PhotosSearch } from '../actions';

export function resizedHeight(
  width: number,
  height: number,
  newWidth: number
): number {
  return (newWidth / width) * height;
}

function shortestColumnDifference(columns: number[]) {
  const min = [...columns].reduce((a, b) => Math.min(a, b));
  let shortest = columns.findIndex((val) => val === min);
  return shortest;
}

type MasonryColumnsProps = React.PropsWithChildren<{
  photosArray: any;
  numberOfColumns: number;
  IMAGE_WIDTH: number;
  ROW_GAP: number;
}>;
export function masonryColumns({
  photosArray,
  numberOfColumns,
  IMAGE_WIDTH,
  ROW_GAP,
}: MasonryColumnsProps) {
  if (!photosArray.length) return;

  let allColumns = Array.from(Array(numberOfColumns), () => []);

  //keeps track of heights of columns, to add image only to the shortest column
  let HeightsArray = Array(numberOfColumns).fill(0);

  let current = 0;
  let currentImage = photosArray[current];
  /* eslint-disable */
  while (photosArray[current]) {
    allColumns.forEach((column, index) => {
      if (currentImage) {
        let shortest = shortestColumnDifference(HeightsArray);
        let height = resizedHeight(
          currentImage.width,
          currentImage.height,
          IMAGE_WIDTH
        );
        if (shortest === index) {
          column.push(currentImage);
          HeightsArray[index] += height;
          current++;
          currentImage = photosArray[current];
        }
      }
    });
  }
  /* eslint-enable */
  return allColumns;
}

export default masonryColumns;
