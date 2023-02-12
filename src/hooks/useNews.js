import { useQuery } from 'react-query'
import axios from 'axios'

const getPostByLanguage = async language => {
  const { data } = await axios.get(
    // `https://ec2-3-71-35-71.eu-central-1.compute.amazonaws.com/api/posts/getArticles/?language=${language}&date=baarta`,
    `https://ec2-3-71-35-71.eu-central-1.compute.amazonaws.com/api/posts/getArticles/?language=English&date=baarta`,
    { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }
  )
  const newsData = JSON.parse(data.response)
  return newsData
}

export default function useNews(newsLanguage) {
  return useQuery(['post', newsLanguage], () => getPostByLanguage(newsLanguage), {
    enabled: !!newsLanguage,
  })
}
