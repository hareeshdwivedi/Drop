import React from "react";
import './style.css'

const Menu = (props: {
    menuItem: any;
  }) => {
    const {
        menuItem
    } = props;
  
    return (
        <>
        {(menuItem || []).map((item:any, index:Number) => {
            return (
                <div className="nav" id={`${item.key}-${index}`}>
                    <h3 className="start-align">{item?.value}</h3>
                </div>
            )
        })}
        </>
    )
}

export default Menu