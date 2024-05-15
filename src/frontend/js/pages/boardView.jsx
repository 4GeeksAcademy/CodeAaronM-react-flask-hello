import React from "react"
import { useParams } from "react-router-dom"

import { Context } from "../store/appContext.jsx"

import Board from "../component/board.jsx"
//import BoardToolBar from "./component/board/toolbar.jsx"
//import TrashBin from "./component/trashbin.jsx"

/**
 *  -- Board View --
 * 
 *  Renders a board loading it from URL params 'PID' (project ID) and 'BID' (board ID)
 *  note that ids work in several ways:
 *  if no PID given then BID will be treated as a global board id (GBID) (not contained in any project)
 *  if PID is given, BID must be the board id WITHIN the project, not its GBID (all boards have GBID value stored anyway)
 *  if nothing is given, or ids doesn't get any result, we should render some custom "error, board not found" component/view
 * 
 *  As this is the Board View, the side panel and topbar must be added here
 * 
 */
const BoardView= ()=>{
  const
    { store, actions }= React.useContext(Context),
    { pid, bid }= useParams() // URL params

  React.useEffect(()=>{
    // TODO: flux action -- get board -- requires defining DB table
    // actions.getBoard(pid, bid)
    console.log(`hello world: ${pid} / ${bid}`)
  },[])

  // return the board passing it the data
  return (
    <Board/>
  )
}

export default BoardView