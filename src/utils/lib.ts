import { useEffect } from 'react';
import { Photos, PhotosSearch } from '../actions';

export function createModal(divId: string): void {
  const checkElement = document.getElementById(divId);
  if (!checkElement) {
    let element = document.createElement('div');
    element.setAttribute('id', divId);
    document.body.appendChild(element);
  }
}

export function useClickOutside(innerRef: any, callback: any) {
  useEffect(() => {
    const handleClickOutside = (event: any): void => {
      event.stopPropagation();
      if (
        innerRef.current &&
        !innerRef.current.contains(event.target) &&
        event.target.contains(innerRef.current)
      ) {
        callback(event);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback, innerRef]);
}

export const removeDulpicateImages = (prevPhotos: any, nextPhotos: any) => {
  if (!nextPhotos) {
    return [];
  }
  const filteredPhotos = nextPhotos.filter((current: any) => {
    return !prevPhotos.some((checkPhoto: any) => checkPhoto.id === current.id);
  });
  return [...prevPhotos, ...filteredPhotos];
};
