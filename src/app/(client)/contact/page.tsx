import React from 'react';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trang liên hệ | My Restaurant',
    description:
        'Hãy liên hệ với nhóm của chúng tôi nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ nào.',
};

const page = () => {
    return <ContactClient />;
};

export default page;
