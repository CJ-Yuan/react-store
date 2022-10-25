import React from 'react'
import {Routes} from "react-router-dom"

import BottomNav from '../../components/BottomNav'

export default function Layout(props) {
  return (
    
    <div>
      <BottomNav />
      {
        <Routes>{props.children}</Routes>
      }
    </div>
  )
}
