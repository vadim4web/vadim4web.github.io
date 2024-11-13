export default function (path) {
  return path.includes('https') ? path : 'https://abcdesign1.github.io/' + path
}
