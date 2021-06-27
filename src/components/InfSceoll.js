import React,{useState,useEffect} from 'react';
import UnsplashImage from './UnsplashImage';
import { Loader } from './Loader';
import axios from 'axios';
import  InfiniteScroll  from 'react-infinite-scroll-component';


function InfScroll() {

    const [images, setImage] = useState([]);

    useEffect(() => {
      fetchImages();
    }, [])
  
    const fetchImages = (count = 10) => {
      const apiRoot = "https://api.unsplash.com";
      const accessKey = process.env.REACT_APP_ACCESSKEY;
  
      axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        .then(res => {
          setImage([...images, ...res.data]);
        })
    }
    return (
        <div>
            <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
    
      </InfiniteScroll>
        </div>
    )
}

export default InfScroll;
