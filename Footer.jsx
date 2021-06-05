import React From "react";

  
function Footter(){
    var year= new Date().getFullYear();
    return (

        <div> 
         <footer>
           <p>copyright &copy {year};</p> 
         </footer>
        </div>
    );
}

 export default footer;