import { useState } from 'react'
import './styles.css'
import './styles-tab.css'
import './styles-accordion.css'
import './styles-text-expander.css'
import './styles-render-props-demo.css'
import TextExpander from './components/TextExpander'
import StarRating from './components/StarRating'
import { faqs } from './data-accordion.js'
import Accordion from './components/Accordion'
import { content as tab_content } from './data-tabs.js'
import { Tabbed } from './components/Tabbed.js'
import CurrencyConverter from './components/CurrencyConverter.js'
import { RenderPropsDemo, HOCDemo } from './components/RenderPropsDemo.js'
import Counter from './components/Counter.js'

function App() {
  const [rate, setRate] = useState(0)

  return (
    <>
      <div className="text-expander">
        <h2>Text Expander component</h2>
        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>

        <TextExpander
          collapsedNumWords={40}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>

        <TextExpander expanded={true} className="box">
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>

      <div>
        <h2>Star Rating component</h2>
        <StarRating
          maxRating={5}
          messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
          onSetRating={setRate}
        />
        your rate is {rate}
      </div>

      <div>
        <h2>FAQ Accordion component</h2>
        <Accordion data={faqs} />
      </div>

      <div>
        <h2>Tabs</h2>
        <Tabbed content={tab_content} />
      </div>

      <div>
        <h2>Currency Converter</h2>
        <CurrencyConverter />
      </div>

      <div>
        <h2>Render Props Pattern</h2>
        <RenderPropsDemo />
      </div>

      <div>
        <h2>Higher-Order Component Pattern (HOC)</h2>
        <HOCDemo />
      </div>

      <div>
        <h2>Compound Component Pattern</h2>
        <p>
          Problem: Prop explosion (not enough flexibility to configure
          component)
        </p>
        {/*<Counter
          iconIncrease="+"
          iconDecrease="-"
          label="My NOT so flexible counter"
          hideLabel={false}
          hideIncrease={false}
          hideDecrease={false}
          posiotionCount="top"
        />*/}
        <Counter>
          <Counter.Label>My super flexible counter:</Counter.Label>
          <Counter.Count />
          <Counter.Decrease icon="-" />
          <Counter.Increase icon="+" />
        </Counter>
        <br />
        <Counter>
          <Counter.Decrease icon="◀️" />
          <Counter.Count />
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </>
  )
}

export default App
