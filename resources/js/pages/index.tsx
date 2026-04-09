import { Head } from '@inertiajs/react';
import { useState, useMemo, useEffect } from 'react';
import Wordmark from '@/components/wordmark';
import InputBox from '@/components/input-box';
import HiraganaOptionsBox from '@/components/hiragana-options-box';
import KatakanaOptionsBox from '@/components/katakana-options-box';
import {
    hiraganaGojuon, hiraganaDakuten, hiraganaYoon,
    katakanaGojuon, katakanaDakuten, katakanaYoon,
    groupId,
} from '@/data/kana';

function randomEntry(pool: [string, string][], avoid?: [string, string]): [string, string] {
    if (pool.length === 1) return pool[0];
    let next: [string, string];
    do {
        next = pool[Math.floor(Math.random() * pool.length)];
    } while (avoid && next[0] === avoid[0]);
    return next;
}

export default function Index() {
    const [selectedGroups, setSelectedGroups] = useState<Set<string>>(() =>
        new Set(hiraganaGojuon.map(col => groupId('hiragana', col)))
    );

    const characterPool = useMemo(() => {
        const pool: [string, string][] = [];
        const sections: ['hiragana' | 'katakana', typeof hiraganaGojuon][] = [
            ['hiragana', hiraganaGojuon],
            ['hiragana', hiraganaDakuten],
            ['hiragana', hiraganaYoon],
            ['katakana', katakanaGojuon],
            ['katakana', katakanaDakuten],
            ['katakana', katakanaYoon],
        ];
        for (const [script, section] of sections) {
            for (const col of section) {
                if (selectedGroups.has(groupId(script, col))) {
                    for (const entry of col.chars) {
                        if (entry) pool.push(entry);
                    }
                }
            }
        }
        return pool;
    }, [selectedGroups]);

    const [currentEntry, setCurrentEntry] = useState<[string, string]>(() => {
        const initial = hiraganaGojuon.flatMap(col =>
            col.chars.filter((c): c is [string, string] => c !== null)
        );
        return randomEntry(initial);
    });

    const [streak, setStreak] = useState(0);

    // When pool changes, re-pick if the current character is no longer in it
    useEffect(() => {
        if (characterPool.length === 0) return;
        setCurrentEntry(prev => {
            const stillInPool = characterPool.some(([k]) => k === prev[0]);
            return stillInPool ? prev : randomEntry(characterPool, prev);
        });
    }, [characterPool]);

    function handleCorrect() {
        if (characterPool.length === 0) return;
        setStreak(s => s + 1);
        setCurrentEntry(prev => randomEntry(characterPool, prev));
    }

    function handleError() {
        setStreak(0);
    }

    function toggleGroup(id: string) {
        setSelectedGroups(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }

    function toggleSection(ids: string[], checked: boolean) {
        setSelectedGroups(prev => {
            const next = new Set(prev);
            ids.forEach(id => checked ? next.add(id) : next.delete(id));
            return next;
        });
    }

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
                            character={currentEntry[0]}
                            romaji={currentEntry[1]}
                            onCorrect={handleCorrect}
                            onError={handleError}
                            streak={streak}
                            disabled={characterPool.length === 0}
                        />
                    </div>
                    <div id="options" className={`flex flex-col lg:flex-row flex-nowrap min-w-screen p-10 justify-center gap-7`}>
                        <div id="options-hiragana" className="justify-items-center basis-1/2">
                            <HiraganaOptionsBox
                                selectedGroups={selectedGroups}
                                onToggleGroup={toggleGroup}
                                onToggleSection={toggleSection}
                            />
                        </div>
                        <div id="options-katakana" className="justify-items-center basis-1/2">
                            <KatakanaOptionsBox
                                selectedGroups={selectedGroups}
                                onToggleGroup={toggleGroup}
                                onToggleSection={toggleSection}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
