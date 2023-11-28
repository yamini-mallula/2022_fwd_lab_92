  let button=document.getElementById('btn');
  let name=document.getElementById('ab');
  let pass=document.getElementById('cd');
  let email=document.getElementById('bg');
  let phone=document.getElementById('t');
     document.getElementById('un').style.visibility='hidden'
     document.getElementById('pw').style.visibility='hidden'
     document.getElementById('em').style.visibility='hidden'
     document.getElementById('pn').style.visibility='hidden'
      function validate()
     {
        if((name.value.trim()!= " " && pass.value.trim()!=" ") && (email.value.trim()!= " " && phone.valuye.trim()!= " "))
          {
            console.log("Enter details");
          }
          else
          {
            document.getElementById('un').style.visibility='visible'
            document.getElementById('un').style.visibility='visible'
            document.getElementById('un').style.visibility='visible'
            document.getElementById('un').style.visibility='visible'
            return false
          }
     }

  
