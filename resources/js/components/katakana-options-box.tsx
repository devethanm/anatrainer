/**
 * Katakana options box — compact column grid layout.
 * Columns = consonant groups, rows = vowel variants (a/i/u/e/o).
 */

import type { CheckedState } from '@radix-ui/react-checkbox';
import { Checkbox } from "@/components/ui/checkbox"
import { type KanaCol, katakanaGojuon, katakanaDakuten, katakanaYoon, groupId } from '@/data/kana';

type Props = {
    selectedGroups: Set<string>;
    onToggleGroup: (id: string) => void;
    onToggleSection: (ids: string[], checked: boolean) => void;
};

const CELL_H = 32;

function sectionCheckedState(ids: string[], selectedGroups: Set<string>): CheckedState {
    const count = ids.filter(id => selectedGroups.has(id)).length;
    if (count === 0) return false;
    if (count === ids.length) return true;
    return 'indeterminate';
}

function KanaGrid({ columns, prefix, selectedGroups, onToggleGroup, onToggleSection }: {
    columns: KanaCol[];
    prefix: string;
    selectedGroups: Set<string>;
    onToggleGroup: (id: string) => void;
    onToggleSection: (ids: string[], checked: boolean) => void;
}) {
    const allIds = columns.map(col => groupId(prefix as 'hiragana' | 'katakana', col));
    const selectAllState = sectionCheckedState(allIds, selectedGroups);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Checkbox
                    checked={selectAllState}
                    onCheckedChange={(v) => onToggleSection(allIds, v === true)}
                    className="border border-blue-200"
                />
                <span style={{ color: '#A09890', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Select all
                </span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
                {columns.map((col, ci) => {
                    const id = groupId(prefix as 'hiragana' | 'katakana', col);
                    return (
                        <div key={ci} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', width: '32px' }}>
                            <Checkbox
                                id={id}
                                name={id}
                                checked={selectedGroups.has(id)}
                                onCheckedChange={() => onToggleGroup(id)}
                                className="border border-blue-200"
                            />
                            {col.chars.map((entry, ri) =>
                                entry ? (
                                    <div key={ri} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px', height: `${CELL_H}px` }}>
                                        <div style={{ color: '#1A1917', fontFamily: '"Noto Sans", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, lineHeight: '20px' }}>
                                            {entry[0]}
                                        </div>
                                        <div style={{ color: '#6B6560', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '9px', fontWeight: 500, lineHeight: '11px' }}>
                                            {entry[1]}
                                        </div>
                                    </div>
                                ) : (
                                    <div key={ri} style={{ height: `${CELL_H}px`, width: '100%' }} />
                                )
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const sectionLabelStyle: React.CSSProperties = {
    color: '#A09890',
    fontFamily: '"Inter", system-ui, sans-serif',
    fontSize: '9px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
};

export default function KatakanaOptionsBox({ selectedGroups, onToggleGroup, onToggleSection }: Props) {
    return (
        <div style={{ backgroundColor: '#FFFFFF', borderColor: '#A8D5FF', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '10px', MozOsxFontSmoothing: 'grayscale', paddingBlock: '12px', paddingInline: '16px', WebkitFontSmoothing: 'antialiased' }}>
            <div style={{ color: '#6B6560', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px', textTransform: 'uppercase' }}>
                Katakana · カタカナ
            </div>
            <KanaGrid columns={katakanaGojuon} prefix="katakana" selectedGroups={selectedGroups} onToggleGroup={onToggleGroup} onToggleSection={onToggleSection} />
            <div style={sectionLabelStyle}>Dakuten</div>
            <KanaGrid columns={katakanaDakuten} prefix="katakana" selectedGroups={selectedGroups} onToggleGroup={onToggleGroup} onToggleSection={onToggleSection} />
            <div style={sectionLabelStyle}>Combinations</div>
            <KanaGrid columns={katakanaYoon} prefix="katakana" selectedGroups={selectedGroups} onToggleGroup={onToggleGroup} onToggleSection={onToggleSection} />
        </div>
    );
}
