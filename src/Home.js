function Home() {
    return (
      <div>
        <h1>Suzuki Song Resource Site</h1>
        <h2>Spotify Playlist, Level 1</h2>
        <p>Please note: this is a "preview" list and will only play parts of the songs here.  Please follow the link to spotify to listen to the songs in full. (You will need to sign up for a free account.)</p>
        <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/2pqP4buMoIHBqmWemvOcBz?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    );
  }
  
  export default Home;