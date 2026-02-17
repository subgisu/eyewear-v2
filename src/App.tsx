import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Reason from './components/Reason';
import Weight from './components/Weight';
import UVFeature from './components/UVFeature';
import Design from './components/Design';
import EliteFeatures from './components/EliteFeatures';
import Activities from './components/Activities';
import Specs from './components/Specs';
import Trust from './components/Trust';
import Closing from './components/Closing';
import StickyFooter from './components/StickyFooter';

const App = () => (
  <main className="w-full overflow-x-hidden min-h-screen relative font-sans">
    <Hero />
<Gallery />
    <Reason />
    <Weight />
    <UVFeature />
    <Design />
    <EliteFeatures />
    <Activities />
    <Specs />
    <Trust />
    <Closing />
    <StickyFooter />
  </main>
);

export default App;
