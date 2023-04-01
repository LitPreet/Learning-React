import Header from '../Header'
import {render} from "@testing-library/react"
import { Provider } from 'react-redux';
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'

test("Logo should load on renderinh Header",()=>{
 //logo
   const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>);
   console.log(header);

   //check if logo is loaded
})