import { useState } from 'react';

import Router from 'next/router';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"
import NProgress from 'nprogress';

import React from 'react'

import '.././node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
			<footer className="bg-secondary text-center ">

						<div className="">
							<FaFacebook className="" />
							<FaTwitter className="" />
							<FaLinkedin className="" />
							<FaYoutube className="" />
						</div>
        </footer>
        <style jsx>{`
        footer{
          height:30px;
        }
      `}</style>
		</>
  );
};

export default Footer;
