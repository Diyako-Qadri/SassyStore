'use client';
import HeaderImg from '../../../public/headerlogo4.png';
import Image from 'next/image';
import { SlHandbag } from 'react-icons/sl';
import { FcLike } from 'react-icons/fc';
import { IoPersonOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import CardItems from '../CardItems';
import { useState, useEffect } from 'react';

const Header = () => {
  const [show, setShow] = useState<Boolean>();
  const handleScroll = () => {
    if (show) {
      setShow(!show);
    }
  };

  useEffect(() => {
    if (show) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <Image
            className="header__container--logo"
            src={HeaderImg}
            alt="logo"
          />
        </a>
        <div className="header__options">
          <a className="header__options__btn" href="#">
            <CiSearch />
          </a>
          <a className="header__options__btn" href="#">
            <FcLike />
          </a>
          <a className="header__options__btn" href="#">
            <button
              className="header__options__btn"
              onClick={() => setShow(!show)}
            >
              <SlHandbag />
            </button>
            {show && <CardItems />}
          </a>
          <a className="header__options__btn" href="#">
            <IoPersonOutline />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
