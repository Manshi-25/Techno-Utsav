import React from 'react'
import Card from './components/ui/Card';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
  } from "./components/ui/text-reveal-card";

function Sponsers() {
    return (
        <div className='pt-[5%] h-screen w-full bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 bg-black text-white'>
            
        <Card className="custom-spotlight-card h-96 mx-[27%]  my-10" spotlightColor="rgba(0, 229, 255, 0.2) sm:px-24 lg:px-32">
                    <TextRevealCardTitle className= "text-center text-3xl font-bold mb-12"> 
                    Sponsers
                    </TextRevealCardTitle>
                    <TextRevealCard
                    text="Sponsers coming soon"
                    revealText="Sponsers coming soon "
                    className="mx-8 text-center text-2xl"
                    >

                    </TextRevealCard>
                    
        </Card>
        
        </div>
    )
}

export default Sponsers
