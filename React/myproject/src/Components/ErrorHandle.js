function EventHandle(){
    const Handle=()=>{
        alert("something went wrong");
    }
    return(
        <>
        <button onClick={Handle}>Submit</button>
        </>
    );
}
export default ErrorHandle;