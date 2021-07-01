$(".modal").hide()
function slider(){
    var default_slide = $("#card-slider").children()[0]
    var default_progress = $("#slider-progress").children()[0]
    var text_progress = $("#text-progress")
    $("#next-slide").click(() => {
        default_slide = $(default_slide).next()
        console.log(default_slide.index())
        slider_childern = $("#card-slider").children()
        if(default_slide.index() == -1){
            default_slide = $(slider_childern[0])
        }
        $(".card-item").hide()
        default_slide.show()
    
        default_progress = $(default_progress).next()
        progress_childern = $("#slider-progress").children()
        if(default_progress.index() == -1){
            default_progress = $(progress_childern[0])
        }
        $(".progress").removeClass("border-2")
        default_progress.addClass("border-2")
        $("#text-progress").text("0"+(default_slide.index()+1)+"/06")
    })
    $("#prev-slide").click(() => {
        default_slide = $(default_slide).prev()
        slider_childern = $("#card-slider").children()
        if(default_slide.index() == -1){
            console.log(default_slide.index())
            default_slide = $(slider_childern[slider_childern.length-1])
            console.log(default_slide.index())
        }
        $(".card-item").hide()
        default_slide.show()
    
        default_progress = $(default_progress).prev()
        progress_childern = $("#slider-progress").children()
        if(default_progress.index() == -1){
            default_progress = $(progress_childern[progress_childern.length-1])
        }
        $(".progress").removeClass("border-2")
        default_progress.addClass("border-2")
        $("#text-progress").text("0"+(default_slide.index()+1)+"/06")
    })
}
slider()
const activeMenu = (id) => {
    $(".menu-item").removeClass("border-b-2")
    $(".menu-item").removeClass("border-orange")
    $(id).addClass("border-b-2")
    $(id).addClass("border-orange")
}
$(window).scroll(function() {
    var navbarHeight = $(".navbar").height()
    console.log($(this).scrollTop())
    if($(this).scrollTop() > 0){
        console.log("Test")
        $(".navbar").removeClass("absolute")
        $(".navbar").removeClass("bg-gradient-linear")
        $(".navbar").addClass("fixed")
        $(".navbar").addClass("bg-red-jogja")
    }else{
        $(".navbar").addClass("absolute")
        $(".navbar").addClass("bg-gradient-linear")
        $(".navbar").removeClass("fixed")
        $(".navbar").removeClass("bg-red-jogja")
    }
})
$(".open-modal").click(function(){
    console.log(1)
    var modal_id = $(this).data("modal-id")
    $("#"+modal_id).show()
})
$(".button-close").click(() => {$(".modal").hide()})
var app = Sammy('#main', function() {
    this.get('#/', function() {
        $("#main").load("home.html", () => {
            activeMenu("#beranda")
            slider()
            $(".open-modal").click(function(){
                console.log(1)
                var modal_id = $(this).data("modal-id")
                $("#"+modal_id).show()
            })
            $(".button-close").click(() => {$(".modal").hide()})
        })
    });
    this.get('#/explore/jogja', function() {
        $("#main").load("explore.html", () => {
            $("#dropdown-navigator option[value=1]").attr('selected','selected');
            activeMenu("#jelajahi")
            dropDownFunc()
            $("#main-explore").load("sekilas.html")
        });
    });
    this.get('#/explore/wisata', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
            activeMenu("#jelajahi")
            dropDownFunc()
            $("#dropdown-navigator option[value=3]").attr('selected','selected');
            $("#main-explore").load("wisata.html", () => {
                $(".open-modal").click(function(){
                    console.log(1)
                    var modal_id = $(this).data("modal-id")
                    $("#"+modal_id).show()
                })
                $(".button-close").click(() => {$(".modal").hide()})
                $(".tab-menu").click(function(){
                    console.log(1)
                    $(".tab-menu").removeClass("bg-red-jogja")
                    $(".tab-menu").addClass("text-gray-400")
                    $(".tab-menu").removeClass("text-white")
                    $(this).addClass("bg-red-jogja")
                    $(this).removeClass("text-gray-400")
                    $(this).addClass("text-white")
                    var tab_id = $(this).data("tab-id")
                    $(".tab").hide()
                    $("#"+tab_id).show()
                })
            })
        });
    });
    this.get('#/explore/kuliner', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
            dropDownFunc()
            activeMenu("#jelajahi")
            $("#dropdown-navigator option[value=2]").attr('selected','selected');
            $("#main-explore").load("kuliner.html", () => {
                $(".open-modal").click(function(){
                    console.log(1)
                    var modal_id = $(this).data("modal-id")
                    $("#"+modal_id).show()
                })
                $(".button-close").click(() => {$(".modal").hide()})
                $(".tab-menu").click(function(){
                    console.log(1)
                    $(".tab-menu").removeClass("bg-red-jogja")
                    $(".tab-menu").addClass("text-gray-400")
                    $(".tab-menu").removeClass("text-white")
                    $(this).addClass("bg-red-jogja")
                    $(this).removeClass("text-gray-400")
                    $(this).addClass("text-white")
                    var tab_id = $(this).data("tab-id")
                    $(".tab").hide()
                    $("#"+tab_id).show()
                })
            })
        });
    });
    this.get('#/explore/budaya', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
            dropDownFunc()
            activeMenu("#jelajahi")
            $("#dropdown-navigator option[value=4]").attr('selected','selected');
            $("#main-explore").load("budaya.html", () =>{

                $(".open-modal").click(function(){
                    console.log(1)
                    var modal_id = $(this).data("id-modal")
                    $("#"+modal_id).show()
                })
                $(".button-close").click(() => {$(".modal").hide()})
            })
        });
    });
    this.get('#/explore/transportasi', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
            dropDownFunc()
            activeMenu("#jelajahi")
            $("#dropdown-navigator option[value=5]").attr('selected','selected');
            $("#main-explore").load("transportasi.html")
        });
    });
    this.get('#/explore/souvenir', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
            $("#dropdown-navigator option[value=6]").attr('selected','selected');
            dropDownFunc()
            activeMenu("#jelajahi")
            $("#main-explore").load("souvenir.html")
        });
    });
    this.get('#/kontak', function() {
        activeMenu("#kontak-kami")
        $("#main").load("kontak.html");
    });
    this.get('#/berita', function() {
        $("#main").load("berita.html", () => {
            $(".modal").hide()
            dropDownFunc()
            activeMenu("#berita")
            $.ajax({
                url:"https://newsapi.org/v2/everything?q=wisata yogyakarta&apiKey=db5b92ead6dc49d39aa35c949e8c1262"
            }).then((data) =>{
                console.log(data)
                $("#berita-top").append('<div class="grid grid-cols-1 gap-4 w-1/3">'+
                '<div class="h-full w-full">'+
                '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[0]["urlToImage"]+'"></div>'+
                    '<div class="thumbnail h-auto p-9 bg-white black-shadow"><div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[0]["publishedAt"]+'</div>'+
                        '<div class="text-base font-bold">'+data.articles[0]["title"]+'</div>'+
                    '</div>'+
                '</div>'+
                '<div class="h-full w-full">'+
                '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[1]["urlToImage"]+'"></div>'+
                    '<div class="thumbnail h-auto p-9 bg-white black-shadow">'+
                        '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[1]["publishedAt"]+'</div>'+
                        '<div class="text-base font-bold">'+data.articles[1]["title"]+'</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="h-full w-full w-2/3 pl-7">'+
                '<div class="thumbnail h-96 bg-gray-900 overflow-hidden"><img class="w-full" src="'+data.articles[2]["urlToImage"]+'"></div>'+
                '<div class="thumbnail h-full p-9 bg-white black-shadow">'+
                '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[2]["publishedAt"]+'</div>'+
                '<div class="text-base font-bold pb-6">'+data.articles[2]["title"]+'</div>'+
                '<div class="text-sm font-light">'+data.articles[2]["description"]+'</div>'+
            '</div>'+
           '</div>')
            })
        });
    });
  }).run();
function dropDownFunc(){
    $("#dropdown-navigator").on('change', function() {
        console.log(this.value)
        if(this.value == 1){

            window.location.hash = "/explore/jogja"
        }else if (this.value == 2){

            window.location.hash = "/explore/kuliner"
        }else if (this.value == 3){
            window.location.hash = "/explore/wisata"
        }else if (this.value == 4){
            window.location.hash = "/explore/budaya"
        }else if (this.value == 5){
            window.location.hash = "/explore/transportasi"
        }else if (this.value == 6){
            window.location.hash = "/explore/souvenir"
        }
    });
}