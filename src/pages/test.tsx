import React, { Component } from 'react';
import { AboutHero } from "../components/About/AboutC4C";
import '../components/About/about-styles.css';
import '../Fonts/css/satoshi.css';

interface Props {}

interface State {
  userData: {
    fname: string;
    email: string;
    lname: string;
  };
}

export default class MyComponent extends Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      userData: {
        fname: "",
        email: "",
        lname: "",
      },
    };
  }
  componentDidMount() {
    fetch("https://coin4cause-server.vercel.app/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      this.setState({userData: data.data});
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.userData.fname}</h1>
      </div>
    );
  }
}