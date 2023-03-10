import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits, baseImgUrl } from "API";
import { List, Item, Profile } from './Cast.styled';

const placeHolder = `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`;
const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchMovieCredits(movieId);
                setActors(data);
            } catch {
                console.log(Error);
            }
        })();
    }, [movieId]);

    return (
        <>
            {actors && !!actors.length ? (
                <List>
                    {actors.map(({ id, profile_path, name }) => (
                        <Item key={id}>
                            <Profile src={profile_path ? baseImgUrl + profile_path : placeHolder} alt={name} />
                            <p>{name}</p>
                        </Item>
                    ))}
                </List>
            ) : (
                <div>No info about cast of the movie</div>
            )}
        </>
    );
};

export default Cast;