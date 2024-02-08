

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


//register api
export const registerAPI =async(user)=>{

 return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
} 


//login api
 
export const loginAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,user,"")
}


//add blog

export const addBlog = async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/blog/add`,reqBody,reqHeader)
}


//home blog

export const homeBlogApi = async()=>{
  return await commonAPI('GET',`${BASE_URL}/blog/homeblog`)
}

//allblog

export const allBlogApi=async(searchKey,reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/blog/allblog?search=${searchKey}`,"",reqHeader )
}


//userblog

export const userBlogApi=async(reqHeader)=>{
  return await commonAPI('GET',`${BASE_URL}/blog/userblog`,"",reqHeader )
}

//editbook
export const editBookApi=async(bookId,reqBody,reqHeader)=>{
  return await commonAPI('PUT',`${BASE_URL}/book/edit/${bookId}`,reqBody,reqHeader )
}


//deletebook

export const deleteBookApi=async(bookId,reqHeader)=>{
  return await commonAPI('DELETE',`${BASE_URL}/book/delete/${bookId}`,{},reqHeader )
}