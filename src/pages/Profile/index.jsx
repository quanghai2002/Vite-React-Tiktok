import { useParams } from 'react-router-dom';

function Profile() {
    let paramNickname = useParams();

    return <h2>Profile {paramNickname.nickname}</h2>;
}

export default Profile;
