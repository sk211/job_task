$(document).ready(function () {
    $("#id1").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://spikebot.io/wp-content/uploads/2021/03/spikebot_features_Fan_lights.mp4" type="video/mp4"></source>');
            $('#video_player')[0].play();
            $("#title").html('<h3>Access the light</h3>')
            $("#img").css("display", "none")

        }, function () {
            $("#hoverToshow").css("display", "none")




            // $('#hoverToshow').attr('src', '');
        });
    $("#id2").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://cdn-bbokj.nitrocdn.com/SwdxztHzsMUiNgypxJmzVRhHTVzNobCS/assets/static/source/rev-1231084/wp-content/uploads/2021/03/spikebot_features_AC.mp4" type="video/mp4"></source>');
            $("#title").html('<h3>Control the ac</h3>')
            $("#img").css("display", "none")


        }, function () {
            $("#hoverToshow").css("display", "none")

        });

    $("#id3").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://spikebot.io/wp-content/uploads/2021/03/spikebot_features_Curtain.mp4" type="video/mp4"></source>');
            $("#title").html('<h3>Curtain Sensor </h3>')
            $("#p").html('<p>Accessible from any location through Wi-Fi and mobile data</p>')
            $("#img").css("display", "none")


        }, function () {
            $("#hoverToshow").css("display", "none")

        });

    $("#id4").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://cdn-bbokj.nitrocdn.com/SwdxztHzsMUiNgypxJmzVRhHTVzNobCS/assets/static/source/rev-1231084/wp-content/uploads/2021/03/spikebot_features_Temp.mp4" type="video/mp4"></source>');
            $("#title").html('<h3>Control the ac</h3>')
            $("#img").css("display", "none")

        }, function () {
            $("#hoverToshow").css("display", "none")

        });

    $("#id5").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://cdn-bbokj.nitrocdn.com/SwdxztHzsMUiNgypxJmzVRhHTVzNobCS/assets/static/source/rev-1231084/wp-content/uploads/2021/03/spikebot_features_Gas1.mp4" type="video/mp4"></source>');
            $("#title").html("<h3>Gas Sensor</h3>")
            $("#p").html("<p>Accessible from any location through Wi-Fi and mobile data</p>")
            $("#img").css("display", "none")


        }, function () {
            $("#hoverToshow").css("display", "none")

        });

    $("#id6").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://spikebot.io/wp-content/uploads/2021/03/spikebot_features_Smart_remote.mp4" type="video/mp4"></source>');
            $("#title").html('<h3>Switches Sensor</h3>')
            $("#p").html('<p>Accessible from any location through Wi-Fi and mobile data</p>')
            $("#img").css("display", "none")

        }, function () {
            $("#hoverToshow").css("display", "none")

        });

    $("#id7").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://cdn-bbokj.nitrocdn.com/SwdxztHzsMUiNgypxJmzVRhHTVzNobCS/assets/static/source/rev-1231084/wp-content/uploads/2021/03/spikebot_features_door_window.mp4" type="video/mp4"></source>');
            $("#title").html('<h3>Door Sensor</h3>')
            $("#p").html('<p>Accessible from any location through Wi-Fi and mobile data</p>')
            $("#img").css("display", "none")


        }, function () {
            $("#hoverToshow").css("display", "none")

        });

    $("#id8").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://cdn-bbokj.nitrocdn.com/SwdxztHzsMUiNgypxJmzVRhHTVzNobCS/assets/static/source/rev-1231084/wp-content/uploads/2021/03/spikebot_features_Geyser.mp4" type="video/mp4"></source>');
            $("#video_player")[0].play();
            $("#title").html('<h3>Control the ac</h3>')
            $("#img").css("display", "none")


        }, function () {
            $("#hoverToshow").css("display", "none")

        });
    $("#id9").hover(
        function () {
            $("#hoverToshow").css("display", "block")
            $("#video_player")[0].play();
            $("#video_player")[0].load();
            $("#video_player").html('<source src="https://spikebot.io/wp-content/uploads/2021/03/spikebot_features_security_camera.mp4" type="video/mp4"></source>');
            $("#title").html('<h3>Control the ac</h3>')
            $("#img").css("display", "none")


        }, function () {
            $("#hoverToshow").css("display", "none")

        });
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
// alert("Hello world")