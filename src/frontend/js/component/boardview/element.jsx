import React from "react"
import { Context } from "../../store/appContext.jsx"

const Element = () => {
	const { store, actions } = React.useContext(Context)

	return (
    <div className="flex bg-zinc-800 h-12 rounded-md">
      <div className="my-auto">
        <span className="mx-4 text-lg">[Element]</span>
      </div>
		</div>
	)
}

export default Element
