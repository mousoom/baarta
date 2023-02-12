import { useQuery } from 'react-query'
import axios from 'axios'

const getPostByLanguage = async language => {
  let headersList = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const { data } = await axios.get(
    `http://ec2-3-71-35-71.eu-central-1.compute.amazonaws.com/api/posts/getArticles/?language=${language}&date=baarta`,
    {
      headers: headersList,
    }
  )

  const newsData = JSON.parse(data.body)
  return newsData
}

export default function useNews(newsLanguage) {
  return useQuery(['post', newsLanguage], () => getPostByLanguage(newsLanguage), {
    enabled: !!newsLanguage,
  })
}
