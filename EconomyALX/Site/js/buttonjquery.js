$(document).ready(function(){ 
    $('#menuToggle').click(function(){
        $('#mainNav').stop(true, true).slideToggle('slow', function() {
            if ($(this).is(':visible'))
                $(this).css('display','grid').css('justify-content','center')
         })
    })
    $('.detailToggle').click(function(){
        
       $('.detailTable').stop(true, true).slideToggle()
    })
    $('.detailToggle2').click(function(){
        
        $('.detailTable2').stop(true, true).slideToggle()
     })
     $('.detailToggle3').click(function(){
        
        $('.detailTable3').stop(true, true).slideToggle()
     })
     $('.detailToggle4').click(function(){
        
        $('.detailTable4').stop(true, true).slideToggle()
     })
       
    
})
   

/*
$(document).ready(function(){
    $('#menuAdd').click(function(){
        $('#addNav').stop(true, true).slideToggle()
    })
})
*/
 function addNavContainer() {
    el = document.getElementById("addNavContainer");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    }
function addNewHs (){
    addNavContainer();
    
      }