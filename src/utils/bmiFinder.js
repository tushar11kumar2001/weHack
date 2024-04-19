export const bmiFinder = (weight,height)=>{
    const heightInM = height/100;
   return Number((weight/(heightInM*heightInM)).toFixed(2));
}