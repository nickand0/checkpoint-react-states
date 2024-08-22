//importation React et component
import React,{Component} from 'react';

import('./App.css')

//Transformation de l 'App basé sur class
//implémentation de state contenant une personne
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      Person:{
        fullName:"Lebron James",
        bio:"l'un des meilleurs joueurs de l'histoire de la NBA.",
        imgSrc:"https://ih1.redbubble.net/image.2649736151.4978/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        profession:"Basketteur",

      },
      shows:false,
      mountedTime:0,
    }
  }

  //Pour démarer le minuteur qui met a jour le state chaque seconde
  componentDidMount(){
    this.intervalId = setInterval(()=>{
      this.setState(prevState =>({
        mountedTime: prevState.mountedTime +1
      }));
    },1000);
  }

  //Pour effacer l'intervalle
  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  //pour mettre à jour le state shows 
  toggleShow = () => {
    this.setState({ shows : !this.state.shows})
  }


// renvoi des elements rendu
  render() {
    const { Person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        <button onClick = {this.toggleShow}> 
          {shows ? 'Cacher le profil' : 'Afficher le profil'}
        </button>
        <p className='time'> {mountedTime} s</p>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <h2>{Person.profession}</h2>
            <img src={Person.imgSrc} alt="Profil" />
            <p className='bio'>{Person.bio}</p>
            
          </div>
        )}
      </div>
    );
  }

};


export default App;

