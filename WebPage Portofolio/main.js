function toggleDetail(e) {
    const target = $(e.target)
    
    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active");
    }else{  
        $(target).html("Less Info").addClass("active")
    }
    // // $(target).html('Less Info').addClass('Active')
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail") 

    // console.log($(item).children());

    $(detail).slideToggle()
}

function onSubmitForm(e) {
    e.preventDefault();

    const email = $("#inp-email")
    const subject = $("#inp-subject")
    const message = $("#inp-subject")

    if(!email.val() || !subject.val() || !message.val()){
        alert("Please fill the form")
    }else{
        alert("Submit success")
    }
}
