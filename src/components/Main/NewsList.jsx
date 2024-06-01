import React from 'react'

import { ShortNews } from './ShortNews'

import { NewsListContainer } from '../../styles/NewsListStyles'

export const NewsList = ({ newsList }) => (
  <NewsListContainer>
    {newsList.map((article, index) => (
      <ShortNews
        key={article.source.id ? `${article.source.id}${index}` : index}
        article={article}
      />
    ))}
  </NewsListContainer>
)
