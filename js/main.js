stickybits("#lol");
const isDarkModeEnabled = () => {
    if(localStorage.getItem("dark")){
        return true
    }
    return false
}
const bannerChange = (selector) => {
    if(selector.scrollTop() >= $("#wisata-banner").offset().top - 200){
        $("#text-data-wrapper").css("background", "#EBF9F0")
        $(".text-data").hide();
        $("#wisata-text").show();
    }if(selector.scrollTop() >= $("#kuliner-banner").offset().top - 200){
        $("#text-data-wrapper").css("background", "#F6D8C4")
        $(".text-data").hide();
        $("#kuliner-text").show();
    }
    if(selector.scrollTop() >= $("#transportasi-umum-banner").offset().top - 200){
        $("#text-data-wrapper").css("background", "#D5FAEE")
        $(".text-data").hide();
        $("#transportasi-umum-text").show();
    }
    if(selector.scrollTop() >= $("#kebudayaan-banner").offset().top - 200 ){
        $("#text-data-wrapper").css("background", "#F3AEA4")
        $(".text-data").hide();
        $("#kebudayaan-text").show();
    }
}
bannerChange($(window));
$(window).on("scroll",function() { 
    bannerChange($(this))
});

const DarkMode = () => {
    $("#description-jogja").addClass("bg-black").addClass("text-white");

}