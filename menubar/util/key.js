const keyCodes = {
    'Left Shift': 0,
    'Right Shift': 1,
    'Left Control': 2,
    'Right Control': 3,
    'Left Alt': 4,
    'Right Alt': 5,
    'Left Meta': 6,
    'Right Meta': 7,
    'Backspace': 8,
    'Tab': 9,
    'Enter': 13,
    'Up': 14,
    'Down': 15,
    'Left': 16,
    'Right': 17,
    'Escape': 27,
    'Space': 32,
    'Comma': 44,
    'Minus': 45,
    'Period': 46,
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    // 'Semicolon': 59,
    // 'Equals': 61,
    'A': 65,
    'B': 66,
    'C': 67,
    'D': 68,
    'E': 69,
    'F': 70,
    'G': 71,
    'H': 72,
    'I': 73,
    'J': 74,
    'K': 75,
    'L': 76,
    'M': 77,
    'N': 78,
    'O': 79,
    'P': 80,
    'Q': 81,
    'R': 82,
    'S': 83,
    'T': 84,
    'U': 85,
    'V': 86,
    'W': 87,
    'X': 88,
    'Y': 89,
    'Z': 90,
    'Open Bracket': 91,
    // 'Back Slash': 92,
    'Close Bracket': 93,
    'Back Quote': 96,
    // 'F1': 97,
    // 'F2': 98,
    // 'F3': 99,
    // 'F4': 100,
    // 'F5': 101,
    // 'F6': 102,
    // 'F7': 103,
    // 'F8': 104,
    // 'F9': 105,
    // 'F10': 106,
    // 'F11': 107,
    // 'F12': 108,
    'Delete': 127,
}

function getKeyCode(data) {
    return keyCodes[data] || null
}

module.exports = {
    getKeyCode: getKeyCode,
    // getKeyCode: function(data) {return data} 
}