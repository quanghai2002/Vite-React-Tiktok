import { forwardRef, useState } from 'react';
import images from '../../../src/assets/images/no-image.png';
import style from './Image.module.scss';
import clsx from 'clsx';

function Image({ className, src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images);
    };

    return (
        <img
            className={clsx(className, style.wrapper)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
