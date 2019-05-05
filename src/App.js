import React from 'react';
import Episodes from './episodes.json';
import Header from './header'
import './App.css';
import Episode from './Episode.js';

const App = () => (
  <div>
    <Header />
    {/*tv show selector - dropdown menu and if statement*/}

    {Episodes.map(tvEpisode => {
      return <Episode 
      name= {tvEpisode.name} 
      summary={tvEpisode.summary}
      season={tvEpisode.season}
      number={tvEpisode.number}
      //if tvepisode contains image then execute
      image={tvEpisode.image ? tvEpisode.image.medium : null}

      airdate={tvEpisode.airdate}
      />;
    })}
    </div>
)


export default App;
