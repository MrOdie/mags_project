import React from "react";
import { accordion } from "../../assets/js/accordion";
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

class AccordionComponent extends React.PureComponent {

    componentDidMount() {
        accordion();
    }

    render() {
        return (
            <div className="accordion__component">
                {
                    this.props.labels.map((el, ind) => {
                        return (
                            <div key={`accordion_content_${ind}`}>
                                <button className="accordion">
                                    {el.label}
                                    <FontAwesomeIcon className="accordion__plus" icon={faPlus} />
                                </button>
                                <div className="panel">
                                    {ReactHtmlParser(el.panel)}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};

export default AccordionComponent;
