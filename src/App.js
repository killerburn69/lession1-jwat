import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index.jsx';
import Information from './components/Information/index.jsx';
import Layout from './components/Layout/index.jsx';
import Text from './components/Text/index.jsx';
function App() {
  return (
    <div>
      <Navbar/>
      <Layout>
        <Information/>
        <Text/>
      </Layout>
    </div>
  );
}

export default App;
