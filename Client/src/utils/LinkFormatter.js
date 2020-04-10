const GOOGLE_MAPS = "https://www.google.com/maps/place/";

export const getLink = title => title.search('http') === -1 ? GOOGLE_MAPS + title : title;
