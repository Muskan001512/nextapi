import styles from "./homepage.module.css";

import Featured from "./component/Featured/Featured";
import Categorylist from "./component/Categorylist/Categorylist";
import Card from  "./component/Card/Card"
import Menu from  "./component/Menu/Menu"
import Cardlist from "./component/Cardlist/Cardlist";

export default function Home() {
  return <div>
    {/* <Navbar/> */}
    <Featured/>
    <Categorylist/>
    <Cardlist/>
    <Menu/>
    
    {/* <Footer/> */}
    
  </div>;
}
