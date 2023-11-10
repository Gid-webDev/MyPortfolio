import { CV_Btn } from "./components/Resume";
import {AboutMe} from "./components/AboutMe"


export const ModalData =  {
    "id" : 1, "header": MenuListItem,
    "body": [
    {"id": 1, "name": <AboutMe/>},
    {"id": 2, "name": "Projects"},
    {"id": 3, "name": <CV_Btn/>},
    {"id": 4, "name": "ContactDetails"},
    {"id": 5, "name": <SocialLinks/>}
], 
    "footer": "Close"
}