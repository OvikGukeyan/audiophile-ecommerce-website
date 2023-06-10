import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';




const Skeleton: React.FC = () => {
    const [loader, setLoader] = useState<JSX.Element>()


    useEffect(() => {
        const handleResize = () => {
          const screenSize = window.innerWidth;
          let newLoader;
            console.log(screenSize)
          if (screenSize <= 700) {
            newLoader = <ContentLoader 
            speed={2}
            width={330}
            height={700}
            viewBox="0 0 330 700"
            backgroundColor="#ededee"
            foregroundColor="#e0e0e0"
          >
            <rect x="0" y="0" rx="6" ry="6" width="330" height="330" /> 
            <rect x="650" y="273" rx="0" ry="0" width="445" height="343" /> 
            <rect x="65" y="390" rx="6" ry="6" width="200" height="50" /> 
            <rect x="15" y="480" rx="6" ry="6" width="300" height="70" /> 
            <rect x="85" y="580" rx="6" ry="6" width="160" height="50" />
          </ContentLoader>
          } else if (screenSize <= 1150) {
            newLoader =   <ContentLoader 
            speed={2}
            width={690}
            height={700}
            viewBox="0 0 690 700"
            backgroundColor="#ededee"
            foregroundColor="#e0e0e0"
          >
            <rect x="0" y="0" rx="6" ry="6" width="690" height="353" /> 
            <rect x="175" y="400" rx="6" ry="6" width="340" height="40" /> 
            <rect x="120" y="480" rx="6" ry="6" width="450" height="70" /> 
            <rect x="265" y="600" rx="6" ry="6" width="160" height="50" />
          </ContentLoader>
          } else {
            newLoader = <ContentLoader
            speed={2}
            width={1174}
            height={560}
            viewBox="0 0 1174 560"
            backgroundColor="#ededee"
            foregroundColor="#e0e0e0"
        >
            <rect x="0" y="0" rx="8" ry="8" width="540" height="560" />
            <rect x="700" y="110" rx="8" ry="8" width="200" height="20" />
            <rect x="700" y="140" rx="8" ry="8" width="180" height="88" />
            <rect x="700" y="245" rx="8" ry="8" width="445" height="100" />
            <rect x="700" y="375" rx="8" ry="8" width="160" height="50" />
        </ContentLoader> 
          }
          setLoader(newLoader);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>{loader}</>
    )
}

export default Skeleton;