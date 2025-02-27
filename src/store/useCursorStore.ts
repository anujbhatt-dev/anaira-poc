import { create } from "zustand"


type ICursor = {
    isActive:boolean,
    innerHtml:string
}

type CursorAction = {
    scaleUp:(innerHtml:string)=>void
    scaleDown:()=>void
}

export const useCursorStore = create<ICursor & CursorAction>((set)=>({
    isActive:false,
    innerHtml:"",
    scaleUp:(innerHtml:string)=> {
        set({isActive:true, innerHtml})
    },
    scaleDown:()=> {
        set({isActive:false})
    },
}))