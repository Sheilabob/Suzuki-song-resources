function GuidedPracticeAudio({ source, heading }) {
  return (
    <>
      <h3>{heading}</h3>
      <audio src={source} controls>
        Your browser does not support HTML5 audio.
      </audio>
    </>
  );
}

export default GuidedPracticeAudio;
