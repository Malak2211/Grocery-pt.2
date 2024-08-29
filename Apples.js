import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
function Apples() {
    const [count, setCount] = useState(0);
    const infoa=[
      'Calories: 94.6',
      'Water: 156 grams',
      'Protein: 0.43 grams',
      'Carbs: 25.1 grams',
      'Sugar: 18.9 grams',
      'Fiber: 4.37 grams',
      'Fat: 0.3 grams']
    return (

      
      <Container className="a" style={{display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor:'#E8FAEA',minHeight: '100vh'}}>
        <h2>Apples</h2>
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'20%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'#F08080',  
                borderColor:'black',
                color:'black'}} onClick={() => setCount(count + 1)}>+</Button>{' '}
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'20%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'#F08080',  
                borderColor:'black',
                color:'black'}} onClick={() => setCount(count - 1)}>-</Button>
        <Button style={{ display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '20px',width:'15%',
                height:'45px' ,fontSize: '1rem',
                backgroundColor:'grey',  
                borderColor:'black',
                color:'#F08080'}} onClick={() => setCount(0)}>Reset</Button>
        <div style={{fontSize:'1.2rem'}}> 
        <p>Price per kilo: 85$</p>
        <p>Count: {count}</p>
        <p>Total:{count*85+'$'}</p>
        </div>

        <div>
          <img src="./images/apple.jpg" style={{width:'400px'}}/>
        </div>
        <bio style={{fontSize:"1.5rem",align:'left'}}>
        Apples contain key nutrients, including fiber and antioxidants. They may offer health benefits, 
        including lowering blood sugar levels and benefitting heart health.
        Apples are among the world’s most popular fruits.
        They grow on the apple tree (Malus domestica), originally from Central Asia.
        Apples are high in fiber, vitamin C, and various antioxidants. They are also very filling, considering 
        their low calorie count. StudiesTrusted Source showTrusted Source that eating apples can have multiple 
        benefits for your health.
        Usually eaten raw, apples can also be used in various recipes, juices, and drinks. Various types abound, 
        with a variety of colors and sizes.
        This article tells you everything you need to know about apples.
        redstallion/Getty Images
        Apple nutrition facts
        Here are the nutrition factsTrusted Source for one raw, unpeeled, medium-sized apple (182 grams):







                        <ul>
 
 {infoa.map((infoa, index) => (
   <li key={index}>{infoa}</li>
        ))}
        </ul>
        Apples are mainly made up of carbs and water. 
        They also contain fiber, which moderates blood sugar levels and promotes gut health.
        Apples are not particularly rich in vitamins and minerals. However, they contain 
        decent amounts of both vitamin C and potassium.
        Apples are a good source of several antioxidants, including quercetin, catechin, and chlorogenic acid. 
        These plant compounds are responsible for many of apples’ benefits.
        Some studies indicate that apples may help protect against diabetes, 
        heart disease, and cancer.
        Apples are generally considered healthy but may cause 
        digestive problems in some people.
        
        </bio>
     </Container>
 );
}
export default Apples;


   