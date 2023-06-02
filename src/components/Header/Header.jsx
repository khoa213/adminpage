import styled from "styled-components";
import avatar from "assets/avatar.svg";
import searchIcon from "assets/search-icon.svg";
import noti from "assets/noti.svg"
import {useSelector} from "react-redux";

const HeaderStyled = styled.div`
  padding: 32px;
  position: fixed;
  width: -webkit-fill-available;
  z-index: 99;
  height: 56px;
  display: flex;
  justify-content: space-between;
  .search-input {
    width: 461px;
    height: 56px;
    border-radius: 35px;
    border: none;
    text-indent: 56px;
    font-size: 16px;
    line-height: 21px;
    outline: none;
  }
  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    img {
      position: absolute;
      margin-left: 24px;
    }
  }
  .noti-icon {
    width: 56px;
    height: 56px;
    background-color: white;
    border-radius: 50%;
    img {
      padding: 16px;
    }
  }
  .user-info {
    display: flex;
    gap: 24px;
  }
`;
const Header = () => {
  const loggedinUser = useSelector((state) => state.auth);
  return (
    <HeaderStyled>
      <span className="search-wrapper">
        <img src={searchIcon} alt="search"></img>
        <input
          placeholder="Search Item, Collection and Account.."
          className="search-input"
          type="text"
        ></input>
      </span>
      <div className="user-info">
        <div className="noti-icon"><img src={noti} alt="noti"></img></div>
        <span>{loggedinUser.username}</span>
        <img src={avatar} alt="avatar" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
