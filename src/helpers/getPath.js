export default function (path) {
  return path.includes('https') ? path : 'https://1abcdesign.github.io/' + path
}
