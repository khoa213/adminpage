import React from "react";
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const StyledTitle = styled(Title)`
  color: #07de93;
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  .sp {
    color: ${props => props.count > 5 ? "blue" : "#BF4F74"};
    margin-left:30px;
    margin-right:30px;
  }
`;

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, loading: true};
  }
  componentDidMount() {
    // Gọi API
    // có data
    console.log('Did mount');
    setTimeout(()=>{this.setState({ loading: false });}, 0);
    // Lưu lại vào trong state
    // set state loading = false
  
  }
  onDecrease = () => {
    this.setState({ count: this.state.count-1 });
  }
  onIncrease = () => {
    this.setState({ count: this.state.count+1 });
  }
  render() {
    return (
      <Wrapper count={this.state.count}>
        <Title>Hello {this.props.name} <span>!!!!!!!</span></Title>
        <StyledTitle>Helloooo</StyledTitle>
        <button className="count-button" onClick={() => this.onDecrease()}>-</button>
        <span className="sp">{this.state.count}</span>
        <button className="count-button" onClick={() => this.onIncrease()}>+</button>
      </Wrapper>
    )
  }
}