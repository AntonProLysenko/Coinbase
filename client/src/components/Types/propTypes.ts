export type Props = {
   //React declares type by itself in states if we are passing the default value
    slidingHeader:React.SetStateAction<boolean>//I took the type from the declaration on the usestate
    homePageCheckr:React.RefObject<HTMLDivElement>
    headerCheckr:React.RefObject<HTMLDivElement>
    
    isMobileActive:React.SetStateAction<boolean>
    setMobileActive:React.Dispatch<React.SetStateAction<boolean>>
    windowWidth:number
}

