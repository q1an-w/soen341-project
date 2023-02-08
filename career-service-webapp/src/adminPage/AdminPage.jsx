import * as React from "react";
import { Icon } from "@fluentui/react/lib/Icon";

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
    };
  }

  render() {
    return <div className="admin-page-container">Admin page</div>;
  }
}