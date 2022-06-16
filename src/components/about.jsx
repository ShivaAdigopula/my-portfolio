import { Fragment } from "react";

export function AboutComponent({ picture, about }) {
    return <Fragment>
        <div id="about" className="about flex-column">
            
            
                <div className="flex-item">
                    <img src={picture} className="profile-image" />
                </div>
                <div className="flex-item">
                    {
                        about && about.map(sentence => <div>{sentence}</div>)
                    }
                </div>
            </div>
        
    </Fragment>
}