import {createDrawerNavigator, createAppContainer} from "react-navigation";
import Home from "./screens/Home";
import Foto from "./screens/Foto";
import Video from "./screens/Video";
import News from "./screens/News";
const navigation = createDrawerNavigator({
  Home:{
    screen:Home,
  },
  Foto:{
    screen:Foto,
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
