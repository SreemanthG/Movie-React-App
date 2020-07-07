import React from 'react';
export default function Navbuttons(){
    const styles = {
        
        nav:{
            paddingTop:5,
            paddingLeft:'10rem',
            paddingBottom:5,
            paddingRight:"10rem",
        },
        button:{
            padding:10,
            backgroundColor:"#24a0ed",
            border:0,
            color:"white",
            borderRadius:4
        }
    }
    return(
        <div>
            <div>
                <div style={styles.nav} >
                <button style={styles.button} >Click Me</button>
                <button style={styles.button} >Click Me</button>
                    
                </div>
            </div>
        </div>
    )

   
}