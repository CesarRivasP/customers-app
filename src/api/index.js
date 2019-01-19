// const apiFetchCustomers = () => (
//   fetch(url)
//     .then(v => v.json())
// )

export const apiGet = (url) => () => fetch(url).then(v => v.json())
