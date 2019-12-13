import {Button, Input, List} from 'antd';
import React from 'react';
import { connect } from 'dva';

const namespace = 'one';

const mapPropsToState = (state) => {
  const list = state[namespace].list;
  console.log("list:",list)
  return {list};
}

const mapDispachToProps = (dispath) => {
  return {
    onClickAdd: () => {
      dispath({
        type: `${namespace}/queryItems`,
      });
    },
  };
};

@connect(mapPropsToState, mapDispachToProps)
export default class TodoList extends React.Component {

  componentDidMount() {
    this.props.onClickAdd();
  }
  // onclickChange = (e) => {
  //   this.setState({
  //     inputValue : e.target.value,
  //   });
  // }
  //setState(arg1, arg2)的参数其中arg1可以为对象或者函数，上面是对象，下面为函数
  // 所以如果想对传入的state进行操作，可以使用箭头函数操作，像下面这样
  //onClickButton = () => {
    // if(this.state.inputValue===""){
    //   alert("不能为空!");
    //   return;
    // }
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue : ''
    // })

    //这里的preState（换个名字也可以，如qwe）是保存的当前的state
    // this.setState(( preState )=> {
    //   // if( this.state.inputValue.trim() === "") {
    //   //   alert("不能为空");
    //   //   return preState;
    //   // }

    //   const qwe = "qwe";
    //   return {
    //     list: [...preState.list, qwe],
    //     // inputValue : ''
    //   }     
    // },)
  //}

  render() {
    return(
      <div>
        {/* <Input onChange={this.onclickChange} style={this.inputSty} value={this.state.inputValue} /> */}
        {/* <Button type="primary" onClick={()=>this.props.onClickAdd('sdfsdf')}>提交</Button> */}
        <List 
          size = 'large'
          dataSource={this.props.list}
          renderItem={
            item => <List.Item>{item.name}</List.Item>
          }          
        >
        </List>
      </div>
    );
  }
}


