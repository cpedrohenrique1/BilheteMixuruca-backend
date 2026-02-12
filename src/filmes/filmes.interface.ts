export interface Sessions {
    id:               string;
    events:           Movie[];
}

export interface Movie {
    id: string,
    title: string,
    originalTitle: string,
    contentRating: string,
    duration: string,
    synopsis: string,
    images: Image[],
    trailers: Trailer[]
}

interface Trailer {
    url: string,
    embeddedUrl: string
}

export interface Image {
    url: string,
    type: ImageType
}

enum ImageType {
    PosterHorizontal = "PosterHorizontal",
    PosterPortrait = "PosterPortrait",
}