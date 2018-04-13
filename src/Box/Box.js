import React, { Component } from 'react';
import './Box.css';
import './Cathegory.css';
import './Underline.css';
import './BoxText.css';



class Box extends Component {

    layOut = (element) => {
        //console.log(element);
        let cathegories = [];
        for (let key in element) {
            if (element.hasOwnProperty(key)) {

                let elementOriginalWidth = key.length * 10;
                if (key.length < element[key].length) {
                    elementOriginalWidth = element[key].length * 10
                }
                if (elementOriginalWidth < 30) { elementOriginalWidth = 30 }
                if (elementOriginalWidth>150) {elementOriginalWidth=150}


                cathegories.push(
                    <div className='cathegory' style={{ width: elementOriginalWidth }} key={Math.random().toString(36).substr(2, 9)}>
                        <label className='underline'>{key}</label>
                        <div className='boxText'>{element[key]}</div>
                    </div>
                );

            }
        }
        return cathegories;
    }

    render() {

        let headers = "empty";
        if (this.props.information) {
            headers = this.layOut(this.props.information);
        }

        return (
            <div className='boxStyle'> {headers}</div>
        )
    }
}

export default Box;