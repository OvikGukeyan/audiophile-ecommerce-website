import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={1174}
            height={560}
            viewBox="0 0 1174 560"
            backgroundColor="#ededee"
            foregroundColor="#e0e0e0"
        >
            <rect x="17" y="0" rx="8" ry="8" width="540" height="560" />
            <rect x="700" y="110" rx="8" ry="8" width="200" height="20" />
            <rect x="700" y="140" rx="8" ry="8" width="180" height="88" />
            <rect x="700" y="245" rx="8" ry="8" width="445" height="100" />
            <rect x="700" y="375" rx="8" ry="8" width="160" height="50" />


        </ContentLoader>
    )
}

export default Skeleton;