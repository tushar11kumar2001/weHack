export const dripSingle = (setColor1,setShow)=>{
   setTimeout(()=>{
    setShow(true);
    setColor1(false);
   },5000)
}