const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="card">
            <img src={picture} alt="Profile" className="profile-image"/>
            <div>
                <p><span>First name:</span> {firstName}<br></br>
                <span>Last name:</span> {lastName}<br></br>
                <span>Gender:</span> {gender}<br></br>
                <span>Height:</span> {height}<br></br>
                <span>Birth:</span> {birth}</p>
            </div>
        </div>
    )
}

export default IdCard;