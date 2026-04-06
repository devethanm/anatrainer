/**
 * Katakana options box — compact column grid layout.
 * Columns = consonant groups, rows = vowel variants (a/i/u/e/o).
 */

type KanaCol = {
    label: string;
    chars: ([string, string] | null)[];
};

const gojuon: KanaCol[] = [
    { label: '',  chars: [['ア','a'],  ['イ','i'],  ['ウ','u'],  ['エ','e'],  ['オ','o']] },
    { label: 'k', chars: [['カ','ka'], ['キ','ki'], ['ク','ku'], ['ケ','ke'], ['コ','ko']] },
    { label: 's', chars: [['サ','sa'], ['シ','shi'], ['ス','su'], ['セ','se'], ['ソ','so']] },
    { label: 't', chars: [['タ','ta'], ['チ','chi'], ['ツ','tsu'],['テ','te'], ['ト','to']] },
    { label: 'n', chars: [['ナ','na'], ['ニ','ni'], ['ヌ','nu'], ['ネ','ne'], ['ノ','no']] },
    { label: 'h', chars: [['ハ','ha'], ['ヒ','hi'], ['フ','fu'], ['ヘ','he'], ['ホ','ho']] },
    { label: 'm', chars: [['マ','ma'], ['ミ','mi'], ['ム','mu'], ['メ','me'], ['モ','mo']] },
    { label: 'y', chars: [['ヤ','ya'], null,         ['ユ','yu'], null,         ['ヨ','yo']] },
    { label: 'r', chars: [['ラ','ra'], ['リ','ri'], ['ル','ru'], ['レ','re'], ['ロ','ro']] },
    { label: 'w', chars: [['ワ','wa'], null,         null,         null,         ['ヲ','wo']] },
    { label: 'n', chars: [['ン','n'],  null,         null,         null,         null        ] },
];

const dakuten: KanaCol[] = [
    { label: 'g', chars: [['ガ','ga'], ['ギ','gi'], ['グ','gu'], ['ゲ','ge'], ['ゴ','go']] },
    { label: 'z', chars: [['ザ','za'], ['ジ','ji'], ['ズ','zu'], ['ゼ','ze'], ['ゾ','zo']] },
    { label: 'd', chars: [['ダ','da'], ['ヂ','di'], ['ヅ','du'], ['デ','de'], ['ド','do']] },
    { label: 'b', chars: [['バ','ba'], ['ビ','bi'], ['ブ','bu'], ['ベ','be'], ['ボ','bo']] },
    { label: 'p', chars: [['パ','pa'], ['ピ','pi'], ['プ','pu'], ['ペ','pe'], ['ポ','po']] },
];

const yoon: KanaCol[] = [
    { label: 'ky', chars: [['キャ','kya'], ['キュ','kyu'], ['キョ','kyo']] },
    { label: 'sh', chars: [['シャ','sha'], ['シュ','shu'], ['ショ','sho']] },
    { label: 'ch', chars: [['チャ','cha'], ['チュ','chu'], ['チョ','cho']] },
    { label: 'ny', chars: [['ニャ','nya'], ['ニュ','nyu'], ['ニョ','nyo']] },
    { label: 'hy', chars: [['ヒャ','hya'], ['ヒュ','hyu'], ['ヒョ','hyo']] },
    { label: 'my', chars: [['ミャ','mya'], ['ミュ','myu'], ['ミョ','myo']] },
    { label: 'ry', chars: [['リャ','rya'], ['リュ','ryu'], ['リョ','ryo']] },
    { label: 'gy', chars: [['ギャ','gya'], ['ギュ','gyu'], ['ギョ','gyo']] },
    { label: 'j',  chars: [['ジャ','ja'],  ['ジュ','ju'],  ['ジョ','jo']]  },
    { label: 'by', chars: [['ビャ','bya'], ['ビュ','byu'], ['ビョ','byo']] },
    { label: 'py', chars: [['ピャ','pya'], ['ピュ','pyu'], ['ピョ','pyo']] },
];

const CELL_H = 32;

function KanaGrid({ columns }: { columns: KanaCol[] }) {
    return (
        <div style={{ display: 'flex', gap: '6px' }}>
            {columns.map((col, ci) => (
                <div key={ci} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', width: '32px' }}>
                    <div style={{ border: '1px solid #D4CFC7', borderRadius: '3px', flexShrink: 0, height: '10px', width: '10px' }} />
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
            ))}
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

export default function KatakanaOptionsBox() {
    return (
        <div style={{ backgroundColor: '#FFFFFF', borderColor: '#18F333', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '10px', MozOsxFontSmoothing: 'grayscale', paddingBlock: '12px', paddingInline: '16px', WebkitFontSmoothing: 'antialiased' }}>
            <div style={{ color: '#6B6560', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px', textTransform: 'uppercase' }}>
                Katakana · カタカナ
            </div>
            <KanaGrid columns={gojuon} />
            <div style={sectionLabelStyle}>Dakuten</div>
            <KanaGrid columns={dakuten} />
            <div style={sectionLabelStyle}>Combinations</div>
            <KanaGrid columns={yoon} />
        </div>
    );
}
