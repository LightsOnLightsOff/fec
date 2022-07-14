import React, {useState, useEffect} from 'react';

import InstagramButton from '../Overview/SocialMediaButton/InstagramButton.jsx';
import InstagramModal from '../Overview/SocialMediaModal/InstagramModal.jsx';
import FacebookButton from '../Overview/SocialMediaButton/FacebookButton.jsx';
import FacebookModal from '../Overview/SocialMediaModal/FacebookModal.jsx';
import TwitterButton from '../Overview/SocialMediaButton/TwitterButton.jsx';
import TwitterModal from '../Overview/SocialMediaModal/TwitterModal.jsx';
import PinterestButton from '../Overview/SocialMediaButton/PinterestButton.jsx';
import PinterestModal from '../Overview/SocialMediaModal/PinterestModal.jsx';


function ShareSocialMedia (props) {

  const [isOpenInstagram, setIsOpenInstagram] = useState (false);
  const [isOpenFacebook, setIsOpenFacebook] = useState (false);
  const [isOpenTwitter, setIsOpenTwitter] = useState (false);
  const [isOpenPinterest, setIsOpenPinterest] = useState (false);
  const [toLineInstagram, setToLineInstqgram] = useState ('');

  return (
    <div className = 'display-media'>
      <div>
        <InstagramButton onOpen = {() => {if (!isOpenFacebook && !isOpenPinterest && !isOpenTwitter) {setIsOpenInstagram(true)}}}/>
        <InstagramModal open = {isOpenInstagram} onClose = {() => setIsOpenInstagram(false)}></InstagramModal>
        <FacebookButton onOpen = {() => {if (!isOpenInstagram && !isOpenPinterest && !isOpenTwitter) {setIsOpenFacebook(true)}}}/>
        <FacebookModal open = {isOpenFacebook} onClose = {() => setIsOpenFacebook(false)}>Facebook Modal</FacebookModal>
        <TwitterButton onOpen = {() => {if (!isOpenFacebook && !isOpenPinterest && !isOpenInstagram) {setIsOpenTwitter(true)}}}/>
        <TwitterModal open = {isOpenTwitter} onClose = {() => setIsOpenTwitter(false)}>Twitter Modal</TwitterModal>
        <PinterestButton onOpen = {() => {if (!isOpenFacebook && !isOpenInstagram && !isOpenTwitter) {setIsOpenPinterest(true)}}}/>
        <PinterestModal open = {isOpenPinterest} onClose = {() => setIsOpenPinterest(false)}>Pinterest Modal</PinterestModal>
      </div>
    </div>
  );
}

export default ShareSocialMedia;