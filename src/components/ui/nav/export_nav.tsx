import MediaQuery from "react-responsive"
import MobileNav from "./mobile_nav"
import DesktopNav from "./desktop_nav"

const ExportNav = () => {
  return (
    <>
        <MediaQuery maxWidth={'950px'}>
            <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={'951px'}>
            <DesktopNav />
        </MediaQuery>
    </>
  )
}

export default ExportNav