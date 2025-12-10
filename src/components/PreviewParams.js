import React from 'react';
import { useParams } from 'react-router-dom';

const PreviewParams = () => {
    const { templateId } = useParams();
    return <div>Preview for Template: {templateId}</div>;
};
export default PreviewParams;
