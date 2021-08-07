import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span> 
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed by{' '}
          <a href="https://github.com/nguyen1312" target="_blank" rel="noopener noreferrer">
            Trần Hoàng Nguyên - 1712396 & Nguyễn Bảo Phúc - 1712674
          </a>
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
