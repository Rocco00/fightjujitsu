import {createDrawerNavigator, createAppContainer, createStackNavigator} from "react-navigation";
import Home from "./screens/Home";
import Foto from "./screens/Foto";
import Video from "./screens/Video";
import News from "./screens/News";
import Gruppo1 from "./screens/Gruppo1";
import Gruppo2 from "./screens/Gruppo2";
import Gruppo1Video from "./screens/Gruppo1Video";
import Gruppo2Video from "./screens/Gruppo2Video";
import Zoomfoto from "./screens/Zoomfoto";
const fotoNavigation = createStackNavigator({
  Foto:{
    screen:Foto,
  },
  Gruppo1:{
    screen:Gruppo1,
  },
  Gruppo2:{
    screen:Gruppo2,
  },
  Zoomfoto:{
    screen:Zoomfoto,
  },
})
const videoNavigation = createStackNavigator ({
  Video:{
    screen:Video,
  },
  Gruppo1Video:{
    screen:Gruppo1Video,
  },
  Gruppo2Video:{
    screen:Gruppo2Video,
  },
})
const navigation = createDrawerNavigator({
  Home:{
    screen:Home,
  },
  Foto:{
    screen:fotoNavigation,
  },
  Video:{
    screen:videoNavigation,
  },
  News:{
    screen:News,
  },
}
)
const app = createAppContainer(navigation)
export default app
