import { Avatar } from "./BlogCard"

function AppBar() {
  return (
    <div className="border-b-2 flex justify-between px-10 py-3">
        <div className="text-xl font-semibold flex flex-col justify-center">Medium</div>
        <div className=""><Avatar size="big" name="Vipul"/></div>
    </div>
  )
}

export default AppBar