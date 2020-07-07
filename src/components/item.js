import React from 'react';
export default function Navbar(){
    //Api - http://www.omdbapi.com/?apikey=90bfa9a
    const styles = {
        container:{
            
            paddingTop:30,
            paddingLeft:100,
            paddingBottom:30,
            paddingRight:100,
            borderRadius:5,
        },
        flex:{
            display:"flex",
            flexDirection:"column",
            flexWrap:"true"
        },
        card:{
            marginTop:30,
            marginLeft:100,
            marginBottom:30,
            marginRight:100,
            borderRadius:5,
            backgroundColor:"#efefef",
            display:"flex"
        },
        image:{
            width:230,
            height:300,
            backgroundColor:"#2f2f2f",
            marginRight:100,
           
        },
        content:{
            marginTop:10,
            marginBottom:10,
            textAlign:"left"

        },
        button:{
            padding:10,
            backgroundColor:"#24a0ed",
            border:0,
            color:"white",
            borderRadius:4,
            marginRight:10,
        },
        nav:{
            marginTop:30,
            marginLeft:100,
            marginBottom:30,
            marginRight:100,
            textAlign:"left"
        }
       
    }
    return(
        <div>
            <div style={styles.container}>
            <div>
                <div style={styles.nav} >
                <button style={styles.button} >Click Me</button>
                <button style={styles.button} >Click Me</button>
                    
            </div>
            </div>
                <div style={styles.flex} >
                    <div style={styles.card}>
                        <div style={styles.image}>

                        </div>
                        <div style={styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={styles.button} >Click Me</button>
                        </div>
                    </div> 
                    <div style={styles.card}>
                        <div style={styles.image}>

                        </div>
                        <div style={styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={styles.button} >Click Me</button>
                        </div>
                    </div> 
                    <div style={styles.card}>
                        <div style={styles.image}>

                        </div>
                        <div style={styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={styles.button} >Click Me</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )

   
}