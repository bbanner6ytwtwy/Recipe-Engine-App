import { MutatingDots } from 'react-loader-spinner'
import React, { useEffect, useState } from 'react';

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <>
    
    
    <div>
      {isLoading ? (
        <div className='loader'>
        <MutatingDots 
  height="120"
  width="120"
  color="#ffc94a"
  secondaryColor= '#ffc94a'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 /><h1 className='loader-text'>Loading... Please be Patient...</h1>
    </div> 
      ) : null}
    </div></>
  );
};

export default PageLoader;
