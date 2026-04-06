import { Head } from '@inertiajs/react';
import Wordmark from '@/components/wordmark';
import InputBox from '@/components/input-box';
import HiraganaOptionsBox from '@/components/hiragana-options-box';
import KatakanaOptionsBox from '@/components/katakana-options-box';

export default function Index() {
    let gap = 'gap-7';
    return (
        <>
            <Head title="anatrainer"/>
            <div className="bg-white w-full h-full flex flex-col items-center justify-center">
                <div id="header">
                    <Wordmark />
                </div>
                <div id="main" className={`flex flex-col items-center justify-center ${gap}`}>
                    <div id="input-box">
                        <InputBox />
                    </div>
                    <div id="options" className={`flex flex-row flex-nowrap min-w-screen p-10 justify-center ${gap}`}>
                        <div id="options-box" className="justify-items-center basis-1/2">
                            <HiraganaOptionsBox />
                        </div>
                        <div id="options-box" className="justify-items-center basis-1/2">
                            <KatakanaOptionsBox />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}