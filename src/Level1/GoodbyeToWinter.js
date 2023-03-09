import { useState } from "react";
import GuidedPracticeAudio from "../guidedPracticeAudio";

function GoodbyeToWinter() {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);

  const handleClick = () => setExpand(!expand);
  const handleClick2 = () => setExpand2(!expand2);
  const handleClick3 = () => setExpand3(!expand3);

  return (
    <div>
      <h1 class="gtw">Goodbye To Winter Resources</h1>
      <section className="accordion">
        <div className="accordion-header">
          <h2>Guided Practice</h2>
          <h1 className="plus" aria-expanded={expand} onClick={handleClick}>
            +
          </h1>
          <h1 className="minus" aria-expanded={!expand} onClick={handleClick}>
            -
          </h1>
        </div>
        <div className="accordion-content" aria-expanded={!expand}>
          <p>
            How it works: select the section you are practicing, get set and
            press play. The section will play through 6 times in a row with a
            count between each time. The first time is a "demo," a chance for
            you to listen and get ready, then try to play along with the rest.
            IF YOU NEED, you can slow the playback down (just don't forget to
            speed it back up again later). You'll know you've mastered it when
            you can easily play along with all five of the repeats following the
            demo.
          </p>
          <GuidedPracticeAudio
            source="assets/audio/GTW-rh-a.mp3"
            heading="Section A, right hand"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-rh-b.mp3"
            heading="Section B, right hand"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-rh-c.mp3"
            heading="Section C, right hand"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-rh-coda.mp3"
            heading="Coda, right hand"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-rh-all.mp3"
            heading="Whole song, right hand"
          />

          <GuidedPracticeAudio
            source="assets/audio/GTW-ht-a.mp3"
            heading="Section A, both hands"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-ht-b.mp3"
            heading="Section B, both hands"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-ht-c.mp3"
            heading="Section C, both hands"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-ht-coda.mp3"
            heading="Coda, both hands"
          />
          <GuidedPracticeAudio
            source="assets/audio/GTW-ht-all.mp3"
            heading="Whole song, both hands"
          />
        </div>
      </section>
      <section className="accordion">
        <div className="accordion-header">
          <h2>YouTube Resources</h2>
          <h1 className="plus" aria-expanded={expand3} onClick={handleClick3}>
            +
          </h1>
          <h1 className="minus" aria-expanded={!expand3} onClick={handleClick3}>
            -
          </h1>
        </div>
        <div className="accordion-content" aria-expanded={!expand3}>
          <h2>
            Falling Bars Video (full level video, set to start on Goodbye to
            Winter)
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_1Rb5z0WT0g?start=629"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <h2>Link to Turk Piano Studios: video shows RH, then LH, then HT</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ahGX4U02fXQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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

export default GoodbyeToWinter;
