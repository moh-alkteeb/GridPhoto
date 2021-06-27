import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
    settings: {
        autoplaySpeed: 3000,
        boxShadow: 'none',
        disableKeyboardControls: false,
        disablePanzoom: false,
        disableWheelControls: false,
        hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(30, 30, 30, 0.9)',
        slideAnimationType: 'fade',
        slideSpringValues: [300, 50],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear',
        usingPreact: false
      },
      buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '10px',
        showAutoplayButton: true,
        showCloseButton: true,
        showDownloadButton: true,
        showFullscreenButton: true,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: true,
        size: '40px'
      },
      caption: {
        captionAlignment: 'start',
        captionColor: '#FFFFFF',
        captionContainerPadding: '0',
        captionFontFamily: 'inherit',
        captionFontSize: 'inherit',
        captionFontStyle: 'inherit',
        captionFontWeight: 'inherit',
        captionTextTransform: 'inherit',
        showCaption: true
      },
      thumbnails: {
        showThumbnails: true,
        thumbnailsAlignment: 'center',
        thumbnailsContainerBackgroundColor: 'transparent',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '0 1px',
        thumbnailsIconColor: '#ffffff',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px']
      },
      progressBar: {
        backgroundColor: '#f2f2f2',
        fillColor: '#000000',
        height: '3px',
        showProgressBar: true
      },
      translations: {
        autoplayText: 'Play',
        closeText: 'Close',
        downloadText: 'Download',
        fullscreenText: 'Full screen',
        nextText: 'Next',
        pauseText: 'Pause',
        previousText: 'Previous',
        thumbnailsText: 'Hide thumbnails',
        zoomOutText: 'Zoom Out'
      },
      icons: {
        autoplayIcon: null,
        closeIcon: null,
        downloadIcon: null,
        fullscreenIcon: null,
        nextIcon: null,
        pauseIcon: null,
        previousIcon: null,
        thumbnailsIcon: null,
        zoomOutIcon: null
      }
  };
  

 const UnsplashImage = (props) => {
  return (
    <>
     
          
    <div className="col-md-6 col-lg-4">
 
    <div className="portfolio-item mx-auto">
   
    <div className="portfolio-item-caption d-flex align-items-center justify-content-center  w-100">
            <div className="portfolio-item-caption-content text-center text-white">
         
              <br></br>
          
        {props.title}
            </div>
          </div>
        
          <SRLWrapper options={options} >
          <a href={props.url} > 
      <LazyLoadImage key={props.key} src={props.url} alt={props.alt_description} />
      </a>
      </SRLWrapper>
      </div>
     
       
      </div>
   
        
    </>
  )
}
export default UnsplashImage;