export interface DayOfWeek {
    date:          Date;
    dateFormatted: string;
    dayOfWeek:     string;
    isToday:       boolean;
    theaters:      Theater[];
}

export interface Theater {
    id:                string;
    boxOfficeId:       string;
    name:              TheaterName;
    address:           Address;
    addressComplement: AddressComplement;
    number:            string;
    urlKey:            URLKey;
    neighborhood:      Neighborhood;
    properties:        Properties;
    functionalities:   Functionalities;
    deliveryType:      DeliveryType[];
    siteURL:           string;
    nationalSiteURL:   string;
    enabled:           boolean;
    blockMessage:      string;
    rooms:             Room[];
    sessionTypes:      null;
    geolocation:       Geolocation;
    operationPolicies: any[];
}

export enum Address {
    AVAnhanguera = "AV. ANHANGUERA ",
    AVJamelCecílio = "Av. Jamel Cecílio",
    AVPerimetralNorte = "Av. Perimetral Norte",
    AVT10 = "Av. T10",
}

export enum AddressComplement {
    Empty = "",
    LucT120 = "LUC T-120",
    QuadraALoja1115PisoP3 = "Quadra A - Loja 1115 - Piso P3",
}

export enum DeliveryType {
    AplicativoScannerless = "Aplicativo/Scannerless",
    BilheteriaATM = "Bilheteria/ATM",
}

export interface Functionalities {
    operationPolicyEnabled: boolean;
}

export interface Geolocation {
    lat: number;
    lng: number;
}

export enum TheaterName {
    CinemarkFlamboyantGoiânia = "Cinemark Flamboyant - Goiânia ",
    CinemarkPasseioDasÁguas = "Cinemark Passeio das Águas",
    CinépolisCerrado = "Cinépolis Cerrado",
    KinoplexGoiânia = "Kinoplex Goiânia",
}

export enum Neighborhood {
    Aeroviario = "Aeroviario",
    Centro = "Centro",
    Goiania = "Goiania",
    JardimGoias = "Jardim Goias",
}

export interface Properties {
    hasBomboniere:              boolean;
    hasContactlessWithdrawal:   boolean;
    hasSession:                 boolean;
    hasSeatDistancePolicy:      boolean;
    hasSeatDistancePolicyArena: boolean;
}

export interface Room {
    name:     RoomEnum;
    type:     null;
    sessions: Session[];
}

export enum RoomEnum {
    Sala2 = "Sala 2",
    Sala3 = "Sala 3",
    Sala4 = "Sala 4",
    Sala5 = "Sala 5",
    Sala6 = "Sala 6",
    Sala8 = "Sala 8",
}

export interface Session {
    id:               string;
    boxOfficeId:      string;
    eventBoxOfficeId: string;
    price:            number;
    room:             RoomEnum;
    type:             NameElement[];
    types:            TypeClass[];
    date:             DateClass;
    realDate:         DateClass;
    time:             string;
    defaultSector:    string;
    midnightMessage:  null;
    siteURL:          string;
    nationalSiteURL:  null;
    appCheckoutUrl:   string;
    hasSeatSelection: boolean;
    driveIn:          boolean;
    streaming:        boolean;
    isNewCheckout:    boolean;
    maxTicketsPerCar: number;
    enabled:          boolean;
    blockMessage:     string;
}

export interface SessionPayload{
    id: string,
    defaultSector: string
}

export interface MovieData {
    title: string,
    
}

export interface DateClass {
    localDate:   Date;
    isToday:     boolean;
    dayOfWeek:   string;
    dayAndMonth: string;
    hour:        string;
    year:        string;
}

export enum NameElement {
    Dublado = "Dublado",
    Legendado = "Legendado",
    Normal = "Normal",
}

export interface TypeClass {
    id:               number;
    name:             NameElement;
    alias:            Alias;
    display:          boolean;
    typeDescriptions: TypeDescriptions;
}

export enum Alias {
    Dub = "DUB",
    Leg = "LEG",
    The2D = "2D",
}

export interface TypeDescriptions {
    detailedImage: string;
}

export enum URLKey {
    CinemarkFlamboyantGoiania = "cinemark-flamboyant-goiania",
    CinemarkPasseioDasAguas = "cinemark-passeio-das-aguas",
    CinepolisCerrado = "cinepolis-cerrado",
    KinoplexGoiania = "kinoplex-goiania",
}

export interface MovieApiData {
    id:               string;
    title:             string;
    carouselSlug:     string;
    priority:         number;
    type:             string;
    hasLink:          boolean;
    displayOnCatalog: boolean;
    seeMorePageUrl:   null;
    events:           Event[];
}
export interface Event {
    id:                string;
    title:             string;
    originalTitle:     string;
    type:              string;
    movieIdUrl:        string;
    ancineId:          string;
    countryOrigin:     string;
    priority:          number;
    contentRating:     string;
    duration:          string;
    rating:            number;
    synopsis:          string;
    cast:              string;
    director:          string;
    directors:         string;
    imageFeatured:     null;
    distributor:       string;
    inPreSale:         boolean;
    isReexhibition:    boolean;
    isComingSoon:      boolean;
    urlKey:            string;
    isPlaying:         boolean;
    countIsPlaying:    number;
    premiereDate:      PremiereDate;
    creationDate:      Date;
    city:              string;
    siteURL:           string;
    nationalSiteURL:   string;
    images:            Image[];
    genres:            string[];
    ratingDescriptors: string[];
    accessibilityHubs: any[];
    completeTags:      any[];
    tags:              any[];
    trailers:          Trailer[];
    partnershipType:   null;
    titleSeen:         null;
    ratingDetails:     null;
}

export interface Image {
    url:  string;
    type: ImageType;
}

export enum ImageType {
    PosterHorizontal = "PosterHorizontal",
    PosterPortrait = "PosterPortrait",
}

export interface PremiereDate {
    localDate:   Date;
    isToday:     boolean;
    dayOfWeek:   string;
    dayAndMonth: string;
    hour:        Hour;
    year:        string;
}

export enum Hour {
    The0000 = "00:00",
}

export interface Trailer {
    type:        string;
    url:         string;
    embeddedUrl: string;
}