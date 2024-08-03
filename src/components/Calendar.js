import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

export class Calendar extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = { calendarList: [] };
    }

    componentDidMount() {
        const data = this.state.calendarList;
        const apiUrl = 'http://localhost:3000/';

        fetch(this.apiUrl, {
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(resp => {
              if (resp.ok) {
                return resp.json();
              }
          
              throw new Error("Network error!");
            })
            .then(resp => {
              console.log(resp);
            });
             
    }

    render () {
        return console.log(this.state);
    }
}

root.render(<Calendar />)

export default Calendar;