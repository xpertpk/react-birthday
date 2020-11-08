import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
	const [people, setPeople] = useState(data);
	const [state, setState] = useState(false);
	const clearAll = () => {
		setPeople([]);
		setState(true);
	}
	const fetchAll = () => {
		setPeople(data);
		setState(false);
	}
  return (
	  <main>
	    <section className="container">
	      <h3>{people.length} Birthday Today</h3>
	      <List people={people} />
		  {
			  state == true ? 
			  <button onClick={fetchAll}>Fetch All</button>
			  :<button onClick={clearAll}>Clear All</button>
		  }
	    </section>
	  </main>
  );
}

export default App;