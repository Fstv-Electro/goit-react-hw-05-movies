import { Container, Form, Input, Btn } from "./SearchMovies.styled";
import { useState } from "react";

const SearchMovies = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Btn type="submit">Search</Btn>
                <Input
                    type='text'
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleChange}
                    value={query}
                />
            </Form>
        </Container>
    );
};

export default SearchMovies;