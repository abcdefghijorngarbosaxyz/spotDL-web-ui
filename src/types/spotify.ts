export interface SpotifyError {
  error: {
    status: number;
    message: string;
  };
}

interface ExternalUrls {
  spotify: string;
}

interface ImageObject {
  height: number | null;
  url: string;
  width: number | null;
}

export interface PagingObject<T> {
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SimplifiedArtistObject {
  external_urls: ExternalUrls;
  id: string;
  name: string;
}

export interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  id: string;
  name: string;
  track_number: number;
}

export interface SimplifiedPlaylistObject {
  description: string | null;
  external_urls: ExternalUrls;
  id: string;
  images: ImageObject[];
  name: string;
  owner: {
    external_urls: ExternalUrls;
    id: string;
    display_name: string | null;
  };
  tracks: {
    total: number;
  };
}

export interface Playlist extends SimplifiedPlaylistObject {
  tracks: PagingObject<PlaylistTrackObject>;
}

export interface Track extends SimplifiedTrackObject {
  artists: Artist[];
  album: Album;
}

export interface Artist extends SimplifiedArtistObject {
  genres: Array<string>;
  images: Array<ImageObject>;
}

export interface Album {
  total_tracks: number;
  id: string;
  images: ImageObject[];
  genres: string[];
  artists: SimplifiedArtistObject[];
  name: string;
  tracks?: PagingObject<SimplifiedTrackObject>;
  external_urls: ExternalUrls;
}

export interface PlaylistTrackObject {
  added_at: string | null;
  track: Track;
}

export interface SearchResults {
  tracks?: PagingObject<Track>;
  artists?: PagingObject<Artist>;
  albums?: PagingObject<Album>;
  playlists?: PagingObject<Playlist>;
}

export interface CategoryItem {
  id: string;
  icons: [
    {
      height: number | null;
      width: number | null;
      url: string;
    }
  ];
  name: string;
}

export interface Category {
  categories: PagingObject<CategoryItem>;
}

export interface CategoryPlaylist {
  playlists: PagingObject<SimplifiedPlaylistObject>;
}
