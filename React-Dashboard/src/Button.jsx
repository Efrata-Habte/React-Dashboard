// import button from './Button.module.css'

function Button(){

    // Inline styles for the button

    // const styles={
    //     display:"block",
    //     margin:"20px 0",
    //     padding:"15px 25px",
    //     fontSize:"16px",
    //     backgroundColor:"#007BFF",
    //     color:"#fff",
    //     border:"none",
    //     borderRadius:"5px",
    //     cursor:"pointer"
    // }

    //return <button style={styles}>Click Me</button>;

    // Using CSS module for styling
    //return <button className={button.customButton} >Click Me</button>;

    // Using regular CSS file for styling
    return <button className="customButton" >Click Me</button>;
}
export default Button