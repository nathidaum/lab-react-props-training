const CreditCard = (props) => {
const cardColor = props.bgColor;
const textColor = props.color;
const lastFourDigits = props.number.slice(-4);
const shownNumber = "•••• •••• •••• " + lastFourDigits

const institute = props.type;
    const logo = institute === "Visa"
        ? "./assets/visa.png"
        : "./assets/images/master-card.svg";

const divStyle = {
    backgroundColor: cardColor,
    color: textColor
}
    return (
    <section className="card" style={divStyle}>
        <img src={logo} alt={`${institute} logo`} />
        <p>{shownNumber}</p>
        <p>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p>
        <p>{props.owner}</p>
    </section>
)
};

export default CreditCard;