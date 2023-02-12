import { useQuery } from 'react-query'
import axios from 'axios'

const getPostByLanguage = async language => {
  const { data } = await axios.get(
    `http://ec2-3-71-35-71.eu-central-1.compute.amazonaws.com/api/posts/getArticles/?language=${language}&date=baarta`,
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  )
  const newsData = JSON.parse(data.response)
  return newsData
}

export default function useNews(newsLanguage) {
  return useQuery(['post', newsLanguage], () => getPostByLanguage(newsLanguage), {
    enabled: !!newsLanguage,
  })
}
