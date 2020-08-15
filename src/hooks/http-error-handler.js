import { useState, useEffect, } from 'react';

export default htttpClient => {

    const [error, setError] = useState(null);

    const reqInterceptor = htttpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    });

    const resInterceptor = htttpClient.interceptors.response.use(req => req, err => {
        setError(err);
    });

    useEffect(() => {
        return () => {
            htttpClient.interceptors.request.eject(reqInterceptor);
            htttpClient.interceptors.response.eject(resInterceptor);
        };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [error, errorConfirmedHandler];
};