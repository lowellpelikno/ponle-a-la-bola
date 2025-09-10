// App.tsx
import React, { useState } from 'react';
import GridComponent from './components/GridComponent';
import UserForm from './components/UserForm';
import type { GridItem } from './interface/SystemInterfaces';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [clickedItems, setClickedItems] = useState<GridItem[]>([]);

  return (
    <div>
      {!showForm ? (
        <GridComponent
          onRequestForm={() => setShowForm(true)}
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
      ) : (
        <UserForm
          onBack={() => setShowForm(false)}
          selectedNumbers={clickedItems}
        />
      )}
    </div>
  );
};

export default App;