/**
 * Hiragana options box — compact column grid layout.
 * Columns = consonant groups, rows = vowel variants (a/i/u/e/o).
 */

type KanaCol = {
    label: string;
    chars: ([string, string] | null)[];
};

const gojuon: KanaCol[] = [
    { label: '',  chars: [['あ','a'],  ['い','i'],  ['う','u'],  ['え','e'],  ['お','o']] },
    { label: 'k', chars: [['か','ka'], ['き','ki'], ['く','ku'], ['け','ke'], ['こ','ko']] },
    { label: 's', chars: [['さ','sa'], ['し','shi'], ['す','su'], ['せ','se'], ['そ','so']] },
    { label: 't', chars: [['た','ta'], ['ち','chi'], ['つ','tsu'],['て','te'], ['と','to']] },
    { label: 'n', chars: [['な','na'], ['に','ni'], ['ぬ','nu'], ['ね','ne'], ['の','no']] },
    { label: 'h', chars: [['は','ha'], ['ひ','hi'], ['ふ','fu'], ['へ','he'], ['ほ','ho']] },
    { label: 'm', chars: [['ま','ma'], ['み','mi'], ['む','mu'], ['め','me'], ['も','mo']] },
    { label: 'y', chars: [['や','ya'], null,         ['ゆ','yu'], null,         ['よ','yo']] },
    { label: 'r', chars: [['ら','ra'], ['り','ri'], ['る','ru'], ['れ','re'], ['ろ','ro']] },
    { label: 'w', chars: [['わ','wa'], null,         null,         null,         ['を','wo']] },
    { label: 'n', chars: [['ん','n'],  null,         null,         null,         null        ] },
];

const dakuten: KanaCol[] = [
    { label: 'g', chars: [['が','ga'], ['ぎ','gi'], ['ぐ','gu'], ['げ','ge'], ['ご','go']] },
    { label: 'z', chars: [['ざ','za'], ['じ','ji'], ['ず','zu'], ['ぜ','ze'], ['ぞ','zo']] },
    { label: 'd', chars: [['だ','da'], ['ぢ','di'], ['づ','du'], ['で','de'], ['ど','do']] },
    { label: 'b', chars: [['ば','ba'], ['び','bi'], ['ぶ','bu'], ['べ','be'], ['ぼ','bo']] },
    { label: 'p', chars: [['ぱ','pa'], ['ぴ','pi'], ['ぷ','pu'], ['ぺ','pe'], ['ぽ','po']] },
];

const yoon: KanaCol[] = [
    { label: 'ky', chars: [['きゃ','kya'], ['きゅ','kyu'], ['きょ','kyo']] },
    { label: 'sh', chars: [['しゃ','sha'], ['しゅ','shu'], ['しょ','sho']] },
    { label: 'ch', chars: [['ちゃ','cha'], ['ちゅ','chu'], ['ちょ','cho']] },
    { label: 'ny', chars: [['にゃ','nya'], ['にゅ','nyu'], ['にょ','nyo']] },
    { label: 'hy', chars: [['ひゃ','hya'], ['ひゅ','hyu'], ['ひょ','hyo']] },
    { label: 'my', chars: [['みゃ','mya'], ['みゅ','myu'], ['みょ','myo']] },
    { label: 'ry', chars: [['りゃ','rya'], ['りゅ','ryu'], ['りょ','ryo']] },
    { label: 'gy', chars: [['ぎゃ','gya'], ['ぎゅ','gyu'], ['ぎょ','gyo']] },
    { label: 'j',  chars: [['じゃ','ja'],  ['じゅ','ju'],  ['じょ','jo']]  },
    { label: 'by', chars: [['びゃ','bya'], ['びゅ','byu'], ['びょ','byo']] },
    { label: 'py', chars: [['ぴゃ','pya'], ['ぴゅ','pyu'], ['ぴょ','pyo']] },
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

export default function HiraganaOptionsBox() {
    return (
        <div style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DE', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', gap: '10px', MozOsxFontSmoothing: 'grayscale', paddingBlock: '12px', paddingInline: '16px', WebkitFontSmoothing: 'antialiased' }}>
            <div style={{ color: '#6B6560', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px', textTransform: 'uppercase' }}>
                Hiragana · ひらがな
            </div>
            <KanaGrid columns={gojuon} />
            <div style={sectionLabelStyle}>Dakuten</div>
            <KanaGrid columns={dakuten} />
            <div style={sectionLabelStyle}>Combinations</div>
            <KanaGrid columns={yoon} />
        </div>
    );
}
