import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const CardList = (props) =>  
{
return <div className='card-list'>

           {
              props.mons.map(monster =>  <Card key={monster.id} mon={monster}/> )
           }  

</div>;
}

