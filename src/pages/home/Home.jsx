import React from 'react'
import Info from '../../pages/info/Info'
import './home.css'
import WidgetSm from '../../pages/widgetSm/WidgetSm'
import WidgetLg from '../../pages/widgetLg/WidgetLg'

export default function Home(){
    return <div className="home">
        <Info />
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
}