import unsplash from '../api/unsplash';
import { Dispatch } from 'redux';

const tagEndpoint = 'https://api.unsplash.com/photos';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export interface Photos {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: string[];
  links: string[];
  categories: string[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: string[];
  topic_submissions: string[];
  user: string[];
}

export interface PhotosSearch {
  photos?: string[];
  collections?: string[];
  users?: string[];
  related_searches?: string[];
  meta?: string[];
}

export interface Image {
  id?: string;
  created_at?: string;
  updated_at?: string;
  promoted_at?: string;
  width?: number;
  height?: number;
  color?: string;
  blur_hash?: string;
  description?: string;
  alt_description?: string;
  urls?: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links?: string[];
  categories?: string[];
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: string[];
  sponsorship?: string;
  topic_submissions?: string[];
  user?: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string;
    };
  };
  exif?: string[];
  location?: string[];
  meta?: string[];
  public_domain?: boolean;
  tags?: {
    type: string;
    title: string;
    source: string[];
  };
  tags_preview?: string[];
  related_collections?: string[];
  views?: number;
  downloads?: number;
  topics?: string[];
}

export interface FetchPhotosAction {
  type: string;
  payload: Photos[];
}

export interface FetchPhotosSearchAction {
  type: string;
  payload: PhotosSearch[];
}

export interface FetchPhotoTagsAction {
  type: string;
  payload: Image[];
}

export const fetchPhotos =
  (endpoint: string, pageNo: number) => async (dispatch: Dispatch) => {
    const fetchedPhotos = await unsplash.get<Photos[]>(`${endpoint}`, {
      params: { per_page: 13, page: pageNo },
    });

    dispatch<FetchPhotosAction>({
      type: 'FETCH_PHOTOS',
      payload: fetchedPhotos.data,
    });
  };

export const fetchPhotosSearch =
  (
    endpoint: string,
    pageNo: number,
    query: string,
    orderByLatest: string | boolean
  ) =>
  async (dispatch: Dispatch) => {
    const order = orderByLatest ? 'relevant' : 'relevant';

    const queryFiltered = textToQuery(query);

    const fetchedPhotos = await unsplash.get<PhotosSearch[]>(`${endpoint}`, {
      params: {
        per_page: 13,
        page: pageNo,
        query: queryFiltered,
        order_by: order,
      },
    });

    dispatch<FetchPhotosSearchAction>({
      type: 'FETCH_PHOTO_SEARCH',
      payload: fetchedPhotos.data,
    });
  };

export const fetchPhotoTags = (image: Image) => async (dispatch: Dispatch) => {
  const fetchedPhoto = await fetch(`${tagEndpoint}/${image.id}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  const response = await fetchedPhoto.json();
  //console.log('response ' + JSON.stringify(response));
  //console.log('response.tags ' + JSON.stringify(response.tags));
  //response.data = response.tags;
  dispatch<FetchPhotoTagsAction>({
    type: 'FETCH_PHOTO_TAGS',
    payload: response,
  });
};

function textToQuery(string: string): string {
  let regex = /\W/;
  return string.replace(regex, '+');
}
