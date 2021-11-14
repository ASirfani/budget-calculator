const Alart = ({text,type}) => {
    return ( 
        <div className={`alert alert-${type}`}> {text}</div>
     );
}
 
export default Alart;