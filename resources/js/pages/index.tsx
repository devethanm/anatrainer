import { Head } from '@inertiajs/react';
import Wordmark from '@/components/wordmark';
import InputBox from '@/components/input-box';
import HiraganaOptionsBox from '@/components/hiragana-options-box';
import KatakanaOptionsBox from '@/components/katakana-options-box';
import { CircleDivide, Divide } from 'lucide-react';
import { useState } from 'react';

export default function Index({character}: {character: string}) {
    let gap = 'gap-7';


    console.log(character)

    return (
        <>
            <Head title="anatrainer"/>
            <div className="bg-white w-full h-full flex flex-col items-center justify-center">
                <div id="header" className="flex pb-5">
                    <Wordmark/>
                </div>
                <div id="main" className={`flex flex-col items-center justify-center`}>
                    <div id="input-box">
                        <InputBox
                           character={character}
                        />
                    </div>
                    <div id="options" className={`flex flex-col lg:flex-row flex-nowrap min-w-screen p-10 justify-center ${gap}`}>
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