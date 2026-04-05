import { Head } from '@inertiajs/react';
import Wordmark from '@/components/wordmark';
import { useEffect } from 'react';

export default function Index() {
    // set background to #FFFFFF
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    return (
        <>
            <Head title="anatrainer" />
            <h1>hi</h1>
            <Wordmark />
        </>
    );
}