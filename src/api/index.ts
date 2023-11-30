import type {Post} from '../types';

import type {FetchPostsResponse} from './types';

const API_URL = 'http://localhost:3005/posts';

const API_KEY = {
  'x-api-key': 'thisisapikey',
};
const CONTENT_JSON_HEADER = {
  'Content-Type': 'application/json',
};
const DEFAULT_HEADERS = API_KEY;
const POST_HEADER = {
  ...DEFAULT_HEADERS,
  ...CONTENT_JSON_HEADER,
};

export type CreatePost = Pick<Post, 'title' | 'description'>;

export const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(`${API_URL}/${id}`, {
    headers: DEFAULT_HEADERS,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchPosts = async (): Promise<FetchPostsResponse> => {
  const response = await fetch(API_URL, {
    headers: DEFAULT_HEADERS,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const addPost = async (postData: CreatePost): Promise<Post> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: POST_HEADER,
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const deletePost = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: DEFAULT_HEADERS,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};
