import Accordian from "./components/Accordian/Accordian"
import SearchList from "./components/SearchList";


import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./components/Place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];



function App() {

  return (
    <main>
      <section>
        <h1>Why us?</h1>

        <Accordian className="accordion">
          <Accordian.Item className="accordion-item" title="we have 20 exp" id="experiance">
            <article>
              <p>whefkevfevqfv</p>
              <p>
                this is us
              </p>
            </article>
          </Accordian.Item>

          <Accordian.Item className="accordion-item" title="we have 20 exp" id="us">
            <article>
              <p>fhvevfuevf</p>
              <p>
                this is us
              </p>
            </article>
          </Accordian.Item>
        </Accordian>


      </section>
      <section>
        <SearchList items={PLACES}>
          {(item)=><Place item={item}/>}
        </SearchList>
      </section>
    </main>
  )
}

export default App;
