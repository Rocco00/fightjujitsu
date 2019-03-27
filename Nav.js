import {createDrawerNavigator, createAppContainer, createStackNavigator} from "react-navigation";
import Home from "./screens/Home";
import Foto from "./screens/Foto";
import Video from "./screens/Video";
import News from "./screens/News";
import Gruppo1 from "./screens/Gruppo1";
import Gruppo2 from "./screens/Gruppo2";
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
})
const navigation = createDrawerNavigator({
  Home:{
    screen:Home,
  },
  Foto:{
    screen:fotoNavigation,
  },
  Video:{
    screen:Video,
  },
  News:{
    screen:News,
  },
}
)
const app = createAppContainer(navigation)
export default app
