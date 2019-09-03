import React from 'react';
import Customer from './components/Customer';

const customer = {
  'name': '홍길동',
  'age': 34,
  'birthday': '860305',
  'gender': '남자'
}

function App() {
  return (
    <Customer customer={customer} />
  );
}

export default App;
