import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
function Oranges() {
    const [count, setCount] = useState(0);

 
    const infoo=['Calories: 66',
      'Water: 86% by weight',
      'Protein: 1.3 grams',
      'Carbs: 14.8 grams',
      'Sugar: 12 grams',
      'Fiber: 2.8 grams',
      'Fat: 0.2 grams',
      'Vitamin C: 92% of the Daily Value (DV)',
      'Folate: 9% of the DV',
      'Calcium: 5% of the DV',
      'Potassium: 5% of the DV']
    return (
      <Container className="o" style={{display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor:'Wheat',minHeight: '178vh'}}>
        <h2>Oranges</h2>
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'20%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'#FF8C00',  
                borderColor:'black',
                color:'black'}} onClick={() => setCount(count + 1)}>+</Button>{' '} 
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'20%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'#FF8C00',  
                borderColor:'black',
                color:'black'}} onClick={() => setCount(count - 1)}>-</Button>
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'15%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'#969A9D',  
                borderColor:'black',
                color:'#FF8C00'}} onClick={() => setCount(0)}>Reset</Button>

<div style={{fontSize:'1.2rem'}}> 
        <p>Price per kilo: 85$</p>
        <p>Count: {count}</p>
        <p>Total:{count*85+'$'}</p>
        </div>
        <div>
          <img src="./images/orange.jpg" style={{width:'400px'}}/>
        </div>

            
        <bio style={{fontSize:"1.5rem",align:'left'}}>
                    Many types of oranges are high in fiber and beneficial vitamins, like vitamin C. They also contain antioxidants which can 
                    have various health benefits, including supporting immune function.

                    If you’re a fan of citrus fruits, you’ve probably enjoyed your fair share of oranges.

                    Citrus sinensis, or the sweet orange, is the type people typically enjoy fresh and in 
                    juice form.

                    Sweet orange trees originated in China thousands of years ago and are now grown in 
                    many areas around the world, including the United States, Mexico, and Spain.

                    Oranges are a treasure trove of nutrients and protective plant compounds, 
                    including vitamins, minerals, and antioxidants. Studies show that consuming oranges regularly may benefit your health in several ways.

                    This article explains everything you need to know about oranges, including their 
                    nutritional value, potential health benefits, and more.

                    Javier Pardina/Stocksy

                    Nutrition
                    Here’s the nutritional breakdown for 1 orange (140 grams):
                    <ul>
 
    {infoo.map((infoo, index) => (
      <li key={index}>{infoo}</li>
  ))}
  </ul>
  Oranges are a good source of fiber 
  and a rich source of vitamin C and folate, 
  among many other beneficial nutrients.
  Oranges are a rich source of several plant compounds that may be 
  responsible for many of their health benefits.
  Oranges may benefit heart health, reduce the risk of some chronic 
  diseases, enhance iron absorption, and support a healthy immune response.
  Fruit juices are more concentrated in sugar and contain less fiber, making 
  them much less filling than whole fruit.
  Some people are allergic to oranges, and their acidity may increase the 
  symptoms of heartburn. However, oranges pose few health risks overall.

        </bio>
        </Container>
    );
}
export default Oranges;