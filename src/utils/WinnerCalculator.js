const winningMatrix = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[2,6],[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]
};

export const calculateWinner = (cellValues, numberOfTurnsLeft, cellIndex) => {
    const winningRanges = winningMatrix[cellIndex];

    for(let i = 0; i<winningRanges.length; i++) {
        const currentValue = cellValues[cellIndex];
        const firstOption = cellValues[winningRanges[i][0]];
        const secondOption = cellValues[winningRanges[i][1]];

        if (currentValue === firstOption && firstOption === secondOption) {
            return {
                hasResult: true,
                winner: currentValue,
                winningCombination: [cellIndex, winningRanges[i][0], winningRanges[i][1] ]
            }
        }
    }

    if (numberOfTurnsLeft === 0) {
        return {
            hasResult: true,
            winner: undefined,
            winningcombination: []
        }
    }

    return {
     hasResult: false,
     winner: undefined,
     winningcombination: []
    };
};
