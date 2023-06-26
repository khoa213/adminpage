import styled from "styled-components";
import { ReactComponent as MarketIcon } from "assets/market-icon.svg";
import { ReactComponent as HomeIcon } from "assets/home-icon.svg";
import { NavLink } from "react-router-dom";
import { Logo } from "components/Logo";
import { Switch } from 'antd';
const StyledLogo = styled(Logo)`
  margin:20px 0 20px;
`
const StyledSideBar = styled.div`
  background-color: white;
  height: 100vh;
  padding: 32px;
  .sidebar-menu {
    margin-bottom: 24px;
    font-weight: bold;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: unset;
    color: #7a797d;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 24px;
  }
  .active {
    svg {
      path {
        stroke: #f30ee4;
      }  
    }
    color: #f30ee4;
  }
  .item-text {
    margin-left: 12px;
  }
`;

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledLogo></StyledLogo>
      <div className="nav">
        <div></div>
        <NavLink to="/">
          <HomeIcon />
          <span className="item-text">Home</span>
        </NavLink>
        <NavLink to="/users">
          <MarketIcon />
          <span className="item-text">Users</span>
        </NavLink>
        <NavLink to="/login">
          <MarketIcon />
          <span className="item-text">Login</span>
        </NavLink>
        <NavLink to="/dashboard">
          <MarketIcon />
          <span className="item-text">Dashboard</span>
        </NavLink>
        <NavLink to="/product">
          <MarketIcon />
          <span className="item-text">Product</span>
        </NavLink>
        <div className="sidebar-menu">PROFILE</div>
        
        <div className="sidebar-menu">Other</div>
        <Switch defaultChecked onChange={onChange} />
      
      </div>
    </StyledSideBar>
  );
};
