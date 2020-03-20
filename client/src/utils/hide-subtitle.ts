// If we have this url as "search/Despacito/tracks" everything is fine, it's returning false
// But if the url is "search/Despacito/tracks/tracks" we need to return true, that means we need to hide a
// some content in Subtitle component.
export const hideSubtitle = (url: string) => {
  return url.split('/').filter(char => char !== '').length > 2;
};
