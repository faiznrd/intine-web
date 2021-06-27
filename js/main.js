stickybits("#lol");
$('#loading').hide()
$('.hamburger').on("click",function(){
    console.log("lol")
    $('.hamburger').toggleClass('hamburger--collapse')
    $('.hamburger').toggleClass('is-active');
    $("#dark").toggleClass('hidden')
    $("#white").toggleClass('hidden')
    $("#content").slideToggle()
    $(".lang-trigger").toggleClass("text-white");
    $(".lang-trigger").toggleClass("text-black");
    $(".hamburger-box").toggleClass("white")
});
$(".item-menu, .home").click(() =>{
    $('.hamburger').toggleClass('hamburger--collapse')
    $('.hamburger').toggleClass('is-active');
    $("#dark").toggleClass('hidden')
    $("#white").toggleClass('hidden')
    $("#content").slideToggle()
    $(".lang-trigger").toggleClass("text-white");
    $(".lang-trigger").toggleClass("text-black");
    $(".hamburger-box").toggleClass("white") 
})
$(".home").click(() => {
    $("#menu-corner").hide()
})
$(".item-menu").click(() => {
    $("#menu-corner").show()
})
$(".lang-trigger").click(function() {
    $('[lang="en"]').toggle()
    $('[lang="id"]').toggle()
    console.log($(".lang-trigger").text())
    if ($.cookie('lang') === 'en') {
        $.cookie('lang', 'id', { expires: 7 });
      } else {
        $.cookie('lang', 'en', { expires: 7 });
      }
    if($(".lang-trigger").text() == "IDID"){
        $($(".lang-trigger").get(0)).text("EN")
        $($(".lang-trigger").get(1)).text("EN")
    }else{
        $($(".lang-trigger").get(0)).text("ID")
        $($(".lang-trigger").get(1)).text("ID")
    }
    })
if ($.cookie('lang')) {
    var lang = $.cookie('lang');
    if (lang === 'en') {
        $(".lang-trigger").text("ID")
        $('[lang="id"]').hide();
    } else {
        $(".lang-trigger").text("EN")
      $('[lang="en"]').hide();
    }
}else{
    $('[lang="en"]').hide();
}
$(".lang-trigger").addClass("font-bold");

const isDarkModeEnabled = () => {
    if(localStorage.getItem("dark")){
        return true
    }
    return false
}
const bannerChange = (selector) => {
    if(selector.scrollTop() >= $("#wisata-banner").offset().top - 300){
        $("#text-data-wrapper").css("background", "#AFC2CE")
        $(".text-data").hide();
        $("#wisata-text").show();
    }if(selector.scrollTop() >= $("#kuliner-banner").offset().top - 300){
        $("#text-data-wrapper").css("background", "#A65B2C")
        $(".text-data").hide();
        $("#kuliner-text").show();
    }
    if(selector.scrollTop() >= $("#transportasi-umum-banner").offset().top - 300){
        $("#text-data-wrapper").css("background", "#D5FAEE")
        $(".text-data").hide();
        $("#transportasi-umum-text").show();
    }
    if(selector.scrollTop() >= $("#kebudayaan-banner").offset().top - 300 ){
        $("#text-data-wrapper").css("background", "#F3AEA4")
        $(".text-data").hide();
        $("#kebudayaan-text").show();
    }
}
$("#text-data-wrapper").css("background", "#AFC2CE")
$(".text-data").hide();
$("#wisata-text").show();
bannerChange($(window));
$(window).on("scroll",function() { 
    bannerChange($(this))
});

const DarkMode = () => {
    $("#description-jogja").addClass("bg-black").addClass("text-white");
    
}
$("#menu-corner").hide()
Sammy('#main', function() {
    this.get('#/:page', function() { 
        AOS.init();
        $('#loading').slideToggle()
        $('#main').load(this.params['page'] + '.html', () =>{
            $('#loading').slideToggle()
            if(this.params['page'] == "home"){
                console.log(this.params["page"])
                $("#menu-corner").hide()
                stickybits("#lol");
                if ($.cookie('lang')) {
                    var lang = $.cookie('lang');
                    console.log(lang)
                    if (lang === 'en') {
                        $(".lang-trigger").text("ID")
                        $('[lang="id"]').hide();
                    } else {
                        $(".lang-trigger").text("EN")
                        $('[lang="en"]').hide();
                    }
                }else{
                    $('[lang="en"]').hide();
                }
            }else{
                if ($.cookie('lang')) {
                    var lang = $.cookie('lang');
                    console.log(lang)
                    if (lang === 'en') {
                        $(".lang-trigger").text("ID")
                        $('[lang="id"]').hide();
                    } else {
                        $(".lang-trigger").text("EN")
                        $('[lang="en"]').hide();
                    }
                }else{
                    $('[lang="en"]').hide();
                }
            }
        });
    });
}).run();
