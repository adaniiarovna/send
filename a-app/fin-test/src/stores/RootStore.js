import { observable, action } from "mobx";
import axios from 'axios';

class RootStore {
  @observable app = '';
}

export default RootStore;
