import React, { useEffect, useState } from 'react';

const useDeviceClass = () => {
    const [deviceClass, setDeviceClass] = useState('');

    const calculateDeviceClass = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 600) {
            setDeviceClass('smartphone');
        } else if (windowWidth < 900) {
            setDeviceClass('tablet');
        } else if (windowWidth >= 900) {
            setDeviceClass('desktop');
        }
    }

    useEffect(() => {
        calculateDeviceClass();
        window.addEventListener('resize', calculateDeviceClass);

        return () => {
            window.removeEventListener('resize', calculateDeviceClass);
        }
    }, []);

    return deviceClass;
}

export default useDeviceClass;