import react,{useState} from 'react'
import { motion } from "framer-motion"
import styled from 'styled-components'

import cardone from '../images/card.jpg'
import cardtwo from '../images/card-2.jpg'
import cardthree from '../images/card-3.jpg'
import { Buttons } from './Styles';


const Section = styled.section`
height : 100vh;
display : flex ; 
justify-content : center;
align-items : center;
background : #131313;

`;
const Container = styled.div`
display: grid;
grid-template-columns : 1fr 1fr ;
height : 100vh;
padding : 3rem calc((100vw-1300px)/2);
@media : screen and (max-width: 768px)
{
    grid-grid-template-columns : 1fr;

}

`;

const ColumnLeft = styled.div`
display flex;
color #fff;
flex-direction: column;
justify-content: center;
align-items : flex-start;
padding :  5rem 2rem;

h1{
    margin-bottom : 0.5rem;
    font-size : 2rem;

}

p{
    margin:2rem 0 ;
    font-size : 4rem;
    line-height: 1.1;

}

`;

const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border : 2px solid #fff;
border-radius : 4px;
outline : none ;
cursor : pointer;
background :transparent ;
color : #fff;


`;

const Image = styled(motion.img)`
position : absolute;
width : 100%;
height : 100%;
max-width : 250px;
max-height : 250px;

`;

const ColumnRight = styled.div`
display : flex;
justify-content:center;
align-items : center;
padding : 2rem;
position : relative ; 

${Image}:nth-child(1){
    top:10x;
    left:10px;
}
${Image}:nth-child(2){
    top:170x;
    right:10px;
}
${Image}:nth-child(3){
    top:350x;
    bottom:50px;
}

`;

function Animate() {

    const fadeleft = {
        hidden: { opacity: 0, x: -100 },
        visibles: { opacity: 1, x: 0 }
    }



    const [visible, setVisible] = useState(true)

    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' 
            
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <Section>
                <Container>
                    <ColumnLeft>

                        <motion.h1

                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <i>
                                <strong>Welcome to NextGPUCards.com</strong>
                                <motion.p

                                    variants={fadeleft}
                                    intial='hidden'
                                    animate='visible'
                                    transition={{ duration: 1 }}

                                >Here yours cards , pick it !! </motion.p>
                            </i>
                        </motion.h1>
                        <Button

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, backgroundColor: '#67f6e7', border: 'none', color: '#000' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1.5 } }}
                            
                            onClick={scrollToBottom}  
                            style={{display: visible ? 'inline' : 'none'}}

                        ><i>Get Started</i></Button>
                    </ColumnLeft>

                    <ColumnRight>
                        <Image
                            src={cardone}
                            alt="card" whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}

                            intial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}

                        />


                        <Image src={cardtwo}
                            alt="card-2"

                            whileTap={{ scale: 0.6 }}
                            drag={true}
                            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}

                            intial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        />
                        <Image src={cardthree} alt="card-3"
                            whileTap={{ scale: 0.8 }}
                            drag={true}
                            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}

                            intial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} />
                    </ColumnRight>
                </Container>
            </Section>
        </div>

    )
}
export default Animate