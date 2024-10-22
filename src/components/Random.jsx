const Random = (props) => {
    const max = props.max;
    const min = props.min;
    
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <div className="random-number">
            <p>Random value between {min} and {max}: {randomNumber}</p>
        </div>
    );
};

export default Random;
