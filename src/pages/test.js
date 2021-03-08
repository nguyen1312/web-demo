import UploadImg from '../components/VQATest/UploadImg'
import React from 'react';
import { Helmet } from 'react-helmet';
export default () => {
    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{'Visual Question Answering'}</title>
            <html lang={'en'} />
            <meta name="description" content={'Visual Question Answering'} />
          </Helmet>
          <UploadImg/>
        </>
      );
}