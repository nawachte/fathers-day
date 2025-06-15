import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="title">BREAKING NEWS</h1>
          <p className="subtitle">World's Ugliest Dad Discovered in Local Area</p>
        </div>
        
        <div className="photo-frame">
          <img 
            src="/dad-photo.jpg" // PUT YOUR DAD'S PHOTO IN THE PUBLIC FOLDER AND UPDATE THIS PATH
            alt="Dave Wachter - World's Ugliest Dad"
            className="dad-photo"
          />
          <p className="photo-caption">Fig 1. Scientific evidence of peak ugliness</p>
        </div>

        <div className="essay">
          <h2>A Comprehensive Analysis of Dave Wachter's Unprecedented Ugliness</h2>
          
          <p className="intro">
            <span className="drop-cap">D</span>ear Dad, after extensive research, countless hours of observation, 
            and consultation with leading experts in the field of aesthetics, we have reached an inescapable 
            conclusion: Dave Wachter has achieved levels of ugliness previously thought impossible by modern science.
          </p>

          <p>
            The evidence is overwhelming. Mirrors crack at his approach. Cameras mysteriously malfunction when 
            attempting to capture his likeness. Small children point and ask their parents, "What happened to 
            that man's face?" The answer, of course, is nothing happened – this is simply peak Dave Wachter form.
          </p>

          <p>
            Scientists have attempted to measure the full extent of your ugliness, Dad, but their instruments 
            simply aren't calibrated for such extreme readings. The Wachter Scale of Ugliness had to be invented 
            specifically for you, where 10 is "conventionally unattractive" and you somehow scored a 47. 
            Researchers are still trying to understand how this is mathematically possible.
          </p>

          <p>
            Your ugliness is so profound that it bends light around it, creating what physicists call "The 
            Wachter Effect." This phenomenon explains why family photos always seem slightly warped around your 
            face area. It's not the camera – it's literally the universe trying to protect itself from the full 
            impact of your appearance.
          </p>

          <p>
            And yet, despite this cosmic-level ugliness, despite the fact that looking directly at you for too 
            long causes mild disorientation and occasional nausea, despite the EPA considering classifying your 
            face as an environmental hazard – somehow, inexplicably, we still love you.
          </p>

          <p>
            Perhaps it's Stockholm Syndrome from years of exposure. Perhaps we've built up an immunity. Or perhaps 
            love truly is blind, because it would have to be to survive in the presence of such spectacular ugliness. 
            Your sons have developed what doctors call "Wachter Vision" – a rare condition where we can look at you 
            without immediately averting our eyes in horror.
          </p>

          <p>
            So Happy Father's Day to the world's ugliest dad! Thank you for passing on your questionable genetics, 
            your terrible jokes, and your face that only a son could love. We may need therapy, specialized eyewear, 
            and occasional breaks from family photos, but we wouldn't trade you for any of those supposedly 
            "normal-looking" dads.
          </p>

          <p className="signature">
            With love and prescription sunglasses,<br/>
            Your genetically disadvantaged sons
          </p>
        </div>

        <div className="footer">
          <p className="date">Father's Day 2024</p>
          <p className="disclaimer">*No mirrors were harmed in the making of this website</p>
        </div>
      </div>
    </div>
  );
}

export default App;