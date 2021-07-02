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
$("#bahasa").hide()
$("#bahasa-click").click(() =>{
    $("#bahasa").toggle()
    console.log(0000000)
})
$(window).scroll(function() {
    var navbarHeight = $(".navbar").height()
    console.log($(this).scrollTop())
    if($(this).scrollTop() > 0){
        console.log("Test")
        $(".navbar").removeClass("absolute")
        $(".navbar").removeClass("bg-gradient-linear")
        $(".navbar").addClass("fixed")
        $(".navbar").addClass("bg-darker-red")
        $(".navbar").addClass("black-shadow")
    }else{
        $(".navbar").removeClass("black-shadow")
        $(".navbar").addClass("absolute")
        $(".navbar").addClass("bg-gradient-linear")
        $(".navbar").removeClass("fixed")
        $(".navbar").removeClass("bg-darker-red")
    }
})
$(".open-modal").click(function(){
    console.log(1)
    var modal_id = $(this).data("modal-id")
    $("#"+modal_id).show()
})
$(".button-close").click(() => {$(".modal").hide()})
var app = Sammy('#main', function() {
    this.get("/", function(){
        $("#main").load("home.html", () => {
            AOS.init();
            slider()
            $(".open-modal").click(function(){
                console.log(1)
                var modal_id = $(this).data("modal-id")
                $("#"+modal_id).show()
            })
            $(".button-close").click(() => {$(".modal").hide()})
            $("#berita-top").append(                    
                '<div class="grid grid-cols-2 gap-4">'+
            '<div class="h-full w-full rounded-3xl black-shadow overflow-hidden">'+
                '<div class="thumbnail h-96 bg-gray-900 overflow-hidden"><img class="w-full" src="assets/img/wisata/kota/malioboro.png"></div>'+
                '<div class="thumbnail p-9 bg-white">'+
                '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">20 Juni 2009</div>'+
                '<div class="text-base font-bold pb-6">Pengunjung Malioboro Diwajibkan Mematuhi Protokol Kesehatan Guna Menekan Angka Persebaran COVID-19</div>'+
                '<div class="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu id sit sit sed mi. Pellentesque sit nulla fames volutpat eu, mi. Lobortis lorem cursus odio volutpat non pellentesque risus. Et egestas elit vitae orci commodo mollis adipiscing nisl arcu. Eu cras vulputate facilisis pretium eu fermentum in vel. Pellentesque ante cras risus, dapibus ultricies cum suscipit.</div>'+
                '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="#">Baca Selengkapnya</a></div>'+
            '</div>'+
           '</div>'+
           '<div class="grid grid-cols-1 gap-4">'+
           '<div class="h-full w-full rounded-3xl black-shadow overflow-hidden">'+
               '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="w-full" src="assets/img/andhong.png"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white"><div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">13 Juni 1999</div>'+
                   '<div class="text-base font-bold">Delman atau yang Lebih Dikenal dengan Nama Andhong Menjadi Daya Tarik Tersendiri Bagi Para Wisatawan yang Mengunjungi Malioboro</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="#">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
           '<div class="h-full w-full rounded-3xl black-shadow overflow-hidden">'+
               '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="w-full" src="assets/img/bakpia.png"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white">'+
                   '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">19 Augstus 1969</div>'+
                   '<div class="text-base font-bold">Bakpia Pathok dengan Cita Rasa yang Khas Menjadi Pilihan Wisatawan Sebagai Oleh-Oleh yang Wajib Dibeli Ketika Berlibur ke Jogja</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="#">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
        '</div>'+
           '</div>')

        })
    })
    this.get('#/', function() {
        $("#main").load("home.html", () => {
            AOS.init();
            slider()
            $(".open-modal").click(function(){
                console.log(1)
                var modal_id = $(this).data("modal-id")
                $("#"+modal_id).show()
            })
            $(".button-close").click(() => {$(".modal").hide()})
            $.ajax({
                url:"https://gnews.io/api/v4/search?q=yogyakarta&token=e985cc7144bc55b1551dbc46c1fb0ce2&lang=en"
            }).then((data) =>{
                console.log(data)
                $("#berita-top").append(                    
                '<div class="grid grid-cols-2 gap-4">'+
            '<div class="h-full w-full rounded-3xl">'+
                '<div class="thumbnail h-96 bg-gray-900 overflow-hidden"><img class="w-full" src="'+data.articles[2]["image"]+'"></div>'+
                '<div class="thumbnail p-9 bg-white">'+
                '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[2]["publishedAt"]+'</div>'+
                '<div class="text-base font-bold pb-6">'+data.articles[2]["title"]+'</div>'+
                '<div class="text-sm font-light">'+data.articles[2]["description"]+'</div>'+
                '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[2]["url"]+'">Baca Selengkapnya</a></div>'+
            '</div>'+
           '</div>'+
           '<div class="grid grid-cols-1 gap-4">'+
           '<div class="h-full w-full rounded-3xl">'+
               '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[3]["image"]+'"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white"><div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[3]["publishedAt"]+'</div>'+
                   '<div class="text-base font-bold">'+data.articles[3]["title"]+'</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[3]["url"]+'">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
           '<div class="h-full w-full rounded-3xl">'+
               '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[1]["image"]+'"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white">'+
                   '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[1]["publishedAt"]+'</div>'+
                   '<div class="text-base font-bold">'+data.articles[1]["title"]+'</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[1]["url"]+'">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
   '</div>'+
           '</div>')
            })
        })
    });
    this.get('#/explore/jogja', function() {
        $("#main").load("explore.html", () => {
            $("#dropdown-navigator option[value=1]").attr('selected','selected');
            dropDownFunc()
            $("#main-explore").load("sekilas.html")
        });
    });
    this.get('#/explore/wisata', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
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
            $("#dropdown-navigator option[value=5]").attr('selected','selected');
            $("#main-explore").load("transportasi.html")
        });
    });
    this.get('#/explore/souvenir', function() {
        $("#main").load("explore.html", () => {
            $(".modal").hide()
            $("#dropdown-navigator option[value=6]").attr('selected','selected');
            dropDownFunc()
            $("#main-explore").load("souvenir.html")
        });
    });
    this.get('#/kontak', function() {
        $("#main").load("kontak.html");
    });
    this.get('#/berita', function() {
        $("#main").load("berita.html", () => {
            $(".modal").hide()
            dropDownFunc()
            $.ajax({
                url:"https://gnews.io/api/v4/search?q=yogyakarta&token=e985cc7144bc55b1551dbc46c1fb0ce2&lang=en"
            }).then((data) =>{
                console.log(data)
                $("#berita-top").append(
                    '<div class="grid grid-cols-2 gap-4"><div class="grid grid-cols-1 gap-4">'+
                '<div class="h-full w-full rounded-3xl">'+
                '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[3]["image"]+'"></div>'+
                    '<div class="thumbnail h-auto p-9 bg-white"><div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[3]["publishedAt"]+'</div>'+
                        '<div class="text-base font-bold">'+data.articles[3]["title"]+'</div>'+
                        '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[3]["url"]+'">Baca Selengkapnya</a></div>'+
                    '</div>'+
                '</div>'+
                '<div class="h-full w-full rounded-3xl">'+
                '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[1]["image"]+'"></div>'+
                    '<div class="thumbnail h-auto p-9 bg-white">'+
                        '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[1]["publishedAt"]+'</div>'+
                        '<div class="text-base font-bold">'+data.articles[1]["title"]+'</div>'+
                        '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[1]["url"]+'">Baca Selengkapnya</a></div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="h-full w-full rounded-3xl">'+
                '<div class="thumbnail h-96 bg-gray-900 overflow-hidden"><img class="w-full" src="'+data.articles[2]["image"]+'"></div>'+
                '<div class="thumbnail h-auto p-9 bg-white">'+
                '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[2]["publishedAt"]+'</div>'+
                '<div class="text-base font-bold pb-6">'+data.articles[2]["title"]+'</div>'+
                '<div class="text-sm font-light">'+data.articles[2]["description"]+'</div>'+
                '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[2]["url"]+'">Baca Selengkapnya</a></div>'+
            '</div>'+
           '</div></div>'+
           '<div class="grid grid-cols-3 gap-4 pt-5">'+
           '<div class="h-full w-full rounded-3xl">'+
           '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[4]["image"]+'"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white">'+
                   '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[4]["publishedAt"]+'</div>'+
                   '<div class="text-base font-bold">'+data.articles[4]["title"]+'</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[4]["url"]+'">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
           '<div class="h-full w-full rounded-3xl">'+
           '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[5]["image"]+'"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white">'+
                   '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[5]["publishedAt"]+'</div>'+
                   '<div class="text-base font-bold">'+data.articles[5]["title"]+'</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[5]["url"]+'">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
           '<div class="h-full w-full rounded-3xl">'+
           '<div class="thumbnail h-60 bg-gray-900 overflow-hidden"><img class="h-full" src="'+data.articles[6]["image"]+'"></div>'+
               '<div class="thumbnail h-auto p-9 bg-white">'+
                   '<div class="text-sm text-gray-400 font-light pb-6"><img class="inline-block pr-3" src="assets/svg/date-icon.svg" alt="" srcset="">'+data.articles[6]["publishedAt"]+'</div>'+
                   '<div class="text-base font-bold">'+data.articles[6]["title"]+'</div>'+
                   '<div class="text-sm font-light text-red-500 pt-5 font-bold"><a href="'+data.articles[6]["url"]+'">Baca Selengkapnya</a></div>'+
               '</div>'+
           '</div>'+
           +'</div>'
           )
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