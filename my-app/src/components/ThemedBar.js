import React from "react";
import ThemeContext from "../theme-context";

const ThemedBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        <div
                            className="alert mt-5"
                            style={ {backgroundColor: theme.bgColor, color: theme.color} }
                        >
                            style space
                            <button className="theme.classnames">
                                style button
                            </button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}
export default ThemedBar;