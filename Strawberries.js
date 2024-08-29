import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
function Strawberries() {
    const [count, setCount] = useState(0);
    const infos=['Calories: 32',
        'Water: 91%',
        'Protein: 0.7 grams',
        'Carbs: 7.7 grams',
        'Sugar: 4.9 grams',
        'Fiber: 2 grams',
        'Fat: 0.3 grams']
  
    return (
      <Container className="s" style={{display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor:'#E8FAEA',minHeight: '100vh'}}>
        <h2>Strawberries</h2>
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
        <div>          <img src="./images/strawberry.jpg" style={{width:'400px'}}/>
        </div>

       


            
        


            
        <bio style={{fontSize:"1.5rem",align:'left'}}>
                        Strawberries are very healthy, containing many antioxidants and vitamins. They’re also low in calories, 
                        containing only about 32 calories per half a cup.
                        The strawberry (Fragaria ananassa) originated in Europe in the 18th century.
                        It is a hybrid of two wild strawberry species from North America and Chile.
                        Strawberries are bright red, juicy, and sweet.
                        They’re an excellent source of vitamin C and manganese and also contain decent amounts of 
                        folate (vitamin B9) and potassium.
                        Strawberries are very rich in antioxidants and plant compounds, which may have benefits for 
                        heart health and blood sugar control .
                        Usually consumed raw and fresh, these berries can also be used in a variety of jams, jellies, and desserts.
                        This article tells you everything you need to know about strawberries.
                        Nutrition facts
                        Strawberries mainly consist of water (91%) and carbohydrates (7.7%). They contain only minor amounts of 
                        fat (0.3%) and protein (0.7%).
                        The nutrients in 3.5 ounces (100 grams) of raw strawberries are:


                        <ul>
 
 {infos.map((infos, index) => (
   <li key={index}>{infos}</li>
        ))}
        </ul>
        Strawberries’ carbs consists mainly of fibers and simple sugars. 
        They have a relatively low GI and should not cause big spikes 
        in blood sugar levels.
        Strawberries are a good source of vitamin C, manganese, folate 
        (vitamin B9), and potassium. They contain small amounts of several 
        other vitamins and minerals.
        Strawberries contain high amounts of beneficial plant compounds and antioxidants, 
        such as pelargonidin, ellagic acid, ellagitannins, and procyanidins.
        Strawberries may decrease your risk of heart disease 
        and cancer, as well as help regulate blood sugar.
        Strawberry allergy is rather common, especially among children. Individuals who 
        are sensitive to birch pollen or apples may experience symptoms after consuming strawberries.


        </bio>
     </Container>
 );
}
export default Strawberries;
