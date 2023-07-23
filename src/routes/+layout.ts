import '../app.css';
import type { LayoutLoad } from './$types';

export const csr = true;
export const ssr = false;
export const prerender = true;

export const load = (async ({ fetch }) => {
  interface Response {
    access_token: string;
    expires_in: number;
    token_type: string;
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'post',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${btoa(
        `${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`
      )}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const { access_token } = (await response.json()) as Response;

  return {
    access_token
  };
}) satisfies LayoutLoad;
