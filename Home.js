import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const fruits = ['apples', 'bananas', 'oranges', 'strawberries'];

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#F0F8FF',
            minHeight: '100vh'

           
        }}>
            <h1 style={{ color: '#F08080',display: 'flex',  alignItems: 'center' }}>Welcome to the Fruit System🍎</h1>
        
            {fruits.map(fruit => (
                <Button
                    style={{ display: 'flex',alignItems: 'center', justifyContent: 'center',margin: '20px',width:'40%',height:'45px' ,fontSize: '1rem',backgroundColor:'#E0F7FA',  borderColor:'#FFB6C1',color:'#4682B4'}}
                    key={fruit}
                    onClick={() => navigate(fruit)}
                    className="fruit"
                >
                    {fruit}
                </Button>
            ))}
        </Container>
    );
}
export default Home;
