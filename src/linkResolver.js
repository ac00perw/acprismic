export default function (document) {
  if (document.type === 'post') {
    return '/blog/' + document.uid;
  }
  return '/';
}