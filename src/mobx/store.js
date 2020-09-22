import {observable, action, computed, autorun} from "mobx";

class GlobalStore{
    //定义初始数据
    @observable
    number=1
    //定义action 并且绑定到该类的实例上
    @action.bound
    setNumber(){
        this.number++;
    }
    //计算属性
    @computed get total(){
        return this.number*this.number
    }
    //只会在初始化中执行一次 就像useRef react类实例对象
    @autorun(()=>100) doubleNumber;
}

export default new GlobalStore();
