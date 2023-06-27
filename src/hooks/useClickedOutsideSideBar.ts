import { useEffect } from "react"
// import 

const useClickedOutsideSideBar = (ref: React.RefObject<HTMLButtonElement>, setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>)  => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        (ref.current && !ref.current.contains(event.target)) ||
        event.target.id === "navbar-layout" ||
        event.target.id === "home"
      ) {
        setShowSidebar((prevVal: boolean) => {
          return !prevVal && false;
        });
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref])
}

export default useClickedOutsideSideBar;
