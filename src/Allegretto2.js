import { useState } from "react"

function Allegretto2() {
    const [expand, setExpand] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const [expand3, setExpand3] = useState(false)
  
  
    const handleClick = () => setExpand(!expand)
    const handleClick2 = () => setExpand2(!expand2)
    const handleClick3 = () => setExpand3(!expand3)

    return (
      <div>
        <h1 class="all2">Allegretto 2 Resources</h1>
        <section className="accordion"> 
        <div className="accordion-header">
            <h2>Guided Practice</h2>
            <h1 className="plus" aria-expanded={expand} onClick={handleClick}>+</h1>
            <h1 className="minus" aria-expanded={!expand} onClick={handleClick}>-</h1>
          </div>
          <div className="accordion-content" aria-expanded={!expand}>
                  <p>How it works:  select the section you are practicing, get set and press play.  The section will play through 6 times in a row with a count between each time.  The first time is a "demo," a chance for you to listen and get ready, then try to play along with the rest.  IF YOU NEED, you can slow the playback down (just don't forget to speed it back up again later).  You'll know you've mastered it when you can easily play along with all five of the repeats following the demo.</p>
        <h3>Section A, phrase 1</h3>
        <audio src="assets/audio/Allegretto-2-phrase-1.mp3" controls>Your browser does not support HTML5 audio.</audio>
        <h3>Section A, phrase 2</h3>
        <audio src="assets/audio/Allegretto-2-phrase-2.mp3" controls>Your browser does not support HTML5 audio.</audio>
        <h3>Section A: phrases 1 and 2</h3>
        <audio src="assets/audio/Allegretto-2-1st-half.mp3" controls>Your browser does not support HTML5 audio.</audio>
        <h3>Section B, phrase 3</h3>
        <audio src="assets/audio/Allegretto-2-phrase-3.mp3" controls>Your browser does not support HTML5 audio.</audio>
        <h3>Section B, phrase 4</h3>
        <audio src="assets/audio/Allegretto-2-phrase-4.mp3" controls>Your browser does not support HTML5 audio.</audio>


        <h3>Section B: phrases 3 and 4</h3>
        <audio src="assets/audio/Allegretto-2-2nd-half.mp3" controls>Your browser does not support HTML5 audio.</audio>
        <h3>Full Song</h3>
        <audio src="assets/audio/Allegretto-2-whole-song.mp3" controls>Your browser does not support HTML5 audio.</audio>
        </div>

</section>
<section className="accordion">
<div className="accordion-header">
          <h2>YouTube Resources</h2>
          <h1 className="plus" aria-expanded={expand3} onClick={handleClick3}>+</h1>
            <h1 className="minus" aria-expanded={!expand3} onClick={handleClick3}>-</h1>
          </div>
          <div className="accordion-content" aria-expanded={!expand3}>
    <h2>Falling Bars Video (full level video, set to start on Goodbye to Winter)</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_1Rb5z0WT0g?start=666" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <h2>Link to Turk Piano Studios: video shows RH, then LH, then HT</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-t5qMl3WU3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </section>

        {/* <section>
        <h2>Tutorial Videos</h2>
        <p>How it works: these videos are all the same video, just bookmarked to different sections.  Watch the full video or use one of the others to skip to the section you need.</p>
        <h3>Full Video</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Introduction</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Section A, RH</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=230" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Section A, LH</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=312" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Section A, Both Hands</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=447" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Section B, RH</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=559" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Section B, LH</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=652" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Section B, Both Hands</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=811" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Whole Song</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wTiI71clTD4?start=928" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section> */}
      </div>
    );
  }
  
  export default Allegretto2;