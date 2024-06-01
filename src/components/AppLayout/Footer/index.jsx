import React from 'react'

import { FooterContainer } from '../../../styles/FooterStyles'

export const Footer = () => <FooterContainer>{new Date().getFullYear()}</FooterContainer>
