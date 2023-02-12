import { useQuery } from 'react-query'
import axios from 'axios'

const getPostByLanguage = async language => {
  let headersList = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const { data } = await axios
    .get(
      `https://ec2-3-71-35-71.eu-central-1.compute.amazonaws.com/api/posts/getArticles/?language=${language}&date=baarta`,
      {
        headers: headersList,
      }
    )
    .catch(function (error) {
      // handle error
      console.log(error)
    })
  const newsData = JSON.parse(data.response)
  return newsData
}

export default function useNews(newsLanguage) {
  return useQuery(['post', newsLanguage], () => getPostByLanguage(newsLanguage), {
    enabled: !!newsLanguage,
  })
}
