export type KanaCol = {
    label: string;
    chars: ([string, string] | null)[];
};

export const hiraganaGojuon: KanaCol[] = [
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

export const hiraganaDakuten: KanaCol[] = [
    { label: 'g', chars: [['が','ga'], ['ぎ','gi'], ['ぐ','gu'], ['げ','ge'], ['ご','go']] },
    { label: 'z', chars: [['ざ','za'], ['じ','ji'], ['ず','zu'], ['ぜ','ze'], ['ぞ','zo']] },
    { label: 'd', chars: [['だ','da'], ['ぢ','di'], ['づ','du'], ['で','de'], ['ど','do']] },
    { label: 'b', chars: [['ば','ba'], ['び','bi'], ['ぶ','bu'], ['べ','be'], ['ぼ','bo']] },
    { label: 'p', chars: [['ぱ','pa'], ['ぴ','pi'], ['ぷ','pu'], ['ぺ','pe'], ['ぽ','po']] },
];

export const hiraganaYoon: KanaCol[] = [
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

export const katakanaGojuon: KanaCol[] = [
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

export const katakanaDakuten: KanaCol[] = [
    { label: 'g', chars: [['ガ','ga'], ['ギ','gi'], ['グ','gu'], ['ゲ','ge'], ['ゴ','go']] },
    { label: 'z', chars: [['ザ','za'], ['ジ','ji'], ['ズ','zu'], ['ゼ','ze'], ['ゾ','zo']] },
    { label: 'd', chars: [['ダ','da'], ['ヂ','di'], ['ヅ','du'], ['デ','de'], ['ド','do']] },
    { label: 'b', chars: [['バ','ba'], ['ビ','bi'], ['ブ','bu'], ['ベ','be'], ['ボ','bo']] },
    { label: 'p', chars: [['パ','pa'], ['ピ','pi'], ['プ','pu'], ['ペ','pe'], ['ポ','po']] },
];

export const katakanaYoon: KanaCol[] = [
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

export function groupId(script: 'hiragana' | 'katakana', col: KanaCol): string {
    const romaji = col.chars.find(c => c !== null)?.[1] ?? col.label;
    return `${script}-${romaji}`;
}
