import { useState } from "react"

function Home() {
  const [expand, setExpand] = useState(false)
  const [expand2, setExpand2] = useState(false)
  const [expand3, setExpand3] = useState(false)


  const handleClick = () => setExpand(!expand)
  const handleClick2 = () => setExpand2(!expand2)
  const handleClick3 = () => setExpand3(!expand3)

    return (
      <div>
                <h1>Suzuki Song Resource Site</h1>

        <section className="accordion">
        <div className="accordion-header"><h2>Spotify Playlist, Level 1</h2><h1 className="plus" aria-expanded={expand} onClick={handleClick}>+</h1>
            <h1 className="minus" aria-expanded={!expand} onClick={handleClick}>-</h1>
          </div>
          <div className="accordion-content" aria-expanded={!expand}>
        <p>Please note: this is a "preview" list and will only play parts of the songs here.  Please follow the link to spotify to listen to the songs in full. (You will need to sign up for a free account.)</p>
        <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/2pqP4buMoIHBqmWemvOcBz?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
</section>
<section className="accordion">
<div className="accordion-header">
          <h2>YouTube Resources, Level 1</h2>
          <h1 className="plus" aria-expanded={expand2} onClick={handleClick2}>+</h1>
            <h1 className="minus" aria-expanded={!expand2} onClick={handleClick2}>-</h1>
          </div>
          <div className="accordion-content" aria-expanded={!expand2}>
    <h2>Falling Bars Video (full level video, songs are in order, bookmarks in description, Note: the Twinkle Variations are not included)</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_1Rb5z0WT0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <h2>Link to Turk Piano Studios: full playlist for level 1, songs are in order</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLU13ELqa_CK9uvoLTyx0EQY-RbzS0xLd9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </section>
        <h2>Words for selected songs</h2>
        <h3>Honeybee</h3>
        <p>Honeybee, don't you dare sting me. <br />
          Don't sting Mommy, don't sting Daddy, <br />
          Don't sting Mommy, don't sting Daddy, <br />
          Honeybee, don't you dare sting me. 
        </p>
        <h3>Cuckoo</h3>
        <p> Cuckoo, Cuckoo, sings in the forest. <br />
        Cuckoo, Cuckoo, sings in the woods. <br />
        Let us be singing, let us be dancing. <br />
        Cuckoo, Cuckoo, bedtime is here.
        </p>
        <h3>Lightly Row</h3>
        <p> Lightly row, lightly row, gently down the stream we go. <br />
        Smoothly gliding, smoothly gliding, on the silent tide we row. <br />
        Let the wind and water be, mingled with our melody. <br />
        Smoothly gliding, smoothly gliding, on the silent tide we row.
        </p>
        <h3>French Children's Song</h3>
        <p>French children play and greet the happy morning. <br />
        French children play and greet the happy day. <br />
        French children sing happily in the garden. <br />
        French children sing happily in the yard.  <br />
        French children play and greet the happy morning. <br />
        French children play and greet the happy day. 
        </p>

      </div>
    );
  }
  
  export default Home;