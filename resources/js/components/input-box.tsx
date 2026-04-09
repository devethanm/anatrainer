import { useState } from 'react';
import { Input } from "@/components/ui/input"

type Props = {
    character: string;
    romaji: string;
    onCorrect: () => void;
    onError: () => void;
    streak: number;
    disabled?: boolean;
};

export default function InputBox({ character, romaji, onCorrect, onError, streak, disabled = false }: Props) {
    const [value, setValue] = useState('');
    const isError = value.length > 0 && !romaji.startsWith(value);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const v = e.target.value;
        if (v === romaji) {
            onCorrect();
            setValue('');
            return;
        }
        if (v.length > 0 && !romaji.startsWith(v)) {
            onError();
        }
        setValue(v);
    }

    return (
        <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: '#DEC3C3B0', borderColor: '#E5E0DA', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', gap: '28px', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', paddingBottom: '32px', paddingLeft: '40px', paddingRight: '40px', paddingTop: '48px', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
                <div style={{ boxSizing: 'border-box', color: '#1A1917', display: 'inline-block', fontFamily: '"NotoSans-SemiBold", "Noto Sans", system-ui, sans-serif', fontSize: '120px', fontWeight: 600, lineHeight: 'round(up, 100%, 1px)' }}>
                    {character}
                </div>
                <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                    <div style={{ backgroundColor: '#FAF9F7', borderColor: isError ? '#B42318' : '#E5E0DA', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', maxWidth: '280px', paddingBlock: '12px', paddingInline: '16px', width: '100%' }}>
                        <Input
                            id="input-field"
                            name="input-field"
                            value={value}
                            onChange={handleChange}
                            disabled={disabled}
                            autoFocus
                        />
                    </div>
                    <div style={{ boxSizing: 'border-box', color: '#B42318', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: 500, lineHeight: '18px', visibility: (isError || disabled) ? 'visible' : 'hidden' }}>
                        {disabled ? 'Please select kana to continue!' : `${character} = ${romaji}`}
                    </div>
                </div>
                <div style={{ alignItems: 'center', borderTopColor: '#F0EBE4', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', justifyContent: 'flex-end', paddingTop: '8px', width: '100%' }}>
                    <div style={{ boxSizing: 'border-box', color: '#6B6560', display: 'inline-block', flexShrink: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                        {streak}
                    </div>
                </div>
        </div>
    );
}
