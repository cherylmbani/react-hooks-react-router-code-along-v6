import {Link} from "react-router-dom"

function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <p>
          <Link to={`/profile/${user.id}`}>View Profile </Link>
        </p>
    </article>
  );
};

export default UserCard;