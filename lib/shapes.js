function shapes(data) {
    if (data.fontFamily == "Georgia"){
        var fontFamily = "Georia, 'Serif'";
    } else if (data.fontFamily == "Gill Sans"){
        var fontFamily = "Gill Sans, 'sans-serif'";
    } else if (data.fontFamily == "Arial"){
        var fontFamily = "Arial, 'sans-serif'";
    } else if (data.fontFamily == "Courier New"){
        var fontFamily = "Courier New, 'Monospace'";
    } else if (data.fontFamily == "Copperplate"){
        var fontFamily = "Copperplate, 'Fantasy'";
    };

    if(data.border == "yes"){
        var borderStyle = `${data.tColor}`;
    } else var borderStyle = "none"


    if (data.shape == "circle"){
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="90" fill="${data.sColor}" stroke="${borderStyle}" stroke-width="4px"></circle>
    <text x="150" y="125" font-size="60" text-anchor="middle" font-family="${fontFamily}" fill="${data.tColor}">${data.text}</text>
    </svg>
    `
    } else if (data.shape == "square"){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="40" y="10" width="170" height="170" fill="${data.sColor}" stroke="${borderStyle}" stroke-width="4px"></rect>
        <text x="125" y="120" font-size="60" text-anchor="middle" font-family="${fontFamily}" fill="${data.tColor}">${data.text}</text>
        </svg>
        `
    } else if (data.shape == "triangle"){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 10 L15 190 L280 190 Z" fill="${data.sColor}" stroke="${borderStyle}" stroke-width="4px"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" font-family="${fontFamily}" fill="${data.tColor}">${data.text}</text>
        </svg>
        `
    } 
};

module.exports = shapes;
