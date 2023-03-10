import {
    ContainerMovie,
    Box,
    Poster,
    BoxDataMovie,
    ListGenres,
    ListLink,
    Title,
    Links
} from './MovieData.styled';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { baseImgUrl } from 'API';

export const MovieData = ({ url, tag, title, score, overview, genres }) => {
    return (
        <ContainerMovie>
            <Box>
                <Poster src={baseImgUrl + url} alt={tag} />
                
                <BoxDataMovie>
                    <h2>{title}</h2>
                    <p>User score: {Math.round(score * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <ListGenres>
                        {genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ListGenres>
                </BoxDataMovie>
            </Box>
            <Title>Additional information</Title>
            <ListLink>
                <li>
                    <Links to="cast">Cast</Links>
                </li>
                <li>
                    <Links to="reviews">Reviews</Links>
                </li>
            </ListLink>
            <Outlet/>
        </ContainerMovie>
    );
};

MovieData.propTypes = {
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};