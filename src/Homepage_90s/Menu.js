import React from "react";

export default function Menu() {
    const menuList = ["Home", "Work", "Contact"];
    return (
        <div className="menu-wrapper">
            {
                menuList.map((menu) => {
                    return (
                        <div key={menu} className="menu-item">
                            {menu}
                        </div>
                    );
                })
            }
        </div>
    );
}
