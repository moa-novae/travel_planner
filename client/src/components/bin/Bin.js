import React, { useEffect, useState } from 'react'
import BinItem from '../binItem'


export default function (props) {
  const binItems = props.bin.map(function(item, index) {
    return (<BinItem key={index}
    name={item.name}
    region={(item.region? item.region : null)}
    // deletePoint={props.deletePoint}
    lat={props.lat}
    lng={props.lng}
    />)
  })
  return (
    <div> {"Bin"}
      {binItems}
    </div>
  )
}
