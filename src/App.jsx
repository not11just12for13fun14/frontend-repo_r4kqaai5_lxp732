import Hero from './components/Hero';
import WhyMatters from './components/WhyMatters';
import Limited from './components/Limited';
import Stories from './components/Stories';
import WhatsIncluded from './components/WhatsIncluded';
import Application from './components/Application';
import NextSteps from './components/NextSteps';
import Closing from './components/Closing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyMatters />
      <Limited />
      <Stories />
      <WhatsIncluded />
      <Application />
      <NextSteps />
      <Closing />
    </div>
  );
}

export default App;
