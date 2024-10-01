function bttn_click(value){
    document.getElementById("screen").value+=value
}

function clear_Box(){
    document.getElementById("screen").value=""
}
function result(){
    try
    {
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
     
        if(text.includes('/0')||text.includes('%0')){
            document.getElementById("screen").value="by zero not possible"
        }
    }
    catch(error)
    {
        
        document.getElementById("screen").value="error"
        
    }
}
function del(){
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}
function square(){
  let screen_value=document.getElementById("screen").value
  let num=Number(screen_value)
  let result=num*num
  document.getElementById("screen").value=result
}
