import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Links } from "./SharedLayout.styled";

export const SharedLayouts = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Links to='/' end>
                        Home
                    </Links>
                    <Links to='/movies'>
                        Movies
                    </Links>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
        </Container>
    );
};