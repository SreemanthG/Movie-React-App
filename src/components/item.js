import React from 'react';
import axios from 'axios';
export default class Navbar extends React.Component{
    //Api - http://www.omdbapi.com/?apikey=90bfa9a
    // http://www.omdbapi.com/?apikey=90bfa9a&t=Aquaman

    // state = {
    //     movies: []
    //   }
      
    componentDidMount(){
        // axios.get(`http://www.omdbapi.com/?apikey=90bfa9a&s=Aquaman`)
        // .then(res => {
        //   const movies = res.data.Search;
        //   console.log(movies)
        //   this.setState({ movies });
        // })
        // this.props.store.dispatch({
        //     type:"ADDMOVIE",
        //     payload:"Hello"
        //   })
    }
    renderMovieItems(){
        // console.log(this.state.movies);
        // var currentstate = this.props.getState()

        console.log("hello "+ this.props.store.getState())
        return this.props.store.getState().movies.map(movie =>( <div style={this.styles.card}>
            <div style={this.styles.image}>
                {console.log("name"+ movie.Title)}
                <img style={{width:"100%",height:"100%"}} src={movie.Poster} />
            </div>
            <div style={this.styles.content}>
                <h1>{movie.Title}</h1>
                <p>{movie.Type} </p>

                <h2>{movie.year}</h2>
                <button style={this.styles.button} >Add to Fav</button>
            </div>
        </div>) )
    }
    
    styles = {
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
    render(){
    return(
        <div>
            <div style={this.styles.container}>
            <div>
                <div style={this.styles.nav} >
                <button style={this.styles.button} >Click Me</button>
                <button style={this.styles.button} >Click Me</button>
                    
                </div>
            </div>
                <div style={this.styles.flex} >
                    {this.renderMovieItems()}
                    {/* <div style={this.styles.card}>
                        <div style={this.styles.image}>

                        </div>
                        <div style={this.styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={this.styles.button} >Click Me</button>
                        </div>
                    </div> 
                    <div style={this.styles.card}>
                        <div style={this.styles.image}>

                        </div>
                        <div style={this.styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={this.styles.button} >Click Me</button>
                        </div>
                    </div> 
                    <div style={this.styles.card}>
                        <div style={this.styles.image}>

                        </div>
                        <div style={this.styles.content}>
                            <h1>Hello</h1>
                            <p> lorem jsdhfs sjhfe fwejhfw fwuehrfw fwihefiuwf wufhwbfw efbwf wnmefbwef wefui </p>

                            <h2>9.5</h2>
                            <button style={this.styles.button} >Click Me</button>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
    )}

   
}