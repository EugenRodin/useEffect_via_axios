import axios from 'axios'

const API_Url = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await axios.get(API_Url)
  return response.data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}


// export const fetchData = async () => {
//   try {
//     const response = await fetch(API_Url)
//   if (!response.ok) {
//     throw new Error('Something went wrong')
//   }

//   const data = await response.json()
  
//   return data
//   } catch (error) {
//     throw new Error('Something went wrong')
//   }
// }