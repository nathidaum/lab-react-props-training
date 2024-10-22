const BoxColor = (props) => {
    const rgbToHex = (r, g, b) => {
        const toHex = (input) => {
            const hex = input.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    };

    return (
        <div className="color-box" style={divStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    );
};

export default BoxColor;
