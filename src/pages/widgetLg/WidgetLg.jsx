import React from 'react'
import './widgetLg.css'
import { Link} from 'react-router-dom'

export default function WidgetLg(){
    return (
    <div className="widgetLg">
        <span className="widgetLgTitle">새로운 가입 신청</span>
        <Link to="/newUser" className="link">
        <button className="widgetLgButton">
                    <div className="checkButton" />
                    바로가기
                </button>
                </Link>
        <ul className="widgetLgList">
            <li className="widgetLgListItem">
                <div className="widgetLgUser">
                    <span className="widgetLgUsername">박정재</span>
                    </div>
                    <div className="widgetLgUser">
                    <span className="widgetLgUserTilte">컴퓨터공학과</span>
                
                </div>
            </li>
        </ul>
    </div>
    )
}