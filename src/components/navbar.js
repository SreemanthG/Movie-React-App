import React from 'react';
export default function Item(){
    const styles = {
        navinp:{
            width:"70%",
            height:30,
            border:0,
            paddingTop:5,
            paddingLeft:10,
            paddingBottom:5,
            paddingRight:10,
            marginTop:"0.5rem",
            marginLeft:"1rem",
            marginBottom:"0.5rem",
            marginRight:"1rem",
            borderRadius:5,
        },
        navsub:{
            height:35,
            border:0,
            marginTop:"0.5rem",
            marginLeft:"1rem",
            marginBottom:"0.5rem",
            marginRight:"1rem",
            borderRadius:5,
        },
        nav:{
            paddingTop:5,
            paddingLeft:'10rem',
            paddingBottom:5,
            paddingRight:"10rem",
            backgroundColor: "#0a0a33"
        }
    }
    return(
        <div>
            <div>
                <div style={styles.nav} >
                    <input style={styles.navinp} type="text" name="search" id="search" />
                    <input style={styles.navsub} type="submit" value="search"/>
                </div>
            </div>
        </div>
    )

   
}