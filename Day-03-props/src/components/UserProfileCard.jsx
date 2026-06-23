function UserProfileCard({name,role,experience}){
    return(
        <div>
            <h2>{name}</h2>
            <p>Role : {role}</p>
            <p>Experience : {experience}</p>
        </div>
    );
}
export default UserProfileCard;