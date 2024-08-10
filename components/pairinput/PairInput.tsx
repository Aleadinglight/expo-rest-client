import React, { useState } from 'react';

interface Pair {
    key: string;
    value: string;
}

const PairInput: React.FC = () => {
    const [pairs, setPairs] = useState<Pair[]>([{ key: '', value: '' }]);

    const handleKeyChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newPairs = [...pairs];
        newPairs[index].key = event.target.value;
        setPairs(newPairs);
    };

    const handleValueChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newPairs = [...pairs];
        newPairs[index].value = event.target.value;
        setPairs(newPairs);
    };

    const addPair = () => {
        setPairs([...pairs, { key: '', value: '' }]);
    };

    const getAllPairs = () => {
        return pairs;
    };

    return (
        <div>
            {pairs.map((pair, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={pair.key}
                        onChange={(event) => handleKeyChange(index, event)}
                        placeholder="Key"
                    />
                    <input
                        type="text"
                        value={pair.value}
                        onChange={(event) => handleValueChange(index, event)}
                        placeholder="Value"
                    />
                </div>
            ))}
            <button onClick={addPair}>+</button>
        </div>
    );
};

export default PairInput;