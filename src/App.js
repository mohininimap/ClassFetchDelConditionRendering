import logo from './logo.svg';
import './App.css';
import TextrenderingEx from './TextrenderingEx';
import PassingeventArgClass from './PassingeventArgClass';
import JsonEx from './jsonexample/JsonEx';
import DataRenderBootstrapTable from './jsonexample/DataRenderBootstrapTable';
import Counters from './counter/Counters';
import Parent from './Parent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DisplayLinks from './DisplayLinks/DisplayLinks';
import UseMemohookEx from './UseMemoHookEx/UseMemohookEx';
import UescallbackParent from './UsecallbackhookEx/UescallbackParent';
import UseEffectVsuseMemo from './useEffectVsuseMemo/UseEffectVsuseMemo';
function App() {
  return (
   <>
   <Router>
    <DisplayLinks/>
    <Routes>
      <Route path="/parent" element={<Parent/>}>Parent</Route>
      <Route path="/textrender" element={<TextrenderingEx/>}>Parent</Route>
      <Route path="/passingeventargclass" element={<PassingeventArgClass/>}>PassingeventArgClass</Route>
      <Route path="/datarenderbootstraptable" element={<DataRenderBootstrapTable/>}>DataRenderBootstrapTable</Route>
      <Route path="/jsonex" element={<JsonEx/>}>Json Example</Route>
      <Route path="/counterapp" element={<Counters/>}>Counter App</Route>
      <Route path="/usememohook" element={<UseMemohookEx/>}></Route>Use Memo Hook Example<Route/>
      <Route path="/usecallbackex" element={<UescallbackParent/>}>Parent</Route>
      <Route path="/useeffectvsusememo" element={<UseEffectVsuseMemo/>}>Parent</Route>

    </Routes>
   </Router>
   </>
  );
}

export default App;


