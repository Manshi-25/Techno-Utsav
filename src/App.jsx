import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import EventDetails from './components/EventDetails';
import { events } from './data/events';
import Events from './Events';
import Sponsers from './Sponsers';
function App() {
  return (
    <>
    <Events/>
    <Sponsers/>
    </>
  );
}

export default App;