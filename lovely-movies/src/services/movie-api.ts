'use strict'

const url = 'https://jsonplaceholder.typicode.com/photos'
const apiKey = '883be1f8'

export const getAllMovies = async (page?: number) => {
  
  try {
    const res = await fetch(`${url}`)
    return res.json()
  } catch (error: any) {
    throw new Error(error) 
  }

}


export const getOneMovie = async(id: number) => {
  try {
    const res = await fetch(`${url}?apiKey=${apiKey}&i=${id}`)
    return res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}