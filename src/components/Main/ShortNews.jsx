import React from 'react'
import { Link } from 'react-router-dom'

import {
  ShortNewsContainer,
  ShortNewsDescription,
  ShortNewsTitle,
} from '../../styles/ShortNewsStyles'

export const ShortNews = ({ article }) => (
  <Link to={`/story/${article.source.id}`} state={{ article: article }}>
    <ShortNewsContainer>
      <ShortNewsTitle>{article.title}</ShortNewsTitle>
      <ShortNewsDescription>{article.description}</ShortNewsDescription>
    </ShortNewsContainer>
  </Link>
)
