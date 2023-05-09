import React from 'react'
import './widgetSm.css'
import { Link} from 'react-router-dom'

export default function WidgetSm(){
    return <div className="widgetSm">
        <span className="widgetSmTitle">실시간 신고</span>
        <Link to="/report" className="link">
        <button className="widgetSmButton">
                    <div className="checkButton" />
                    바로가기
                </button>
                </Link>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">박정재</span>
                    </div>
                    <div className="widgetSmUser">
                    <span className='widgetSmUserTitle'>컴퓨터공학과</span>
                </div>
            </li>
        </ul>
        </div>
}