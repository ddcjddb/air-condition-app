import React, { Component } from "react";
import axios from "axios";
import Detail from "./detail";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: [],
      update: "",
      matched: {},
      error: "",
      matched_keys: []
    };

    this.getWeather = this.getWeather.bind(this);
    this.onChange = this.onChange.bind(this);
    this.cityFilter = this.cityFilter.bind(this);
    this.childRender = this.childRender.bind(this);
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    axios.get(" http://api.help.bj.cn/apis/aqilist/").then(res => {
      const { data } = res;
      this.setState({ data: data.aqidata, update: data.update });
    });
  }
  getWeather(e) {
    e.preventDefault();
    const match = this.cityFilter(this.state.city, this.state.data);
    if (match.city) {
      this.setState({
        matched: match,
        matched_keys: this.childRender(match)
      });
    } else {
      this.setState({ error: "请输入正确的地址" });
    }
  }

  cityFilter(city, data) {
    let a = {};
    for (let i = 0; i < data.length; i++) {
      if (data[i].city === city) {
        a = data[i];
      }
    }
    return a;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
      matched_keys: []
    });
  }

  childRender(data) {
    const _key = Object.keys(data);
    return _key;
  }

  render() {
    const { matched, matched_keys } = this.state;

    return (
      <div>
        <form onSubmit={this.getWeather}>
          <div>
            {" "}
            <input type="text" name="city" onChange={this.onChange} />
            <input type="submit" value="获取天气" />
          </div>
          {this.state.error && <span>{this.state.error}</span>}
          <ul>
            {matched_keys.map((matched_key, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <Detail
                  matched_key={matched_key}
                  value={matched[matched_key]}
                />
              </li>
            ))}
          </ul>
          <p>更新时间：{this.state.update}</p>
        </form>
      </div>
    );
  }
}

export default Content;
