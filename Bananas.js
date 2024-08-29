import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
function Bananas() {
    const [count, setCount] = useState(0);
    const infob=['Calories: 89',
      'Water: 75%',
      'Protein: 1.1 grams',
     ' Carbs: 22.8 grams',
      'Sugar: 12.2 grams',
      'Fiber: 2.6 grams',
      'Fat: 0.3 grams']
    return (
      <Container className="b" style={{display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor:'#FFFFE0',minHeight: '100vh'}}>
        <h2>Bananas</h2>
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'20%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'yellow',  
                borderColor:'black',
                color:'black'}} onClick={() => setCount(count + 1)}>+</Button>{' '} 
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'20%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'yellow',  
                borderColor:'black',
                color:'black'}} onClick={() => setCount(count - 1)}>-</Button>
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'15%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'grey',  
                borderColor:'black',
                color:'yellow'}} onClick={() => setCount(0)}>Reset</Button>
        <div style={{fontSize:'1.2rem'}}> 
        <p>Price per kilo: 85$</p>
        <p>Count: {count}</p>
        <p>Total:{count*85+'$'}</p>
        </div>
        <div>
          <img src="./images/ban.jpg" style={{width:'400px'}}/>
        </div>
        <bio style={{fontSize:"1.5rem",align:'left'}}>
            Bananas contain fiber as well as vitamins and minerals that may provide health benefits.
            Bananas are among the most important food crops on the planet.
            They come from a family of plants called Musa that are native to Southeast Asia and grown 
            in many of the warmer areas of the world.
            Bananas are a healthy source of fiber, potassium, vitamin B6, vitamin C, and various 
            antioxidants and phytonutrients.
            Many types and sizes exist. Their color usually ranges from green to yellow, but some varieties are red.
            This article tells you everything you need to know about bananas.
            Nutrition facts
            The nutrition facts for 1 medium-sized banana (100 grams) are :





                        <ul>
 
 {infob.map((infob, index) => (
   <li key={index}>{infob}</li>
        ))}
        </ul>
        Bananas are mainly composed of carbs. Unripe bananas may contain decent amounts of resistant starch, 
        which functions like fiber, 
        aiding your gut and promoting healthy blood sugar levels.
        Bananas contain a number of vitamins and minerals in decent amounts. 
        These include potassium and vitamins B6 and C.
        Like other fruits, bananas contain several healthy antioxidants, which are responsible for many of their health 
        benefits. These include dopamine and catechin.
        Bananas may be beneficial for heart health due to their high levels of potassium and antioxidants. What’s 
        more, their resistant starch and pectins may promote colon health.
        Bananas are generally considered healthy. However, people with type 2 diabetes should 
        avoid a high intake of well-ripened bananas.
        </bio>
     </Container>
 );
}
export default Bananas;
